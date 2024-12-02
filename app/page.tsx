import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { CertificateCard } from "@/components/certificate-card";
import { ModeToggle } from "@/components/mode-toggle";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Typewrite from "@/components/typewrite";
import { Certificate, Project } from "@/lib/types";

export default async function Home() {
  // Buscando os projetos da API
  let res = await fetch('http://localhost:3000/api/projects', {
    cache: 'no-store',
  });
  const projects: Project[] = await res.json();

  res = await fetch('http://localhost:3000/api/certificates', {
    cache: 'no-store',
  });
  const certificates : Certificate[] = await res.json(); 

  return (
    <main className="min-h-screen bg-background flex flex-col justify-center items-center">
      <nav className="border-b w-full px-3">
        <div className="flex items-center justify-between py-4 w-full ">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/admin">
              <Button variant="outline">Admin Panel</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container py-12">
        <section className="mb-16">
          <div className="flex flex-col items-center text-center mb-12">
            <Image
              src="https://github.com/gustavodscruz.png"
              width={128}
              height={128}
              className="rounded-full"
              alt="Minha foto - Gustavo Dias | gustavodscruz"
            />
            <h1 className="text-4xl font-bold mb-4">Gustavo Dias da Silva Cruz</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-6">
              Full Stack Developer passionate about creating beautiful and functional web applications
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/gustavodscruz" target="_blank">
                <Button variant="outline" size="icon">
                  <GithubIcon className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/gustavodiasdsc" target="_blank">
                <Button variant="outline" size="icon">
                  <LinkedinIcon className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:gustavodiasdsc@gmail.com" target="_blank">
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center">
          <span className="text-3xl font-bold mb-8">
            <Typewrite texts={['About me', 'Who I am', 'More about me']} />
          </span>
          <p className="text-muted-foreground max-w-3xl my-3 text-center">
            I&apos;m a passionate learner, skilled in developing Back-End and Front-End applications with various technologies like Java, Node.js, React.js, and SQL databases. Proficient in methodologies like Kanban and Scrum, I excel in teamwork. Currently, I&apos;m training as an Analyst and Developer at FIAP, aiming to become a top full-stack developer.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.proj_id}
                title={project.proj_name}
                description={project.proj_desc}
                image={project.proj_image_url ?? 'https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D'}
                tags={['React', 'Node.js', 'TypeScript']}
                link={`/projects/${project.proj_id}`}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              certificates.map((certificate) => (
                <CertificateCard
                  key={certificate.cert_id}
                  cert_name={certificate.cert_name}
                  cert_desc={certificate.cert_desc}
                  cert_image_url={certificate.cert_image_url}
                  cert_link={certificate.cert_id}
                />
              ))
            }
          </div>
        </section>
      </div>
    </main>
  );
}