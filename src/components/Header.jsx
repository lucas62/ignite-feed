import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

/**
 * It returns a header element with a className of "header" and an image element
 * with a source of "igniteLogo" and an alt of "Logotipo do Ignite".
 * @returns A header with an image inside.
 */
export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    )
}