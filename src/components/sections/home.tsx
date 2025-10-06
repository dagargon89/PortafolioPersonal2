import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-medium text-accent mb-4 font-headline" >Alex Doe</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 font-headline text-primary">
            Desarrollador Web & Plataformas Dinámicas
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl mb-10">
            Creando soluciones digitales a medida, desde sitios web atractivos hasta plataformas complejas, con un enfoque en la experiencia de usuario y el rendimiento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="transition-transform transform hover:scale-105">
              <Link href="#projects">Ver Proyectos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-transform transform hover:scale-105 border-primary/50 hover:bg-primary/5">
              <Link href="#contact">Contacto</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
