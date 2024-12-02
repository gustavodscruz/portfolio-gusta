import { notFound } from 'next/navigation';
import { ArrowLeft, GithubIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Project } from '@/lib/types';



async function getProject(id: number): Promise<Project | null> {
  
  try {
    console.log('Id recebido na página next: ', id);
    const res = await fetch(`http://localhost:3000/api/projects/${id}`);
    if (!res.ok) {
      throw new Error('Falha ao buscar projeto');
    }
    const project = await res.json();
    return project as Project;
        
  } catch (error) {
    console.error('Erro ao buscar projeto: ', (error as Error).message);
    return null;
  }
}

type SingleProjectProps = {
  params: { id: number };
}

export default async function SingleProject({ params }: SingleProjectProps) {
  const project = await getProject(params.id);

  if (!project) {
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
          <h1 className="text-2xl font-bold">Detalhes do Projeto</h1>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </nav>

      <div className="container py-12">
        <section className="mb-16">
          <Card className='p-6 size-max m-auto'>
            <CardHeader>
              <h2 className="text-3xl font-bold mb-4 text-center">{project.proj_name}</h2>
            </CardHeader>
            <CardContent className='m-auto flex flex-col items-center'>
              <p className="mb-4 text-center">{project.proj_desc}</p>
              {project.proj_image_url && (
                <Image
                  src={project.proj_image_url}
                  alt={project.proj_name}
                  className="rounded-md mb-4 object-cover"
                  height={400}
                  width={800}
                />
              )}
              {project.proj_link_github && (
                <a
                  href={project.proj_link_github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className='flex gap-2'><span>Ver no GitHub</span> <GithubIcon color='#000' size={20}/> </Button>
                </a>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}