import TorchHero from "@/components/home/TorchHero";
import IntroStatement from "@/components/home/IntroStatement";
import UIWork from "@/components/home/UIWork";
import HowIWork from "@/components/home/HowIWork";
import ProjectIndex from "@/components/home/ProjectIndex";
import ClientMarquee from "@/components/home/ClientMarquee";
import AboutTeaser from "@/components/home/AboutTeaser";
import ContactFooter from "@/components/home/ContactFooter";

export default function Home() {
  return (
    <main>
      <TorchHero />
      <IntroStatement />
      <UIWork />
      <HowIWork />
      <ProjectIndex />
      <ClientMarquee />
      <AboutTeaser />
      <ContactFooter />
    </main>
  );
}
