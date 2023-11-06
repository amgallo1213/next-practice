import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='https://elvezrestaurant.com/wp-content/uploads/sites/15/2022/10/ElVez_Fall2019_web-28.jpg' alt='' fill={true} className={styles.img} />
                {/* <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>El Vez Philadelphia</h1>
                    <h2 className={styles.imgDesc}>Something something mexican experience</h2>
                </div> */}
            </div>

            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>A visit to the Vez</h1>
                    <p className={styles.desc}>The flashy, frenetic Latin decor, featuring high-backed velvet Hollywood booths and 
                    an eye-popping low-rider bike elevated above the dining room, creates the perfect conditions for memorable food 
                    and drink. Unexpected interpretations of Mexican classics join traditional cooking on the expansive menu, complemented
                    by a bar that boasts one of the biggest tequila selections — and the best margaritas — in the city. Striking the ideal 
                    balance between a south-of-the-border celebration and a hot and flashy Las Vegas blowout, El Vez is the embodiment of Mex-Eclectic spirit.</p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione excepturi
                        quis a? Vitae obcaecati quae amet soluta quos! Cum est incidunt a temporibus laboriosam
                        necessitatibus voluptatum fugiat impedit eaque?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, recusandae adipisci,
                        at fugiat aspernatur cum temporibus placeat iusto magni ducimus. A voluptatibus facilis
                        aliquid distinctio eligendi, enim sed rerum!</p>

                    <span className={styles.break}> - Make</span>   
                    <span className={styles.break}> - Many</span> 
                    <span className={styles.break}> - Cocktails</span> 
                    <Button url="/contact" text="Contact" />
                </div>

            </div>

        </div>
    )
}

export default About