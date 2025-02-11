'use client';

import React, {useState} from 'react';
import {useRouter} from 'next/navigation';

const ChoicePage: React.FC = () => {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [carrier, setCarrier] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const handleBackClick = () => {
        router.push('/login/choice');
    };

    const handleSendVerification = () => {
        // Logic for sending the verification code goes here
        console.log('Sending verification code...');
    };

    const handleNextClick = () => {
        // Logic for submitting phone number, carrier, and verification code goes here
        console.log('Proceeding to the next step...');
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
            <p className="mt-2">전화번호를 입력해주세요</p>

            {/* Phone Number Input */}
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="전화번호를 입력해주세요"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border p-2 w-3/4 rounded mr-2"
                />
                <button
                    onClick={handleSendVerification}
                    className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
                >
                    인증번호 전송
                </button>
            </div>

            {/* Carrier Selection */}
            <div className="mt-4">
                <select
                    value={carrier}
                    onChange={(e) => setCarrier(e.target.value)}
                    className="border p-2 w-full rounded"
                >
                    <option value="" disabled>
                        통신사를 선택해주세요.
                    </option>
                    <option value="SKT">SKT</option>
                    <option value="KT">KT</option>
                    <option value="LG U+">LG U+</option>
                    <option value="알뜰폰 SKT">알뜰폰 SKT</option>
                    <option value="알뜰폰 KT">알뜰폰 KT</option>
                    <option value="알뜰폰 LG U+">알뜰폰 LG U+</option>
                </select>
            </div>

            {/* Verification Code Input */}
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="인증코드를 입력해주세요."
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="border p-2 w-full rounded"
                />
            </div>

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