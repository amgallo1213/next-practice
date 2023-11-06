"use client"

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const Contact = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Let's Keep In Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image src='https://1.bp.blogspot.com/-ci7CKgB-_M8/T5S_PC_BPNI/AAAAAAAACl0/g5u_d53AQg0/s1600/elvez.jpg' alt='' fill={true} className={styles.img} />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="name" className={styles.input} />
                    <input type="text" placeholder="email" className={styles.input} />
                    <textarea className={styles.textArea} cols="30" rows="10" placeholder="message"></textarea>
                    <Button url="" text="Send"></Button>
                </form>
            </div>
        </div>
    )
}

export default Contact