import { selectById } from "@/lib/queries/project";
import { Project } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request : Request, params:{id : number}) {
    try {
        const project = await selectById(params.id);
        if(!project) {
            throw new Error('Project not found');
        }
        return NextResponse.json(project as Project);
        
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 404 });
    }
}