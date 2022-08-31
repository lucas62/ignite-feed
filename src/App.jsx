import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'http://github.com/lucas62.png',
      name: 'Lucas Anselmo',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    tags: [
      '#novoprojeto',
      '#nlw',
      '#rocketseat'
    ],
    publishedAt: new Date('2022-08-24 18:30:50')
  },
  {
    id: 2,
    author: {
      avatarUrl:'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 Acesse e deixe seu feedback 👉'},
      {type: 'link', content: 'devonlane.design'}
    ],
    tags: [
      '#uiux',
      '#userexperience'
    ],
    publishedAt: new Date('2022-08-25 10:30:30')
  },
]

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
          {posts.map(post => (
            <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              tags={post.tags}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>

      </div>
    </>
  )
}

export default App
