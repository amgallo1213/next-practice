import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>El Vez Philadelphia</h1>
          <p className={styles.desc}>
            As bright and boisterous as a ride in a Tijuana taxi, El Vez exudes fun at every conceivable turn.
          </p>
          <Button url="/portfolio" text="Explore our menus"/>
        </div>
        <div className={styles.item}>
        <Image src="https://tableagent.s3.amazonaws.com/media/originals/273_4111.jpg" height={500} width={600} alt="" className={styles.img}/>
        </div>
        
      </div>
         
         
        
  )
}
