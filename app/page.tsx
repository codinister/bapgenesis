'use client';

import Whoweare from '@/components/home/Whoweare';
import Nav from '@/components/nav/Nav';
import Slider from '@/components/Slider';
import useGetQuery from '@/data/query/useGetQuery';

export default function Home() {
  const data = useGetQuery('slider', '/slider') || [];

  return (
    <>
      <section className="home">
        <Nav />
        {data.length > 0 ? (
          <Slider data={data} width="100%" height="100vh" />
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
    </>
  );
}
