import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'



/**
 * The App function returns the Header component, the Sidebar component, and the
 * Post component
 */
function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
        </main>

      </div>
    </>
  )
}

export default App
