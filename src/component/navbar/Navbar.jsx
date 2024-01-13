import React from 'react'
import './Navbar.css'

export const Navbar = ()=> {
  return (
    <header className="heading d-flex  align-center fixed">
      <h1 className="heading-1">
        <a className="link" href="/">Travel</a>
      </h1>
    <div className="form-container d-flex align-center cursor-pointer">
      <span className='form-option'>any where</span>
      <span className='border-right-1px'></span>
      <span className='form-option'>any week</span>
      <span className='border-right-1px'></span>
      <span className='form-option'>add guests</span>
      <span className="search material-symbols-outlined">search</span>
    </div>

      <nav className="d-flex align-center gap-large">
        <div className="nav d-flex align-center cursor-pointer">
          <span className="material-symbols-outlined">menu</span>
          <span className="material-symbols-outlined">person_2</span>
        </div>
      </nav>
    </header>
  )
}


