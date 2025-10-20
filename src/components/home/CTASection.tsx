import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/5 via-accent to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Pronta para realçar sua{" "}
            <span className="text-gradient">beleza natural</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende sua avaliação gratuita e descubra como a harmonização facial pode transformar sua autoestima com resultados naturais e elegantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 min-w-[200px]"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-base font-medium min-w-[200px]"
              asChild
            >
              <a href="/contato">
                <Calendar className="mr-2 h-5 w-5" />
                Agende Online
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            📍 Atendimento em São Paulo, SP | Seg-Sex: 9h às 19h
          </p>
        </div>
      </div>
    </section>
  );
};
