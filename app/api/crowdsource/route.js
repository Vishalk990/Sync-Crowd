import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import dbConnect from '@/utils/dbConnect'; 
import CrowdSource from '@/models/CrowdSource'; 
import User from '@/models/User';

export async function POST(req) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect(); 

  try {
    const { title, description, columns } = await req.json();
    const user = await User.findOne({ clerkId: userId });

    const newProject = new CrowdSource({
      title,
      description,
      columns,
      creator: user,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const savedProject = await newProject.save();

    return NextResponse.json({ ...savedProject.toObject() }, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ error: 'Error creating project', details: error.message }, { status: 500 });
  }
}


export async function GET() {
  await dbConnect(); 

  try {
    const projects = await CrowdSource.find()
      .sort({ createdAt: -1 })
      .populate('creator', 'name'); 

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: 'Error fetching projects', details: error.message }, { status: 500 });
  }
}