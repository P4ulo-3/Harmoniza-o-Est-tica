import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Droplet, Syringe, Zap, Sparkles, Clock, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Droplet,
    title: "Preenchimento Facial",
    shortDesc: "Restaura volume e contorno facial de forma natural e harmoniosa.",
    fullDesc: "O preenchimento facial com ácido hialurônico é um procedimento seguro e eficaz para restaurar volume perdido, suavizar sulcos e rugas, além de harmonizar contornos faciais. Resultados imediatos e naturais.",
    duration: "30-60 minutos",
    benefits: [
      "Restauração de volume facial",
      "Definição de contornos",
      "Hidratação profunda da pele",
      "Resultados imediatos",
      "Procedimento minimamente invasivo",
    ],
  },
  {
    icon: Syringe,
    title: "Toxina Botulínica",
    shortDesc: "Suaviza linhas de expressão e previne novos sinais de envelhecimento.",
    fullDesc: "A aplicação de toxina botulínica relaxa a musculatura responsável pelas linhas de expressão, proporcionando uma aparência mais jovem e descansada. Ideal para testa, glabela e região dos olhos.",
    duration: "15-30 minutos",
    benefits: [
      "Suavização de rugas dinâmicas",
      "Prevenção de novas linhas",
      "Efeito natural e harmonioso",
      "Duração de 4-6 meses",
      "Procedimento rápido e seguro",
    ],
  },
  {
    icon: Zap,
    title: "Bioestimuladores",
    shortDesc: "Estimula a produção natural de colágeno para rejuvenescimento duradouro.",
    fullDesc: "Os bioestimuladores atuam estimulando a produção natural de colágeno pela pele, proporcionando rejuvenescimento progressivo e duradouro. Resultados naturais que melhoram ao longo do tempo.",
    duration: "45-60 minutos",
    benefits: [
      "Estímulo de colágeno natural",
      "Rejuvenescimento progressivo",
      "Melhora da qualidade da pele",
      "Efeito prolongado (até 2 anos)",
      "Resultados cada vez mais naturais",
    ],
  },
  {
    icon: Sparkles,
    title: "Harmonização Completa",
    shortDesc: "Protocolo personalizado para resultados integrados e equilibrados.",
    fullDesc: "A harmonização facial completa combina diferentes técnicas e procedimentos para criar um resultado equilibrado e natural. Protocolo totalmente personalizado de acordo com suas características e objetivos.",
    duration: "90-120 minutos",
    benefits: [
      "Avaliação facial completa",
      "Protocolo personalizado",
      "Combinação de técnicas avançadas",
      "Resultado harmonioso e natural",
      "Acompanhamento pós-tratamento",
    ],
  },
];

const Servicos = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <main className="pt-20">
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tratamentos personalizados com tecnologia avançada para realçar sua beleza natural
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedService(service)}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary hover:text-primary/80"
                  >
                    Saiba mais →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-amber-500/20 flex items-center justify-center mb-4">
                  <selectedService.icon className="h-8 w-8 text-primary" />
                </div>
                <DialogTitle className="font-heading text-3xl">
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedService.fullDesc}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Duração: {selectedService.duration}</span>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-lg mb-4">Benefícios</h4>
                  <ul className="space-y-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary via-amber-500 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
                  asChild
                >
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Agende uma Avaliação
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Servicos;
