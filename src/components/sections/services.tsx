import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { MonitorSmartphone, LayoutDashboard, Rocket, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Desarrollo de Sitios Web',
    description: 'Creación de sitios web a medida, desde landing pages hasta portales complejos, optimizados para todos los dispositivos.',
  },
  {
    icon: LayoutDashboard,
    title: 'Plataformas Dinámicas',
    description: 'Desarrollo de aplicaciones web interactivas como CRMs, dashboards y sistemas de gestión interna para potenciar tu negocio.',
  },
  {
    icon: Rocket,
    title: 'Mantenimiento y Optimización',
    description: 'Servicios de mantenimiento continuo, optimización de rendimiento y seguridad para que tu plataforma funcione siempre al 100%.',
  },
  {
    icon: MessageSquare,
    title: 'Consultoría Técnica',
    description: 'Asesoramiento experto para ayudarte a tomar las mejores decisiones tecnológicas, desde la arquitectura hasta la elección de herramientas.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Servicios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones digitales diseñadas para impulsar tu proyecto al siguiente nivel.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <div className="bg-accent/10 p-4 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
