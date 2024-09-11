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
   <div className={styles.mainSection}>
    <h1 style={{ fontSize:50 }}>What is anime all about?</h1>
    <img src="../intro-pic.png" alt="Crunchyroll Logo" width="1080" height="auto"/>
    <h2 style={{ fontSize:25, marginTop: 16, marginLeft: 10}}>Anime is a style of animation that originated in Japan, known for its vibrant artwork, unique characters, and captivating storytelling. It covers a wide range of genres—from action and adventure to romance and fantasy—appealing to audiences of all ages. What sets anime apart is its ability to explore deep themes like friendship, courage, and personal growth, often through fantastical worlds and imaginative plots. Whether you're into high-energy battles, heartfelt dramas, or lighthearted comedies, anime offers something for everyone to enjoy.</h2>
   </div>

   

   <div className={styles.mainSection}>
    <h1 style={{ fontSize:50 }}>Where to watch anime?</h1>
    <h2 style={{ fontSize:25}}>Crunchyroll</h2>
    <a href='https://www.crunchyroll.com/offer-premium?utm_source=google&utm_medium=paid_cr&utm_campaign=CR-Paid_Google_Web_Conversion_US-CA_US_Trademark_SVOD&utm_term=crunchyroll&referrer=google_paid_cr_CR-Paid_Google_Web_Conversion_US-CA_US_Trademark_SVOD&gad_source=1&gclid=CjwKCAjw3P-2BhAEEiwA3yPhwO6EjcsYGOLL9hABvDV9-c9Tti32wV-CWKSo44fObWJS7K3OdHhDXRoC0DkQAvD_BwE'>
      <img src="../Crunchyroll-Logo-2018.png" alt="Crunchyroll Logo" width="300" height="auto"/>
    </a>
    <p>Price = $15/month</p>
   </div>
   <div className={styles.mainSection}>
    <h2 style={{ fontSize:25}}>Netflix</h2>
    <a href='https://www.netflix.com/ '>
      <img src="../netflix logo.jpg"  alt="Crunchyroll Logo" width="300" height="auto"/>
    </a>
    <p>Price = $20/month</p>
   </div>
   <div className={styles.mainSection}>
    <h2 style={{ fontSize:25}}>HULU</h2>
    <a href='https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.com%2F'>
      <img src="../hulu-logo.png" alt="Crunchyroll Logo" width="300" height="auto"/>
    </a>
    <p>Price = $10/month</p>
   </div>
   </>
  )
}
