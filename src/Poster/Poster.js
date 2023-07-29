import './Poster.css';
import Card from '../Card/Card'
import { useState } from 'react'

const Poster = ({poster, font, saveFavorite, randomizePoster, isFavorite}) => {
  return (
    <main className={`poster poster-${poster.type}`}>
      <div className='poster-container'>
        <Card image={poster.src} quote={poster.quote} type={poster.type} font={font} />
      </div> 
      <div className='poster-buttons'>
        <button className='poster-button' onClick={() => randomizePoster('wholesome')}>🥹 random wholesome</button>
        <button className='poster-button' onClick={() => randomizePoster('chaotic')}>😈 random chaotic</button>
        {isFavorite ? <p className='poster-button saved'>Saved!</p> : <button className='poster-button' onClick={saveFavorite}>💛 save to favorites</button>}
      </div>
    </main>
  )
}

export default Poster;