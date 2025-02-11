'use client'

import React from 'react';

export default function SelectCarrier() {
    const [carrier, setCarrier] = React.useState('');

    return <select
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
}