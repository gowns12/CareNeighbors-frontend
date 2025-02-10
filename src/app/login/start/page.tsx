'use client'

import React from 'react';
import {useRouter} from 'next/navigation';

const WelcomeScreen: React.FC = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {/* 임시 로고 (검정 네모) */}
            <div className="w-32 h-32 bg-black mb-8"></div>
            {/* 시작하기 버튼 */}
            <button
                className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                onClick={() => router.push('/login/choice-language')}
            >
                시작하기
            </button>
        </div>
    );
};

export default WelcomeScreen;