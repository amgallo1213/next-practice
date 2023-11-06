import React from 'react';
import styles from './page.module.css'
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { items } from './data.js'
import { notFound } from 'next/navigation';


const getData = (cat) => {
    const data = items[cat];

    if(data){
        return data;
    }
    return notFound()
};


const Category = ({params}) => {
    const data = getData(params.category)
    return(
        <div className={styles.container}>
            <h1 className={styles.categoryTitle}>{params.category}</h1>

            {data.map((item) => (

        
            <div className={styles.item} key={item.id}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{item.name}</h1>
                    <p className={styles.desc}>{item.allergens}</p>
                    <Button text="See More" url="#"/>
                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src="https://elvezrestaurant.com/wp-content/uploads/sites/15/2018/04/VERTICALRIGHT_4-e1666374050378.jpg" alt="" fill={true}/>
                </div>
            </div>
        ))}






            {/* <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>desc</p>
                    <Button text="See More" url="#"/>
                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src="https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill={true}/>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>desc</p>
                    <Button text="See More" url="#"/>
                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src="https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill={true}/>
                </div>
            </div> */}


        </div>
    )
}

export default Category