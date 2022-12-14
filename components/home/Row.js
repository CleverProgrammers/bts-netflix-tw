import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from '../../utils/axios'
import style from '../../styles/home/Row.module.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const posterBaseUrl = 'https://image.tmdb.org/t/p/original'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    ;(async () => {
      const request = await axios.get(fetchUrl)

      setMovies(request.data.results)
    })()
  }, [fetchUrl])

  const opts = {
    height: '600',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)

          setTrailerUrl(urlParams.get('v'))
        })
        .catch(error => console.error(error.message))
    }
  }

  return (
    <div className={style.wrapper}>
      <h2>{title}</h2>

      <div className={style.postersContainer}>
        {movies.map(movie => (
          <div
            key={movie.id}
            onClick={handleClick}
            className={isLargeRow ? style.largePoster : style.smallPoster}
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url("${posterBaseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }")`,
              backgroundSize: isLargeRow ? 'cover' : 'contain',
              backgroundPosition: 'center',
              marginTop: isLargeRow ? '0' : '-3rem',
            }}
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opt={opts} />}
    </div>
  )
}

export default Row
