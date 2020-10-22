import {useContext, useEffect, useState} from 'react'
import getHeros from 'services/getHeros';

export function useHeros ({ keyword } = { keyword: 'batman'}) {

  useEffect(function () {
    getHeros({ keyword: keyword })
      .then(heros => {
        setHeros(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs, keyword])

  useEffect(function(){
    if(page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getHeros({ keyword: keyword, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })

  }, [page, keyword, setGifs])

  return {loading, gifs, loadingNextPage, setPage}
}
