'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import pageStyles from '../page.module.css';
import styles from './page.module.css'; // CSS 파일 import

const WelcomeScreen: React.FC = () => {
    const router = useRouter();

    return (
        <div className={pageStyles.container}>
            {/* 모바일 해상도를 구현하는 외부 컨테이너 */}
            <div className={pageStyles.mobileView}>
                {/* 내부 콘텐츠 */}
                <div className={styles.innerContent}>
                    {/* 임시 로고 */}
                    <div className={styles.logo}>Care Neighbors</div>
                    {/* 시작하기 버튼 */}
                    <button
                        className={styles.button}
                        onClick={() => router.push('/login/choice-language')}
                    >
                        시작하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;