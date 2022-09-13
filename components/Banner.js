import React, { useState, useEffect } from 'react'
// import axios from '../axios-instance'
import requests from '../requests'
import axios from '../axios'
import style from '../styles/banner.module.css'

const posterBaseUrl = "http://image.tmdb.org/t/p/original"

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(requests.fetchNetflixOriginals)
            setMovie(req.data.results[
                Math.floor(Math.random() * req.data.results.length - 1)
            ])
            return req
        }
        fetchData()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className={style.banner}
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("${posterBaseUrl}${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className={style.banner__contents}>
                <h1 className={style.banner__title}>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className={style.banner__buttons}>
                    <button className={style.banner__btn}>Play</button>
                    <button className={style.banner__btn}>My List</button>
                </div>

                <h1 className={style.banner__description}>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className={`${style}.'banner--fadeBottom'`} />
        </header>
    )
}

export default Banner
