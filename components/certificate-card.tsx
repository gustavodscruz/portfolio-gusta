import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export function CertificateCard({ title, issuer, date, image }: CertificateCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{issuer}</p>
        <p className="text-sm text-muted-foreground mt-1">{date}</p>
      </CardContent>
    </Card>
  );
}