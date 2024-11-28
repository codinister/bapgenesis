'use client';

import useGetQuery from '@/data/query/useGetQuery';
import Nav from './nav/Nav';

type PageheaderType = {
  title: string;
  subtitle: string;
};
const Pageheader = ({ title, subtitle }: PageheaderType) => {
  const proj = useGetQuery('projects', '/projects') || [];

  let img = '';
  if (proj.length > 0) {
    img = proj[0]?.image;
  }

  return (
    <section
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className="pageheader"
    >
      <Nav />
      <div className="container">
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default Pageheader;
