'use client'

import React from "react";

export default function SelectGender() {
    const [gender, setGender] = React.useState('');

    return <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border m-1 flex justify-items-start w-3/4 h-8 border-black border-1"
    >
        <option value="" disabled hidden>성별</option>
        <option value="남성">남성</option>
        <option value="여성">여성</option>
    </select>
}