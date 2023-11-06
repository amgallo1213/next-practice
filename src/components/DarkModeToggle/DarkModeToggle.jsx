"use client"

import React, { useContext } from "react";
import styles from './darkModeToggle.module.css'
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {

    const {toggle, mode} = useContext(ThemeContext)
    return ( 
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>L</div>
            <div className={styles.icon}>D</div>
            <div className={styles.ball}  style={mode === "light" ? {left:"5px"} : {right:"5px"}}/>
        </div>
    );
}

export default DarkModeToggle;