'use client';
import Link from 'next/link';
import useGetQuery from '@/data/query/useGetQuery';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaFacebook } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scroll = window.scrollY;
    const num = Math.floor(scroll);

    if (num > 150) {
      setSticky(true);
    }
    else{
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

  const path = usePathname();

  return (
    <nav className="navbar">
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
      <div className={sticky ? 'stickynav container' : ' container'}>
        <div>
          <Link href="/">
          {logo}
          </Link>
          </div>
        <div>
          <ul>
            <li>
              <Link href="/" className={path === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={path === '/about' ? 'active' : ''}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={path === '/services' ? 'active' : ''}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={path === '/contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div></div>
    </nav>
  );
};

export default Nav;
