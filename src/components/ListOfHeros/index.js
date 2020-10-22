import React from 'react'
import Hero from 'components/Hero';

export default function ListOfHeros ({ heros }) {
  return <div className='ListOfHeros'>
    {
      heros.map(hero => <Hero url={hero.url} />)
    }
  </div>
}
