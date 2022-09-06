import React from 'react'
import './header.css'
import CTA from './CTA'
import PHOTOS from '../../assets/photos4.png'
import HeaderSocials from './headerSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Septiana Dyah Anissawati</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="photos">
          <img src={PHOTOS} alt="photos" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header