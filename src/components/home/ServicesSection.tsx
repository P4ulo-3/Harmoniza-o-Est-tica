import { Sparkles, Syringe, Droplet, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Droplet,
    title: "Preenchimento Facial",
    description: "Restaura volume e contorno facial de forma natural e harmoniosa.",
  },
  {
    icon: Syringe,
    title: "Toxina Botulínica",
    description: "Suaviza linhas de expressão e previne novos sinais de envelhecimento.",
  },
  {
    icon: Zap,
    title: "Bioestimuladores",
    description: "Estimula a produção natural de colágeno para rejuvenescimento duradouro.",
  },
  {
    icon: Sparkles,
    title: "Harmonização Completa",
    description: "Protocolo personalizado para resultados integrados e equilibrados.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tratamentos avançados com tecnologia de ponta para realçar sua beleza natural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/30 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
