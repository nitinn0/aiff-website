import React from 'react';
import './News.css';
import image from '../../assets/image.jpeg';

const News = () => {
  return (
    <div className="news-container">
      <div className="news-card">
        <img className='news-img' src={image} alt="Thumbnail" />
        <div>
          <h2>Team India Gears Up</h2>
          <p>India is preparing for their next qualifier match after a tough loss to Qatar.</p>
        </div>
      </div>

      <div className="news-card">
        <img className='news-img' src={image} alt="Thumbnail" />
        <div>
          <h2>Key Player Injured</h2>
          <p>Star player suffers an injury during practice, leaving the team in suspense.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="news-card">
        <img className='news-img' src={image} alt="Thumbnail" />
        <div>
          <h2>Victory Over Rivals</h2>
          <p>India secures a last-minute victory over its long-time rival.</p>
        </div>
      </div>
    </div>
  );
};

export default News;
