import Link from "next/link";
import styles from "./next-button.module.css";

interface NextButtonProps {
    url: string,
    text: string
}

export function NextButton(props: NextButtonProps) {
    return(
        <Link className={styles.button} href={props.url}>
            {props.text}
        </Link>
    )
}