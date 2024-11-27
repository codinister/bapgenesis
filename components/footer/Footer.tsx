'use client';

import useGetQuery from '@/data/query/useGetQuery';
import Image from 'next/image';
import { FaEnvelope, FaFacebook, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const data = useGetQuery('contact', '/contact') || [];

  const date = new Date().getFullYear();

  console.log(data);
  return (
    <footer>
      <div className="container">
        <div>
          {data.length > 0 ? (
            <Image src={data[0]?.comp_logo} alt="" width="200" height="120" />
          ) : (
            ''
          )}
        </div>
        <div>
          <h3>Head Office</h3>

          {data.length > 0 ? (
            <ul>
              <li>{data[0]?.comp_name}</li>
              <li>{data[0]?.location}</li>
            </ul>
          ) : (
            ''
          )}
        </div>
        <div>
          <h3>Contacts</h3>

          {data.length > 0 ? (
            <ul>
              <li>
                <FaPhoneAlt /> {data[0]?.phone1}
              </li>
              <li>
                <FaEnvelope /> {data[0]?.email}
              </li>
              <li>
                <a href={data[0]?.facebook} title="Facebook">
                  <FaFacebook /> Facebook
                </a>
              </li>
            </ul>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="container">
        <div>
          {data.length > 0 ? (
            <p>
              &copy; Copyright {date} {data[0]?.comp_name} - All rights reserved
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
