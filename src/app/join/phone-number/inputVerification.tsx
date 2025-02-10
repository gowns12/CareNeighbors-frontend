'use client'

import React from "react";

export default function InputVerification() {
    const [verificationCode, setVerificationCode] = React.useState('');

    return <input
        type="text"
        placeholder="인증코드를 입력해주세요."
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        className="border p-2 w-full rounded"
    />
}