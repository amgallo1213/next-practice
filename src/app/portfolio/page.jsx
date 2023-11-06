import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Portfolio = () => {
    return(
        <div className={styles.container}>
            <div className={styles.items}>
                <Link href="/portfolio/margsAndMore" className={styles.item}>
                    <span className={styles.title}>Margs & More</span>
                </Link>
                {/* <Link href="/portfolio/brunchlunch" className={styles.item}>
                    <span className={styles.title}>Brunch & Lunch</span>
                </Link> */}
                <Link href="/portfolio/menuItems" className={styles.item}>
                    <span className={styles.title}>Food</span>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio