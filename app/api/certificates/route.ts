import { findAllCertificates } from "@/lib/queries/certificates";
import { Certificate } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request : Request) {
    try {
        const result = await findAllCertificates();
        if (!result) {
            return NextResponse.json({ error: 'Nenhum certificado encontrado' }, { status: 404 });
        }
        return NextResponse.json(result as Certificate[]);
    } catch (error) {
        console.error('Erro na função selectById:', error);
        return NextResponse.json({ error: 'Erro ao buscar certificados' }, { status: 500 });        
    }
}