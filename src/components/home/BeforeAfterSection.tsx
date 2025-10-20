import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import beforeAfter from "@/assets/before-after-1.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BeforeAfterSection = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Resultados <span className="text-gradient">Transformadores</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja a diferença que a harmonização facial pode fazer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-luxury border-border/50 animate-scale-in">
            <CardContent className="p-0">
              <img
                src={beforeAfter}
                alt="Antes e Depois - Harmonização Facial"
                className="w-full h-auto object-cover"
              />
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
              asChild
            >
              <Link to="/resultados">
                Ver Mais Resultados
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
