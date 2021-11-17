import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import jake from '../public/img/jake.jpeg'

export default function Home() {
  return (
    <section className={styles.hero}>

    <div className={styles.skew}>

      <div className={styles.content}>
        <Navbar />

        <h3 className={styles.brand}>
          Hi, I'm Jake Warren!
        </h3>
        <div className={styles.bio}>
          <Image src={jake} height={200} width={200} className={styles.profile}/>
          <div className={styles.bioText}>
            <p>I am a full stack blockchain developer buidling Dapps on Ethereum.
              I love decentralization and learning new technologies

            </p>
          </div>

        </div>
        

      </div>



    </div>
        <div className={styles.footer}>
        <p className={styles.text}>
          Jake Warren
        </p>
      </div>
      </section>
  )
}
