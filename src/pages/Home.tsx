import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { CTASection } from "@/components/home/CTASection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Home;
