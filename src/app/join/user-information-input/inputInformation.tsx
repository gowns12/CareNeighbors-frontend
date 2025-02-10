'use client'

import React from "react";

interface InputInformationProps {
    info: string;
}

export default function InputInformation({ info }: InputInformationProps) {
    const [information, setInformation] = React.useState('');

    return (
        <input className={"border m-1 flex justify-items-start w-3/4 h-8 border-black border-1"} placeholder={info} value={information} onChange={(e) => setInformation(e.target.value)}>
        </input>
    )
}