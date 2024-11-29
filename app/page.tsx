import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { CertificateCard } from "@/components/certificate-card";
import { ModeToggle } from "@/components/mode-toggle";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
            <Image src="https://github.com/gustavodscruz.png" width={128} height={128} className="rounded-full" alt="Minha foto - Gustavo Dias | gustavodscruz"/>
            
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

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-featured e-commerce platform built with Next.js and Stripe"
              image="https://images.unsplash.com/photo-1472851294608-062f824d29cc"
              tags={["Next.js", "Stripe", "Tailwind",]}
              link="https://example.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              tags={["React", "Socket.io", "MongoDB"]}
              link="https://example.com"
            />
            <ProjectCard
              title="AI Image Generator"
              description="An AI-powered image generation tool using DALL-E API"
              image="https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf"
              tags={["OpenAI", "Next.js", "TypeScript"]}
              link="https://example.com"
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertificateCard
              title="AWS Certified Solutions Architect"
              issuer="Amazon Web Services"
              date="2024"
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            />
            <CertificateCard
              title="Meta Frontend Developer"
              issuer="Meta"
              date="2023"
              image="https://images.unsplash.com/photo-1551650975-87deedd944c3"
            />
            <CertificateCard
              title="Google Cloud Professional"
              issuer="Google"
              date="2023"
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
            />
          </div>
        </section>
      </div>
    </main>
  );
}