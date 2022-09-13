import React, { useState, useEffect } from 'react'
import axios from '../axios'
import style from '../styles/row.module.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import Image from 'next/image'

const posterBaseUrl = "https://image.tmdb.org/t/p/original"

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    // a snippet of code which runs based on specific condition
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            console.log(request.data.results)
            return request
        }
        fetchData()

        // if [], run once when the row loads and don't run it again
        // if [fetchUrl] => whever fetchUrl changes, the code runs again
    }, [fetchUrl])

    const opts = {
        height: '600',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || "").then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            }).catch((err) => console.log(err))
        }
    }

    return (
        <div className={style.row}>
            <h2>{title}</h2>
            <div className={style.row__posters}>
                {
                    movies.map(movie => (
                        <div key={movie.id}
                            onClick={handleClick}
                            className={isLargeRow ? style.row__posterLarge : style.row__poster}
                            style={{
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: `url("${posterBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}")`,
                                backgroundSize: isLargeRow ? 'cover' : 'contain',
                                backgroundPosition: 'center',
                                marginTop: isLargeRow ? '0' : '-50px'
                            }}>
                        </div>
                    ))
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opt={opts} />}
        </div>
    )
}

export default Row
