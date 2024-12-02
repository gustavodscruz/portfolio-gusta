import { findAllProjects } from "@/lib/queries/project";
import { Project } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await findAllProjects();
    if (!result) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(result as Project[]);
  } catch (error) {
    console.error("Erro na função selectById:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
}
}
