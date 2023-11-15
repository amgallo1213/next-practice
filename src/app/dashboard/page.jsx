"use client"

import React, { useEffect, useState } from 'react';
import styles from './page.module.css'
import useSWR from 'swr';
import Image from 'next/image';

const Dashboard = () => {

    // const [data, setData] = useState([]);
    // const [error, setError] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(true)
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    //     cache: "no-store",
    // });

    // if (!res.ok) {

    //     return notFound()
    // }

    // const data = await res.json()
    // setData(data);
    // setIsLoading(false);
    // };
    // getData()
    // }, []);

    const fetcher = (...args) => fetch(...args).then(res => res.json());

    const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);



    return (
        <div className={styles.container}>Dashboard
        <h1>Dashboard</h1>
            <div>
                <Image src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/ae5428cb-8b0d-49e7-8490-b73e59f1dee7.jpg" width={500} height={400} />
            </div>
        </div>

        )
    
};

export default Dashboard