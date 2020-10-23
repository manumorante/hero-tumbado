import React from 'react'
import { Link } from 'wouter'

export default function Home () {
  return (
    <div className='Home'>
      <h2>Home</h2>
      <ul>
        <li><Link href="/search/batman" className='Link'>Search for 'batman'</Link></li>
        <li><Link href="/search/spider-man" className='Link'>Search for 'spider-man'</Link></li>
        <li><Link href="/search/hulk" className='Link'>Search for 'hulk'</Link></li>
        <li><Link href="/search/catwoman" className='Link'>Search for 'catwoman'</Link></li>
      </ul>
    </div>
  )
}
