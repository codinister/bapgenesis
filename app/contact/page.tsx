'use client';

import Map from '@/components/contact/Map';
import Customerservice from '@/components/Customerservice';
import Pageheader from '@/components/Pageheader';
import useGetQuery from '@/data/query/useGetQuery';
import { BiSupport } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  const data = useGetQuery('contact', '/contact') || [];

  let phone = '';
  let location = '';
  let comp_name = '';
  let email = '';
  if (data.length > 0) {
    phone = data[0]?.phone1;
    location = data[0]?.location;
    comp_name = data[0]?.comp_name;
    email = data[0]?.email;
  }

  return (
    <div className="contact-wrapper">
      <Pageheader
        title="Get in touch"
        subtitle="Want to get in touch? We'd love to hear from you."
      />

      <section className="contact">
        <div className="container">
          <div>
            <FaPhoneAlt />

            <strong>Talk to sales</strong>

            <p>
              Interested in roofing ? Just pick up the phone to chat with a
              member of our sales team.
            </p>

            <h2>{phone}</h2>
          </div>
          <div>
            <BiSupport />
            <strong>Contact Customer Support</strong>
            <p>
              Sometimes you need a little help from your friends. Or a BAP
              GENESIS support rep. Do not worry… we are here for you.
            </p>
            <h2>{email}</h2>
          </div>
        </div>

        <div className="container">
          <div>
            {data.length > 0 ? (
              <Map src={data[0]?.location} width="100%" height="350pz" />
            ) : (
              ''
            )}
          </div>
          <div>
            <h2>{comp_name}</h2>
            <p>{location}</p>

            <strong>Phone</strong>
            {phone}
          </div>
        </div>
      </section>

      <Customerservice />
    </div>
  );
}
