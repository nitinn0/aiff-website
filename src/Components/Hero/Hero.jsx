import './Hero.css';
import arrow_btn from '../../assets/arrow_btn.png';

const Hero = ({ heroData, setHeroCount, heroCount, playStatus, setPlayStatus }) => {


  const handleNextHero = () => {
    setHeroCount((prevCount) => (prevCount + 1) % 3); // Cycle through the heroData array
  };

  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
        {heroData.extraText && <p style={{fontSize:'23px'}}>{heroData.extraText}</p>}
      </div>
      
      <div className="hero-explore" style={{marginTop:'17px'}} onClick={handleNextHero}>  {/* Add onClick to the arrow */}
        <p>More Latest News</p>
        <img src={arrow_btn} />
      </div>

      <div className="hero-dot-play">
        <ul className='hero-dots'>
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
