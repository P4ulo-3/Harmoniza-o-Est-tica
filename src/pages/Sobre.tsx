import { Award, GraduationCap, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import doctorImage from "@/assets/doctor-portrait.jpg";

const Sobre = () => {
  const values = [
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description: "Cada paciente é único e merece atenção individualizada",
    },
    {
      icon: Target,
      title: "Resultados Naturais",
      description: "Realçar a beleza natural sem artificialidade",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com os mais altos padrões de qualidade",
    },
  ];

  const certifications = [
    "Especialização em Harmonização Orofacial",
    "Pós-graduação em Estética Avançada",
    "Certificação Internacional em Preenchimentos",
    "Membro da Sociedade Brasileira de Medicina Estética",
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Sobre <span className="text-gradient">Nós</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experiência, dedicação e excelência em harmonização facial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-amber-500/20 rounded-3xl transform rotate-3" />
                <img
                  src={doctorImage}
                  alt="Dra. Harmonização Estética"
                  className="relative rounded-3xl shadow-luxury w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 animate-fade-up">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                Nossa <span className="text-gradient">História</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Com mais de 10 anos de experiência em harmonização facial, nosso consultório nasceu do desejo de proporcionar tratamentos estéticos de excelência, com resultados naturais e personalizados.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Acreditamos que a verdadeira beleza está na harmonia e no equilíbrio. Por isso, cada procedimento é cuidadosamente planejado para realçar suas características únicas, respeitando sua essência e personalidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Nossos <span className="text-gradient">Valores</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-amber-500/20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Certificações e <span className="text-gradient">Formação</span>
              </h2>
            </div>

            <Card className="shadow-luxury animate-scale-in">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 animate-fade-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Award className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
