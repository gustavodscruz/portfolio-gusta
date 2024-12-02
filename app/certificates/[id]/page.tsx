import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Certificate } from '@/lib/types';

async function getCertificate(id: number): Promise<Certificate | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/certificates/${id}`);
    if (!res.ok) {
      throw new Error('Falha ao buscar certificado');
    }
    const certificate = await res.json();
    return certificate as Certificate;
  } catch (error) {
    console.error('Erro ao buscar certificado:', error);
    return null;
  }
}

type SingleCertificateProps = {
  params: { id: number };
};

export default async function SingleCertificate({ params }: SingleCertificateProps) {
  console.log('id:', params.id);
  const certificate = await getCertificate(params.id);

  if (!certificate) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <nav className="border-b w-full px-3">
        <div className="flex items-center justify-between py-4 w-full">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Detalhes do Certificado</h1>
          <div className="flex items-center gap-4">
            {/* Outros componentes, como ModeToggle, se necessário */}
          </div>
        </div>
      </nav>

      <div className="container py-12">
        <section className="mb-16">
          <Card className="p-6 max-w-3xl m-auto">
            <CardHeader>
              <h2 className="text-3xl font-bold mb-4 text-center">{certificate.cert_name}</h2>
            </CardHeader>
            <CardContent className="m-auto flex flex-col items-center">
              <p className="mb-4 text-center">{certificate.cert_desc}</p>
              {certificate.cert_image_url && (
                <Image
                  src={certificate.cert_image_url}
                  alt={certificate.cert_name}
                  className="rounded-md mb-4 object-cover"
                  height={400}
                  width={800}
                />
              )}
              {certificate.cert_link && (
                <a
                  href={certificate.cert_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Ver Certificado</Button>
                </a>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}