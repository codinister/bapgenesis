'use client';

import Customerservice from '@/components/Customerservice';
import Whoweare from '@/components/home/Whoweare';
import Pageheader from '@/components/Pageheader';
import useGetQuery from '@/data/query/useGetQuery';

export default function About() {

  const data = useGetQuery('about', '/about') || []

let img1 = ''
let title1 = ''
let excerpt1 = ''

let img2 = ''
let title2 = ''
let excerpt2 = ''

  if(data.length > 0){
    img1 = data[1]?.image
    title1 = data[1]?.title
    excerpt1 = data[1]?.excerpt
    
    img2 = data[2]?.image
    title2 = data[2]?.title
    excerpt2 = data[2]?.excerpt
  }



  return (
    <>
      <Pageheader title="About Us" subtitle="Who we are" />
      <Whoweare />x
      <section className="about">
        <h2>What we represent</h2>
        <p>We have a clear mission and vision plan</p>

        <div className="container">
          <div>
            <div
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top'
            }}
            ></div>
            <div>
              <h2>{title1}</h2>
              <div>
                {excerpt1}
              </div>
            </div>
          </div>
          <div>
            <div
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top'
            }}
            ></div>
            <div>
              <h2>{title2}</h2>
              <div>
                {excerpt2}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Customerservice />
    </>
  );
}
