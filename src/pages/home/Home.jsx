import styles from './styles.module.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Img1 from '../../assets/img/Rick_y_morty-S1.webp'
import Img2 from '../../assets/img/Rick_y_morty-S2.webp'
import Img3 from '../../assets/img/Rick_y_morty-S3.webp'

const Home = () => {
  const SEASON_IMAGES = [
    {
      id: 0,
      name: 'Rick and Morty - Season 1',
      src: Img1
    },
    {
      id: 1,
      name: 'Rick and Morty - Season 2',
      src: Img2
    },
    {
      id: 2,
      name: 'Rick and Morty - Season 3',
      src: Img3
    }
  ]

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section>
          <div className={styles.wrapperImg}>
            {SEASON_IMAGES.map((season) => (
              <img
                key={season.id}
                src={season.src}
                alt={season.name}
              />
            ))}
          </div>
        </section>
      </main>
      <aside className={styles.aside}>
        <h3>Aside Content</h3>
        <p>This is my aside content</p>
      </aside>
      <Footer />
    </div>
  )
}

export default Home