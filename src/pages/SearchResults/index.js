import React, { useEffect, useState } from 'react'
import Hero from 'components/Hero'
import getHeros from 'services/getHeros'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const [heros, setHeros] = useState([])


  useEffect(function () {
    console.log('efecto')

    getHeros({ keyword: keyword })
      .then(heros => {
        setHeros(heros)
      })
  }, [keyword])



  return <div className='SearchResults'>
    <h4>Searching for '{keyword}'</h4>
    {
      heros.map(hero => <Hero
        key={hero.id}
        id={hero.id}
        name={hero.name}
        image={hero.image}
        />)
    }

  </div>
}
