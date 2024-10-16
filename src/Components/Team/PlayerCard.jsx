import React from 'react';
import './PlayerCard.css'

const PlayerCard = ({number, name, imgSrc}) => {
    return (
        <div className='player-card'>
            <img className='player-img'src={imgSrc}/>
                <div className="player-details">
                    <h3>{number}</h3>
                    <h2>{name}</h2>
                </div>
            </div>
            )
}
export default PlayerCard;