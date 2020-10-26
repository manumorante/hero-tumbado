import React from 'react'

export default function Hero (hero) {
  const { id, name } = hero

  return (
    <div className='Hero'>
      <h3>{name}({id})</h3>
    </div>
  )
}
