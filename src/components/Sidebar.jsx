import styles from './Sidebar.module.css'

/**
 * It returns a sidebar with a cover image, a profile, and a footer.
 * @returns A React component.
 */
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <strong>Lucas Anselmo</strong>
                <span>Web Developer</span>
            </div>
            
            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    )
}