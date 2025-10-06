import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 
  'GraphQL', 'Docker', 'Firebase', 'Tailwind CSS', 'Figma'
];

export default function AboutSection() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'about-photo');

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2 flex justify-center items-start">
            {profileImage && (
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-accent/20">
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={profileImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="md:col-span-3 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">
                Sobre mí
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Soy un apasionado desarrollador web con 5 años de experiencia en la creación de soluciones digitales robustas y escalables. Mi objetivo es transformar ideas complejas en aplicaciones intuitivas y de alto rendimiento que resuelvan problemas reales.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mi enfoque se centra en la arquitectura limpia, la experiencia de usuario (UX) fluida y el código mantenible. Me especializo en el ecosistema de JavaScript, construyendo desde sitios web corporativos hasta CRMs y dashboards interactivos a medida.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-headline text-primary mb-4">
                Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-3 py-1 bg-accent/10 text-accent-foreground border-accent/20 hover:bg-accent/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
