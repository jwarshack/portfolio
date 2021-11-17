import styles from './Navbar.module.css'
import { BsGithub, BsMedium, BsLinkedin } from 'react-icons/bs'


export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <p>Projects</p>
            </div>
            
            <div>
                <BsGithub className={styles.icon} />
                <BsMedium className={styles.icon} />
                <BsLinkedin className={styles.icon} /> 
            </div>
            <div className={styles.links}>
                <p>Hire Me</p>
            </div>
        </div>

    )

}