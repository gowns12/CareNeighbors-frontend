'use client'

import React from 'react';
import {useRouter} from 'next/navigation';

const LoginScreen: React.FC = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-between h-screen p-6">
            {/* Top Section */}
            <div className="w-full flex justify-start">
                <button
                    className="text-blue-500 text-sm"
                    onClick={() => router.push('./choice-language')}>
                    ← 언어선택으로
                </button>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col gap-4 w-full max-w-xs">
                <button className="w-full py-3 bg-yellow-400 text-black font-bold rounded-lg">
                    카카오로 시작하기
                </button>
                <button className="w-full py-3 bg-red-500 text-white font-bold rounded-lg">
                    구글로 시작하기
                </button>
                <button className="w-full py-3 bg-black text-white font-bold rounded-lg">
                    애플로 시작하기
                </button>
                <button
                    className="w-full py-3 bg-gray-300 text-black font-bold rounded-lg"
                    onClick={() => router.push('/join/phone-number')}>
                    전화번호로 시작하기
                </button>
            </div>

            {/* Footer Section */}
            <div className="text-center text-xs text-gray-500">
                회원가입을 진행함으로써 개인정보 처리방침에 동의하는 것으로 간주합니다.
            </div>
        </div>
    );
};

export default LoginScreen;