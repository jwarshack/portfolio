import { BsGithub, BsMedium, BsLinkedin } from 'react-icons/bs'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <a href="https://github.com/jwarshack" target="_blank" rel="noopener noreferrer"><BsGithub className={styles.icon} /></a>
            <a href="https://medium.com/@thelasthash" target="_blank" rel="noopener noreferrer"><BsMedium className={styles.icon} /></a>
            <a href="https://www.linkedin.com/in/jake-warren-1279a5136/" target="_blank" rel="noopener noreferrer" ><BsLinkedin className={styles.icon} /></a>
        </div>

    )
}