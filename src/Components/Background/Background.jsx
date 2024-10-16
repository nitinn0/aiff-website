import './Background.css';
import image from '../../assets/image.jpeg';
import iff from '../../assets/iff.jpg';
import image2 from '../../assets/image2.jpeg';

const Background = ({ playStatus, heroCount }) => {
  return (
        <>
          {heroCount === 0 && <img src={image2} className='background' alt="" />}
          {heroCount === 1 && <img src={image} className='background' alt="" />}
          {heroCount === 2 && <img src={iff} className='background' alt="" />}
        </>
  );
};

export default Background;
