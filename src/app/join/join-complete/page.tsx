'use client';

import React from 'react';
import {useRouter} from 'next/navigation';

const ChoicePage: React.FC = () => {
    const router = useRouter();

    const handleBackClick = () => {
        router.push('./phone-number');
    };

    const handleNextClick = () => {
        // Logic for submitting phone number, carrier, and verification code goes here
        router.push('./phone-number');
    };

    return (
        <div className="p-6">
            {/* Back Button */}
            <button className="text-blue-500 mb-4 flex items-center" onClick={handleBackClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                </svg>
                뒤로가기
            </button>

            {/* Title */}
            <h1 className="text-xl font-bold">전화번호로 시작하기</h1>

            회원가입이 완료되었습니다<br/><br/>

            {/* Next Button */}
            <div className="mt-6">
                <button
                    onClick={handleNextClick}
                    className="bg-blue-500 text-white w-full py-2 rounded font-semibold"
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default ChoicePage;