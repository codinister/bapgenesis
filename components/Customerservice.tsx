'use client';

import useGetQuery from '@/data/query/useGetQuery';

const Customerservice = () => {
  const data = useGetQuery('contact', '/contact') || [];

  let pageheader = '';
  let phone = '';
  let comp_name = '';

  if (data.length > 0) {
    pageheader = data[0]?.pageheader;
    phone = data[0]?.phone1;
    comp_name = data[0]?.comp_name;
  }

  return (
    <section className="customer-service">
      <div
        style={{
          backgroundImage: `url(${pageheader})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
      <div>

        <div>
        <h3>Got Projects?</h3>
        <h2>Call Us: <span>{phone}</span></h2>
        <p>
          {comp_name} is dedicated to providing quality affordable roofing
          solutions.
        </p>
        </div>
      </div>
    </section>
  );
};

export default Customerservice;
