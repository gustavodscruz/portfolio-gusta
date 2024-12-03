"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectForm } from "@/components/project-form";
import { CertificateForm } from "@/components/certificate-form";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { ArrowLeft, DeleteIcon, EditIcon } from "lucide-react";
import { Certificate, Project } from "@/lib/types";

export default function AdminPanel() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const { toast } = useToast();

  const loadProjects = async () => {
    const response = await fetch("/api/projects");
    const data : Project[] = await response.json();
    setProjects(data);
  }

  const loadCertificates = async () => {
    const response = await fetch("/api/certificates");
    const data : Certificate[] = await response.json();
    setCertificates(data);
  }

  useEffect(() => {
    loadProjects();
    loadCertificates();
  }, []);

  const handleProjectSubmit = (data : Project) => {
    setProjects([...projects, data]);
    toast({
      title: "Project added",
      description: "The project has been successfully added to your portfolio.",
    });
  };

  const handleCertificateSubmit = (data : Certificate) => {
    setCertificates([...certificates, data]);
    toast({
      title: "Certificate added",
      description: "The certificate has been successfully added to your portfolio.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Admin Panel</h1>
          </div>
        </div>

        <Tabs defaultValue="projects" className="space-y-4">
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>
          <TabsContent value="projects" className="space-y-4">
            <div className="grid gap-6">
              <ProjectForm onSubmit={handleProjectSubmit} />
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Added Projects</h3>
                {projects.length === 0 ? (
                  <p className="text-muted-foreground">No projects added yet.</p>
                ) : (
                  <ul className="space-y-2">
                    {projects.map((project, index) => (
                      <li key={index} className="border-b pb-2 flex">
                        <div className="flex-col flex gap-3 flex-grow">
                          <h4 className="font-medium">{project.proj_name}</h4>
                          <p className="text-sm text-muted-foreground">{project.proj_desc}</p>
                        </div>
                        <div className="flex gap-4">
                          <Link href={`/admin/project/${project.proj_id}`}>
                            <Button variant="ghost" size="sm"><EditIcon /></Button>
                          </Link>
                          <Button variant="ghost" size="sm"><DeleteIcon /></Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="certificates" className="space-y-4">
            <div className="grid gap-6">
              <CertificateForm onSubmit={handleCertificateSubmit} />
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Added Certificates</h3>
                {certificates.length === 0 ? (
                  <p className="text-muted-foreground">No certificates added yet.</p>
                ) : (
                  <ul className="space-y-2">
                    {certificates.map((certificate, index) => (
                      <li key={index} className="border-b pb-2 flex">
                        <div className="flex-col flex gap-3 flex-grow">
                          <h4 className="font-medium">{certificate.cert_name}</h4>
                          <p className="text-sm text-muted-foreground">{certificate.cert_desc}</p>
                        </div>
                        <div className="flex gap-4">
                          <Link href={`/admin/certificate/${certificate.cert_id}`}>
                            <Button variant="ghost" size="sm"><EditIcon /></Button>
                          </Link>
                          <Button variant="ghost" size="sm"><DeleteIcon /></Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}