import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollUp from '@/components/ScrollUp';
import AosInit from '@/components/AosInit';

export default function Home() {
  return (
    <>
      <AosInit />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
      <ScrollUp />
    </>
  );
}
