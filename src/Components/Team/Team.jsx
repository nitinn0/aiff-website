import React from 'react';
import './Team.css';
import PlayerCard from '../../Components/Team/PlayerCard.jsx';
import gk from '../../assets/gk.jpeg';
import gk1 from '../../assets/gk1.jpeg';

const Team = () => {
  return (
    <div className="team-container">
      <h1>Goalkeepers</h1>
      <hr />
      <div className="player-grid">
        <PlayerCard
          number="1"
          name="Gurpreet"
          position="Goalkeeper"
          imgSrc={gk}
        />
        <PlayerCard
          number="13"
          name="Vishal"
          position="Goalkeeper"
          imgSrc={gk1}
        />
      </div>

      <h2 style={{ marginLeft: '30px',
    fontSize: '2rem',
    marginBottom: '20px'}}>Defenders</h2>
      <hr />
      <div className="player-grid">
        <PlayerCard
          number="3" 
          name="Subhashish Bose"
          position="Defender"
        />
        <PlayerCard
          number="4" 
          name="Anwar Ali"
        />
        <PlayerCard 
        number = "6"
        name="Ashish Rai"
        />
        <PlayerCard
        number="2"
        name="Rahul Bhenke"
        />
      </div>
      <h2 style={{ marginLeft: '30px',
    fontSize: '2rem',
    marginBottom: '20px'}}>Midfielders</h2>
      <hr />
      <div className="player-grid">
        <PlayerCard
          number="3" 
          name="Subhashish Bose"
        />
        <PlayerCard
          number="4" 
          name="Anwar Ali"
        />
        <PlayerCard 
        number = "6"
        name="Ashish Rai"
        />
        <PlayerCard
        number="2"
        name="Rahul Bhenke"
        />
        </div>
    </div>
  );
};

export default Team;