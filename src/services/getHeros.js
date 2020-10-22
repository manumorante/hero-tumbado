import {API_KEY, API_URL} from './settings'

const parseHeros = apiResponse => {
  const {results = []} = apiResponse
  if(Array.isArray(results)) {
    const heros = results.map(hero => {
      const { id, name, image } = hero
      return { id, name, image }
    })
    return heros
  }
  return []
}

export default function getHeros ({keyword = 'batman'} = {}) {
  const apiURL = `${API_URL}/${API_KEY}/search/${keyword}`
  return fetch(apiURL)
  .then(res => res.json())
  .then(parseHeros)
}
