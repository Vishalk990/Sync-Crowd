import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import CrowdSource from '@/models/CrowdSource';

export async function GET(req, { params }) {
  await dbConnect();

  try {
    const projectId = params.id;
    console.log(params.id);
    
    const project = await CrowdSource.findById(projectId).populate('creator', 'name');

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json({ error: 'Error fetching project', details: error.message }, { status: 500 });
  }
}

export async function POST(req, { params }) {
  await dbConnect();

  try {
    const projectId = params.id;
    const submission = await req.json();

    const project = await CrowdSource.findById(projectId);
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // Validate the submission against the project's columns
    const isValid = project.columns.every(column => {
      if (column.required && !submission[column.name]) {
        return false;
      }
      if (column.type === 'number' && isNaN(submission[column.name])) {
        return false;
      }
      // Add more validation as needed
      return true;
    });

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    project.data.push(submission);
    await project.save();

    return NextResponse.json({ message: 'Contribution submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error submitting contribution:", error);
    return NextResponse.json({ error: 'Server error', details: error.message }, { status: 500 });
  }
}