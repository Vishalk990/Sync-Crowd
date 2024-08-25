import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import CrowdSource from '@/models/CrowdSource';
import { Parser } from 'json2csv';

export async function GET(req, { params }) {
  await dbConnect();

  try {
    const projectId = params.id;
    const { searchParams } = new URL(req.url);
    const format = searchParams.get('format') || 'json';

    console.log('Format:', format);

    const project = await CrowdSource.findById(projectId).lean();

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // Prepare the data for export
    const exportData = project.data.map(item => {
      const flatItem = { ...item };
      project.columns.forEach(col => {
        if (!(col.name in flatItem)) {
          flatItem[col.name] = ''; // Add empty string for missing fields
        }
      });
      return flatItem;
    });

    console.log('Export Data:', exportData);

    let content, contentType, fileName;

    if (format === 'csv') {
      const fields = project.columns.map(col => col.name);
      const parser = new Parser({ fields });
      content = parser.parse(exportData);
      contentType = 'text/csv';
      fileName = `${project.title}.csv`;
    } else {
      content = JSON.stringify(exportData, null, 2);
      contentType = 'application/json';
      fileName = `${project.title}.json`;
    }

    // Create a Blob with the content
    const blob = new Blob([content], { type: contentType });

    // Convert Blob to ArrayBuffer
    const arrayBuffer = await blob.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error("Error exporting project data:", error);
    return NextResponse.json({ error: 'Error exporting project data', details: error.message }, { status: 500 });
  }
}