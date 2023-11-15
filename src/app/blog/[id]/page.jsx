import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';


async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        next: { revalidate: 10 }
    });

    if (!res.ok) {

        return notFound()
    }

    return res.json()
}

const BlogPost = async ({params}) => {
    const data = await getData(params.id)
    return(
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.imgContainer}>
                    <Image 
                    src="https://elvezrestaurant.com/wp-content/uploads/sites/15/sb-instagram-feed-images/346444378_132864086454991_1569594035115914743_nfull.jpg"
                    alt=""
                    height={200}
                    width={400}
                    // fill={true}
                    className={styles.img}
                    />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                        sunt nemo necessitatibus veniam dolor reprehenderit amet explicabo
                        sequi voluptatem accusantium debitis vitae repellat omnis, quibusdam 
                        quo dicta corporis quaerat quod?
                    </p>
                    <br/>
                    <div className={styles.author}>
                        <Image 
                        src="https://elvezrestaurant.com/wp-content/uploads/sites/15/sb-instagram-feed-images/346444378_132864086454991_1569594035115914743_nfull.jpg"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.avatar}
                        />
                        <span className={styles.username}>El to the Vez</span>
                    </div>
                    <br />
                </div>
            </div>
            
            <div className={styles.content}>
                <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates, dolores atque sapiente, fugit sunt maxime ipsa
                quam a reprehenderit optio tenetur illum commodi porro accusantium 
                eligendi praesentium laborum esse voluptas?
                </p>
            </div>
        </div>
    )
}

export default BlogPost