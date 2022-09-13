import React from 'react'
import Image from 'next/image'
import style from '../styles/nav.module.css'
import logo from '../assets/logo.png'
import avatar from '../assets/avatar.png'
import { useEffect } from 'react'
import { useState } from 'react'

const Nav = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll", null)
        }
    }, [])

    return (
        <div className={show ? `${style.nav} ${style.nav__black}` : style.nav}>
            <Image
                className={style.nav__logo}
                src={logo}
                width={100}
                height={30}
                alt="netflix logo" />

            <Image
                className={style.nav__avatar}
                width={50}
                height={50}
                src={avatar}
                alt='netflix avatar' />
        </div>
    )
}

export default Nav
