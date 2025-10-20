import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    procedure: "Harmonização Facial Completa",
    text: "Resultado incrível! Exatamente o que eu queria, natural e elegante. Me sinto muito mais confiante.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    procedure: "Preenchimento Labial",
    text: "Atendimento excepcional e resultado maravilhoso. Muito profissionalismo e cuidado em cada detalhe.",
    rating: 5,
  },
  {
    name: "Juliana Santos",
    procedure: "Toxina Botulínica",
    text: "Adorei o resultado! Ficou super natural, ninguém percebe que fiz procedimento. Recomendo muito!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            O que dizem <span className="text-gradient">nossos pacientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiências reais de quem confiou em nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.procedure}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
