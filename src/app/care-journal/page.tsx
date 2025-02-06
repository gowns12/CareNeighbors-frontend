import React from "react";
import styles from "./page.module.css";

export default function Page() {

    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>

                <header className={styles.header}>
                    <button className={styles.button}>메뉴</button>
                    <h2 className={styles.title}>간병일지</h2>
                    <button className={styles.button}> 달력전환</button>
                </header>
                <div style={{border: "1px solid red"}}>
                    fff
                </div>
                <main style={{border: "1px solid blue"}} className={styles.main}>
                    dfsgsdgdsfg
                </main>
                <footer className={styles.footer}>fsadfdsafsaf</footer>
            </div>
        </div>
    );
}