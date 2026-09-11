import Hero from '@/components/home/Hero';
import Statements from '@/components/home/Statements';
import PlanDesignCreate from '@/components/home/PlanDesignCreate';
import WordMarquee from '@/components/home/WordMarquee';
import Partners from '@/components/home/Partners';
import ServicesSection from '@/components/home/ServicesSection';
import Documentation from '@/components/home/Documentation';
import Collage from '@/components/home/Collage';
import FeatureTrio from '@/components/home/FeatureTrio';
import BigMarquee from '@/components/home/BigMarquee';
import AboutScroll from '@/components/home/AboutScroll';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import JournalPreview from '@/components/home/JournalPreview';
import CtaBand from '@/components/CtaBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statements />
      <PlanDesignCreate />
      <WordMarquee />
      <Partners />
      <ServicesSection />
      <Documentation />
      <Collage />
      <FeatureTrio />
      <BigMarquee />
      <AboutScroll />
      <Process />
      <Testimonials />
      <JournalPreview />
      <CtaBand />
    </>
  );
}
