import Customerservice from '@/components/Customerservice';
import Services from '@/components/home/Services';
import Pageheader from '@/components/Pageheader';
import Projects from '@/components/Projects';

export default function Service() {
  return (
    <>
      <Pageheader title="Our Services" subtitle="What we do" />

      <Services />
      <Customerservice />
      <Projects />
 
    </>
  );
}
