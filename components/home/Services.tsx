'use client';

import useGetQuery from '@/data/query/useGetQuery';
import { GrBarChart } from 'react-icons/gr';
import { MdOutlineManageHistory } from 'react-icons/md';

const Services = () => {
  const data = useGetQuery('services', '/services') || [];

  let oneTitle = '';
  let oneText = '';
  let twoTitle = '';
  let twoText = '';
  let threeTitle = '';
  let threeText = '';

  if (data.length > 0) {
    oneTitle = data[0]?.title;
    oneText = data[0]?.excerpt;
    twoTitle = data[1]?.title;
    twoText = data[1]?.excerpt;
    threeTitle = data[2]?.title;
    threeText = data[2]?.excerpt;
  }

  return (
    <section className="services">
      <h4>What we do</h4>
      <h2>OUR SERVICES</h2>
      <div className="container">
        <div>
        <MdOutlineManageHistory />
          <h3>{oneTitle}</h3>
          <p>{oneText}</p>
        </div>
        <div>
          <GrBarChart />
          <h3>{twoTitle}</h3>
          <p>{twoText}</p>
        </div>
        <div>
          <GrBarChart />
          <h3>{threeTitle}</h3>
          <p>{threeText}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
