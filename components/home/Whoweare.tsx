'use client';
import useGetQuery from '@/data/query/useGetQuery';
import { GrAppsRounded, GrHome } from 'react-icons/gr';
import { SlUser } from 'react-icons/sl';

const Whoweare = () => {
  const data = useGetQuery('about', '/about') || [];

  let excerpt = '';
  let img = [];
  if (data.length > 0) {
    excerpt = data[0]?.excerpt;
    img = data[0]?.image;
  }

  return (
    <section className="whoweare">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
      <div>
        <div>
          <h4>Company Overview</h4>
          <h2>ABOUT US</h2>
        </div>
        <div>{excerpt}</div>
        <div>
          <div>
            <SlUser />
            <h2>50+</h2>
            <h5>Workers</h5>
          </div>
          <div>
            <GrAppsRounded />
            <h2>5+</h2>
            <h5>Branches in Ghana</h5>
          </div>
          <div>
            <GrHome />
            <h2>1500+</h2>
            <h5>Projects completed</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
