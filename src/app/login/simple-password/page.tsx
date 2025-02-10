'use client'

import React from "react";

export default function Page() {
    const [password, setPassword] = React.useState('');

    const numPad =
        ["0","1","2","3","4","5","6","7","8","9"]
    shuffleArray(numPad);

    const handleNumClick = (num: string) => {
        setPassword(password + num);
    }
    const handleClearClick = () => {
        setPassword(password.slice(0, -1));
    }

    console.log(password);

    return <div>
        <div className="grid grid-cols-3 gap-4">
            <NumButton num={numPad[0]} handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
            <NumButton num={numPad[1]} handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
            <NumButton num={numPad[2]} handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
            <NumButton num={numPad[3]} handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
            <NumButton num={numPad[4]} handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
            <NumButton num={numPad[5]} handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
            <NumButton num={numPad[6]} handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
            <NumButton num={numPad[7]} handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
            <NumButton num={numPad[8]} handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
            <NumButton num="재배열" handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
            <NumButton num={numPad[9]} handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
            <NumButton num="<-" handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
        </div>
    </div>;
}

function shuffleArray(array:string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // 0부터 i까지 랜덤 인덱스 선택
        [array[i], array[j]] = [array[j], array[i]]; // 요소 교환 (ES6 구조 분해 할당)
    }
    return array;
}

function NumButton(props: {num: string; handleNumClick: (num: string) => void; handleClearClick: () => void;}) {
    return <button>{props.num}</button>
}