import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import jake from '../public/img/jake.jpeg'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"/>

      </Head>
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
        <Projects />
        <Skills />
        <Footer/>
        
        
      </div>
      
  )
}
