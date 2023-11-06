import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';


async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 10 }
    });

    if (!res.ok) {

        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Blog = async () => {
    const data = await getData()
    return (

        <div className={styles.mainContainer}>


            {data.map((item) => (
                <Link href="/blog/testID" className={styles.container} key={item.id}>
                    <div className={styles.imgContainer}>
                        <Image className={styles.img} src="https://images.pexels.com/photos/7772197/pexels-photo-7772197.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill={true} />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.date}>Date</p>
                            <p className={styles.desc}>words words words</p>
                        </div>
                    </div>
                </Link>

            ))}


        </div>

    )
}

export default Blog