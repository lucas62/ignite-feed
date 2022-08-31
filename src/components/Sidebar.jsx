import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

/* A function that returns a sidebar with a cover image, a profile, and a footer. */
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/lucas62.png"/>

                <strong>Lucas Anselmo</strong>
                <span>Web Developer</span>
            </div>
            
            <footer>
                <a href="#">
                    <PencilLine size={20} />{''}
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}