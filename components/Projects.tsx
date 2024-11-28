'use client';

import useGetQuery from '@/data/query/useGetQuery';
import Modal from './Modal';
import { useState } from 'react';

type ShowImageType = {
  img: string;
};

const ShowImage = ({ img }: ShowImageType) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className="show-image-bx"
    ></div>
  );
};

const Projects = () => {
  const [state, setState] = useState(false);
  const [imgs, setImage] = useState('');

  const data = useGetQuery('projects', '/projects') || [];

  let proj1Title = '';
  let proj1Img = '';

  let proj2Title = '';
  let proj2Img = '';

  let proj3Title = '';
  let proj3Img = '';

  if (data.length > 0) {
    proj1Title = data[0]?.title;
    proj1Img = data[0]?.image;

    proj2Title = data[1]?.title;
    proj2Img = data[1]?.image;

    proj3Title = data[2]?.title;
    proj3Img = data[2]?.image;
  }

  return (
    <>
      <section className="projects">
        <h2>OUR PROJECTS</h2>

        <div className="container">
          <div>
            <div>{proj1Title}</div>
            <div
              style={{
                backgroundImage: `url(${proj1Img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                cursor: 'pointer',
              }}
              onClick={() => {
                setImage(proj1Img);
                setState(true);
              }}
            ></div>
          </div>

          <div>
            <div
              style={{
                backgroundImage: `url(${proj2Img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                cursor: 'pointer',
              }}
              onClick={() => {
                setImage(proj2Img);
                setState(true);
              }}
            ></div>
            <div>{proj2Title}</div>
          </div>

          <div>
            <div>{proj3Title}</div>
            <div
              style={{
                backgroundImage: `url(${proj3Img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                cursor: 'pointer',
              }}
              onClick={() => {
                setImage(proj3Img);
                setState(true);
              }}
            ></div>
          </div>
        </div>
      </section>

      <Modal
        comp={<ShowImage img={imgs} />}
        state={state}
        setState={setState}
      />
    </>
  );
};

export default Projects;
