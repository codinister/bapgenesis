'use client';

import Customerservice from '@/components/Customerservice';
import Services from '@/components/home/Services';
import Whoweare from '@/components/home/Whoweare';
import Nav from '@/components/nav/Nav';
import Projects from '@/components/Projects';
import Slider from '@/components/Slider';
import useGetQuery from '@/data/query/useGetQuery';
import { useState, useEffect } from 'react';

export default function Home() {
  const data = useGetQuery('slider', '/slider') || [];
  const [getHeight, setHeight] = useState('100vh');

  useEffect(() => {
    const size = window.innerWidth;
    if (size < 769) {
      setHeight('60vh');
    }
  }, []);

  return (
    <>
      <section className="home">
        <Nav />
        {data.length > 0 ? (
          <Slider data={data} width="100%" height={getHeight} />
        ) : (
          ''
        )}
        <div className="title-box">
          <h1>BAP GENESIS</h1>
          <h1>ROOFING</h1>
          <h1>SYSTEM</h1>
        </div>
      </section>

      <Whoweare />
      <Services />
      <Customerservice />
      <Projects />
    </>
  );
}
