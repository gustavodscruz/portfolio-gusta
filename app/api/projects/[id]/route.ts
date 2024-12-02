import { findProjectById } from "@/lib/queries/project";
import { Project } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: number } }) {
    try {
      console.log('Id recebido na api do next: ', params.id);
      const project = await findProjectById(params.id);
      if (!project) {
        return NextResponse.json({ message: 'Project not found' }, { status: 404 });
      }
      return NextResponse.json(project as Project);
    } catch (error) {
      console.error('Erro na rota GET /api/projects/:id:', error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }