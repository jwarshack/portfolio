import styles from './Skills.module.css'
import {SiSolidity} from 'react-icons/si'

export default function Skills() {
    return (
        <section className={styles.skills}>
            <div className={styles.container}>
                <div>
                    <p>Skills</p>
                    <div className={styles.framework}>
                        <SiSolidity style={{fontSize:"2rem", marginRight: "1rem"}}/>
                        <p>Solidity</p>
                    </div>
                    <div className={styles.framework}>
                        <i class="devicon-nextjs-original"></i>
                        <p>Next.js</p>
                    </div>
                    <div className={styles.framework}>
                        <i class="devicon-react-original"></i>
                        <p>React</p>
                    </div>
                    <div className={styles.framework}>
                        <i class="devicon-bootstrap-plain"></i>
                        <p>Bootstrap</p>
                    </div>
                    <div className={styles.framework}>
                        <i class="devicon-tailwindcss-plain"></i>
                        <p>Tailwind CSS</p>
                    </div>
                    <div className={styles.framework}>
                        <i class="devicon-mongodb-plain"></i>
                        <p>MongoDB</p>
                    </div>
                    <div className={styles.framework}>
                        <i class="devicon-html5-plain"></i>
                        <p>HTML</p>
                    </div>
                    <div className={styles.framework}>
                        <i class="devicon-css3-plain"></i>
                        <p>CSS3</p>
                    </div>
                </div>
                <div>
                    <p>Education</p>
                    <p>B.S. in Statistics from the University of Vermont</p>

                    <p>Member of the <span><a href="https://www.developerdao.com/" target="_blank" rel="noopener noreferrer">Developer Dao</a></span></p>                    
                </div>
            </div>


        </section>

    )
}