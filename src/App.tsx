import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Featured } from '@/components/sections/Featured';
import { CareerTimeline } from '@/components/sections/CareerTimeline';
import { Projects } from '@/components/sections/Projects';
import { AICapability } from '@/components/sections/AICapability';
import { Contact } from '@/components/sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Featured />
        <CareerTimeline />
        <Projects />
        <AICapability />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
