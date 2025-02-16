import React from 'react'
import styles from './footer.styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapperSocial">
        <div className="footerSocial">
          <a href='https://github.com/Leandro-Fernandez66' target='_blank'>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
        <div className="footerSocial">
          <a href='https://www.linkedin.com/feed/' target='_blank'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </div>
        <p>💻 by leandro</p>
        <p>&copy; 2024 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer