import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'
import cryptorings from '../public/img/cryptorings.png'
import cloudswap from '../public/img/cloudswap.png'

export default function Projects() {
    const projects = [
        {
            image: cryptorings,
            description: "6,000 piece NFT collectible launched on mainnet",
            link: "https://www.thecryptorings.com/"
        },
        {
            image: cloudswap,
            description: "Minimum viable decentralized exchange",
            link: "https://github.com/jwarshack/cloudswap"
        }

    ]
    return (
        <section id="projects" className={styles.projects}>
            <p>Here are some things I have built in the past:</p>
            <div className={styles.projectContainer}>
                {
                    projects.map((project, key) => {
                        return(
                            <ProjectCard project={project} />
                        )
                    })
                }        
            </div>
            <p>What I'm currently working on</p>
            <p className={styles.text}>Most of my time I am spending launching my own personal project</p>
        </section>
    )
}