import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[10]">
      {/** bg-grid will active after adding a plugin */}
      <HeroSection/>
      <FeaturedSection/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
