import Hero from '@/components/home/Hero';
import WordMarquee from '@/components/home/WordMarquee';
import Documentation from '@/components/home/Documentation';
import ServicesSection from '@/components/home/ServicesSection';
import Partners from '@/components/home/Partners';
import Statements from '@/components/home/Statements';
import FeatureTrio from '@/components/home/FeatureTrio';
import BigMarquee from '@/components/home/BigMarquee';
import Collage from '@/components/home/Collage';
import PlanDesignCreate from '@/components/home/PlanDesignCreate';
import Process from '@/components/home/Process';
import AboutScroll from '@/components/home/AboutScroll';
import Testimonials from '@/components/home/Testimonials';
import FaqBand from '@/components/home/FaqBand';
import JournalPreview from '@/components/home/JournalPreview';
import CtaBand from '@/components/CtaBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WordMarquee />
      <Documentation />
      <ServicesSection />
      <Partners />
      <Statements />
      <FeatureTrio />
      <BigMarquee />
      <Collage />
      <PlanDesignCreate />
      <Process />
      <AboutScroll />
      <Testimonials />
      <FaqBand />
      <JournalPreview />
      <CtaBand />
    </>
  );
}
