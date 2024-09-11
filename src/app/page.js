import Image from 'next/image'
import styles from '@/app/page.module.css'

export default function Home() {

  
  return (
   <>
   <nav className={styles.navHome}>
    <ul>
      <li><a href='/'>home</a></li>
      <li><a href='/'>catalog</a></li>
      <li><a href='/'>about</a></li>
    </ul>
   </nav>
   <div className={styles.hero}>
    <h1>ANI-INFO</h1>
   </div>
   </>
  )
}
