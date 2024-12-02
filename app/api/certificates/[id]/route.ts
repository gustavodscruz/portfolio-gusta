import { findCertificateById } from "@/lib/queries/certificates";
import { Certificate } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params}:{params : {id: number}}) {
    try {
        console.log('Id recebido na api do next: ', params.id);
        const certificate = await findCertificateById(Number(params.id));
        if (!certificate) {
          return NextResponse.json({ message: 'Project not found' }, { status: 404 });
        }
        return NextResponse.json(certificate as Certificate);
      } catch (error) {
        console.error('Erro na rota GET /api/projects/:id:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      }
    
}