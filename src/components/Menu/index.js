import React from 'react'
import './styles.css'
import { Link } from 'wouter'

export default function Menu () {
  return (
    <ul className='Menu'>
      <li className='Menu__link'>
        <Link href="/">Home</Link>
      </li>

      <li className='Menu__link'>
        <Link href="/info">Information</Link>
      </li>
    </ul>
  )
}
