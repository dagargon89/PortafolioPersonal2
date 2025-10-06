import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const projects = [
  {
    id: 'project-1',
    title: 'Plataforma de E-commerce',
    description: 'Una solución de comercio electrónico completa con gestión de inventario, pasarela de pagos y un panel de administración para el cliente.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Dashboard de Analíticas',
    description: 'Un CRM personalizado para visualizar métricas de negocio en tiempo real, con gráficos interactivos y generación de reportes.',
    technologies: ['React', 'D3.js', 'Node.js', 'GraphQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Sitio Web Corporativo',
    description: 'Diseño y desarrollo de un sitio web moderno y responsivo para una startup tecnológica, enfocado en SEO y velocidad de carga.',
    technologies: ['Gatsby', 'Contentful', 'Framer Motion', 'Styled Components'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo web y de plataformas.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {projectImage && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={projectImage.imageUrl}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      className="object-cover"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="outline" className="font-normal">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2" /> GitHub
                    </Link>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2" /> Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
