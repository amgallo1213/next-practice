import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return(
        <div className={styles.container}>
            <div>2023 Monomania. All rights reserved.</div>
            <div className={styles.social}>
                <Image src='/1.png' className={styles.icon} width={15} height={15} alt='facebook logo' />
                <Image src='/2.png' className={styles.icon} width={15} height={15} alt='instagram logo' />
                <Image src='/3.png' className={styles.icon} width={15} height={15} alt='twitter logo' />
                <Image src='/4.png' className={styles.icon} width={15} height={15} alt='youTube logo' />
            </div>
        </div>
    )
}

export default Footer