import styles from './Navbar.module.css'
import Link from 'next/link'
import { BsGithub, BsMedium, BsLinkedin } from 'react-icons/bs'


export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <Link href="#projects">PROJECTS</Link>
            </div>
            
            <div>
                <a href="https://github.com/jwarshack" target="_blank" rel="noopener noreferrer"><BsGithub className={styles.icon} /></a>
                <a href="https://medium.com/@thelasthash" target="_blank" rel="noopener noreferrer"><BsMedium className={styles.icon} /></a>
                <a href="https://www.linkedin.com/in/jake-warren-1279a5136/" target="_blank" rel="noopener noreferrer" ><BsLinkedin className={styles.icon} /></a>
            </div>
            <div className={styles.links}>
                <p>HIRE ME</p>
            </div>
        </div>

    )

}