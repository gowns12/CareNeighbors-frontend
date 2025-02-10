import pageStyles from '../page.module.css';
import styles from './page.module.css'; // CSS 파일 import
import {} from '@/components/back-button';
import {NextButton} from "@/components/next-button";

export default function LoginScreen() {

    const next = {
        url: '/login/choice-language',
        text: "시작하기"
    }

    return (
        <div className={styles.innerContent}>
            {/* 임시 로고 */}
            <div className={styles.logo}>Care Neighbors</div>
            {/* 시작하기 버튼 */}
            <NextButton {...next}/>
        </div>
    )
}