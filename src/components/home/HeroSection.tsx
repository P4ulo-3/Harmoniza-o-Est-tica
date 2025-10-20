import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Harmonização Facial Avançada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center space-x-2 bg-accent/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-scale-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Beleza Natural & Elegante</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Te ajudo a{" "}
            <span className="text-gradient">rejuvenescer</span>
            {" "}com elegância e naturalidade
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Através da Harmonização Facial avançada, resultados personalizados e naturais que realçam sua beleza única.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Agende Sua Avaliação
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-base font-medium"
              asChild
            >
              <a href="/servicos">
                Conheça os Serviços
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Pacientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Recomendação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
