'use client'

import React from "react";

export default function InputPhoneNumber() {
    const [phoneNumber, setPhoneNumber] = React.useState('');

    return <input
        type="text"
        placeholder="전화번호를 입력해주세요"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="border p-2 w-3/4 rounded mr-2"
    />
}