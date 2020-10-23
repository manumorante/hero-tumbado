import React, {useState} from 'react'
import './styles.css'
import { useLocation } from 'wouter'

export default function Search () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation() // eslint-disable-line

  const handleSubmit = evt => {
    evt.preventDefault()
    const keywordToUse = keyword || ''
    pushLocation(`/search/${keywordToUse}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return <div className='Search'>
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className='Search__input'
        onChange={handleChange}
        value={keyword}
        placeholder='Search'
        />
    </form>
  </div>
}
