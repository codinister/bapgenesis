'use client';
import useGetQuery from '@/data/query/useGetQuery';
import { GrAppsRounded, GrHome } from 'react-icons/gr';
import { SlUser } from 'react-icons/sl';
import BlockContent from '@sanity/block-content-to-react';

const Whoweare = () => {
  const data = useGetQuery('about', '/about') || [];

  let img = [];
  if (data.length > 0) {
    img = data[0]?.image;
  }

  console.log(data[0]?.body)
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
        <div>
          {data.length > 0 ? (
            <BlockContent
              blocks={data[0]?.body}
              projectid={process.env.NEXT_PUBLIC_PROJECT_ID}
            />
          ) : (
            ''
          )}
        </div>
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
