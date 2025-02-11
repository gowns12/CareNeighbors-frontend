"use client"

import React from "react";
import {useRouter} from "next/navigation";
import styles from "./back-button.module.css";

interface BackButtonProps {
    url: string;
}

export function BackButton({url}: BackButtonProps) {
    const router = useRouter();

    return <button className={styles.backButton}
        onClick={() => router.push(url)}>
        {"< 뒤로"}
    </button>
}