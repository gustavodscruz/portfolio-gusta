import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Certificate } from "@/lib/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type CertificateCard = {
  cert_name: Certificate['cert_name'];
  cert_desc: Certificate['cert_desc'];
  cert_image_url: Certificate['cert_image_url'];
  cert_link: Certificate['cert_id'];
}

export function CertificateCard({ cert_name, cert_desc, cert_image_url, cert_link}: CertificateCard) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={cert_image_url ?? 'https://as1.ftcdn.net/v2/jpg/05/03/05/86/1000_F_503058630_C8EDFXAH7MR97em50OBwurKXn5N5fKZW.jpg'}
          alt={cert_desc}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{cert_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{cert_desc}</p>
        <Button variant="outline" className="w-full" asChild>
          <Link href={`/certificates/${cert_link}`} rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Certificate
          </Link>
        </Button>      
      </CardContent>
    </Card>
  );
}