import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Imagemodal from './Imagemodal';
import { useState } from 'react';

type DT = {
  data: any;
  height: string;
  width: string;
};

type getimgsType = {
  url: string;
}[];

const Slider = ({ data, width, height }: DT) => {

  const [getimgs, setImgs] = useState<getimgsType>();
  const [showModal,setShowModal] = useState(false)

  const images = Object.values(data).map((v: any, k) => {
    return {
      url: v.image,
    };
  });

  const Handleclick = () => {
    setImgs(images);
    setShowModal(true)
  };

  return (
    <>
      <Slide
        autoplay={false}
        // onChange={function noRefCheck(){}}
        // onStartChange={function noRefCheck(){}}
      >
        {images.map((fadeImage, index) => (
          <div
            onClick={Handleclick}
            className="each-slide-effect"
            key={index}
            style={{
              backgroundImage: `url(${fadeImage?.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              cursor: 'pointer',
              height,
              width,
            }}
          ></div>
        ))}
      </Slide>

      {showModal ? (<Imagemodal img={getimgs} setShowModal={setShowModal} />) : ''}
    </>
  );
};

export default Slider;
