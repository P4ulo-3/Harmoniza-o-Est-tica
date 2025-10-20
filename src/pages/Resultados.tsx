import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import beforeAfter from "@/assets/before-after-1.jpg";

const results = [
  {
    title: "Harmonização Facial Completa",
    category: "harmonizacao",
    image: beforeAfter,
  },
  {
    title: "Preenchimento Labial",
    category: "preenchimento",
    image: beforeAfter,
  },
  {
    title: "Toxina Botulínica - Testa",
    category: "toxina",
    image: beforeAfter,
  },
  {
    title: "Bioestimulador de Colágeno",
    category: "bioestimulador",
    image: beforeAfter,
  },
  {
    title: "Contorno Mandibular",
    category: "preenchimento",
    image: beforeAfter,
  },
  {
    title: "Rejuvenescimento Facial",
    category: "harmonizacao",
    image: beforeAfter,
  },
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "harmonizacao", label: "Harmonização" },
  { id: "preenchimento", label: "Preenchimento" },
  { id: "toxina", label: "Toxina" },
  { id: "bioestimulador", label: "Bioestimuladores" },
];

const Resultados = () => {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredResults = activeCategory === "todos"
    ? results
    : results.filter(result => result.category === activeCategory);

  return (
    <main className="pt-20">
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Nossos <span className="text-gradient">Resultados</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transformações reais que falam por si. Confira o antes e depois dos nossos tratamentos
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-primary via-amber-500 to-primary"
                    : "border-primary/30 hover:bg-primary/10"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResults.map((result, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <h3 className="font-heading text-xl font-semibold text-foreground">
                          {result.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-up">
            <p className="text-muted-foreground mb-6">
              Gostou dos resultados? Agende sua avaliação e descubra o que podemos fazer por você.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Quero Minha Transformação
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resultados;
