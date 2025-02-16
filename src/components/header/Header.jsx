import React from 'react'
import styles from './header.styles.module.scss'
const Header = () => {
  return (
    <header className={`${styles.header} border`}>
      <h1>Welcome to Rick and Morty APP</h1>
      <nav className={styles.containerMenu}>
        <ul className={styles.menu}>
          <li><a href="/">Home</a></li>
          <li><a href="/personajes">Characters</a></li>
          <li><a href="/sobre-nosotros">About Us</a></li>
          <li><a href="/contacto">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header