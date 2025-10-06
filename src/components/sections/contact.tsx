"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Smartphone, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: '¡Mensaje enviado!',
      description: 'Gracias por contactarme. Te responderé lo antes posible.',
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Hablemos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes una idea o proyecto en mente? No dudes en contactarme.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Cuéntame sobre tu proyecto..." {...field} rows={6} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full">Enviar Mensaje</Button>
              </form>
            </Form>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold font-headline text-primary">
              Otras formas de contacto
            </h3>
            <div className="space-y-4">
              <Link href="mailto:hola@alexdoe.com" className="flex items-center gap-4 group">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-accent/10 transition-colors">
                  <Mail className="h-6 w-6 text-primary group-hover:text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Correo Electrónico</p>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">hola@alexdoe.com</p>
                </div>
              </Link>
              <Link href="https://wa.me/1234567890" target="_blank" className="flex items-center gap-4 group">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-accent/10 transition-colors">
                  <Smartphone className="h-6 w-6 text-primary group-hover:text-accent" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">+1 (23) 456-7890</p>
                </div>
              </Link>
            </div>
             <div className="pt-4">
                <h3 className="text-xl font-bold font-headline text-primary mb-3">Sígueme</h3>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="#"><Github className="h-5 w-5"/></Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <Link href="#"><Linkedin className="h-5 w-5"/></Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <Link href="#"><Twitter className="h-5 w-5"/></Link>
                    </Button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
