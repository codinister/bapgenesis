'use client';
import Link from 'next/link';
import useGetQuery from '@/data/query/useGetQuery';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaFacebook } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [sticky, setSticky] = useState(false);
  const [show, setShow] = useState('');

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scroll = window.scrollY;
    const num = Math.floor(scroll);

    if (num > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const data = useGetQuery('contacts', '/contact') || [];

  const res = data[0];

  const logo = res?.comp_logo ? (
    <Image src={res?.comp_logo} width="100" height="60" alt="Logo" />
  ) : (
    ''
  );

  let phone = '';
  let comp_name = '';
  let location = '';
  let facebook = '';
  let email = '';

  if (data.length > 0) {
    phone = data[0]?.phone1;
    comp_name = data[0]?.comp_name;
    location = data[0]?.location;
    facebook = data[0]?.facebook;
    email = data[0]?.email;
  }

  const path = usePathname();

  return (
    <nav className="navbar">
      <Image
        src="/hamburger.jpg"
        className="hamburger"
        width="30"
        height="30"
        alt=""
        onClick={() => setShow('show')}
      />
      <div className="container">
        <ul>
          <li>
            <FaPhoneAlt /> {res?.phone1}
          </li>
          <li>
            <FaEnvelope /> {res?.email}
          </li>
          <li>
            <a
              href={res?.facebook ? res?.facebook : 'https://www.facebook.com'}
              title="Facebook"
              target="_blank"
            >
              <FaFacebook /> Facebook
            </a>
          </li>
        </ul>
      </div>
      <div
        className={
          sticky ? `stickynav container ${show} menu-links` : `${show} menu-links container`
        }
      >
        <div>
          <Link href="/" onClick={() => setShow('hide')}>
            {logo}
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link
                href="/"
                onClick={() => setShow('hide')}
                className={path === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setShow('hide')}
                className={path === '/about' ? 'active' : ''}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShow('hide')}
                href="/services"
                className={path === '/services' ? 'active' : ''}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShow('hide')}
                href="/contact"
                className={path === '/contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
          </ul>

          <ul className="mobile-contact-details">
            <li>
              <h2>{comp_name}</h2>
              <h4>{location}</h4>
            </li>
            <li>
              <FaPhoneAlt /> {phone}
            </li>
            <li>
              <FaEnvelope /> {email}
            </li>
            <li>
              <a href={facebook} title="Facebook"><FaFacebook /> Facebook</a>
            </li>
            <li>
              <a href={data[0]?.facebook} title="Facebook">
                <FaFacebook /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        onClick={() => setShow('hide')}
        className={`menu-links-overlay ${show}`}
      ></div>
    </nav>
  );
};

export default Nav;
