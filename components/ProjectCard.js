import Image from "next/image"
import cloudswap from '../public/img/cloudswap.png'
import styles from './ProjectCard.module.css'

export default function ProjectCard({project}) {
    return (
        <div className={styles.card}>
            <a href={project.link} target="_blank" rel="noopener noreferrer"><Image src={project.image} className={styles.image}/></a>
            <p className={styles.description}>{project.description}</p>
        </div>

    )

}