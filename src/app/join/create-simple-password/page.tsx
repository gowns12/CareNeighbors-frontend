'use client'

import React, {useEffect} from "react";

export default function Page() {
    const [password, setPassword] = React.useState('');
    const [numPad, setNumpad] = React.useState<string[]>(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
    const shuffle = ()=>setNumpad(n=>shuffleArray([...n]));

    useEffect(() => {
        shuffle()
    }, []);

    const handleNumClick = (num: string) => {
        setPassword(password + num)
        console.log(password)
    }
    const handleClearClick = () => {
        setPassword(password.slice(0, -1));
        console.log(password);
    }


    return <div className="flex flex-col h-full justify-between ">
        <label htmlFor="password" className="flex justify-center text-2xl mt-52 font-semibold">간편 비밀번호 6자리를 설정해주세요 </label>
        <br/><br/><br/>
        <div className="flex justify-center mt-12 text-4xl">
            {password.length === 0 && <span className="w-6 h-6 flex items-center justify-center text-xl"></span>}
            {password.split("").map((_, i) => (
                <Number num={i} key={i} />
            ))}
        </div>
        <br/><br/><br/>
        <div className="grid grid-cols-3 gap-4 mt-6">
            <NumButton num={numPad[0]} handleNumClick={handleNumClick} />
            <NumButton num={numPad[1]} handleNumClick={handleNumClick} />
            <NumButton num={numPad[2]} handleNumClick={handleNumClick} />
            <NumButton num={numPad[3]} handleNumClick={handleNumClick} />
            <NumButton num={numPad[4]} handleNumClick={handleNumClick} />
            <NumButton num={numPad[5]} handleNumClick={handleNumClick} />
            <NumButton num={numPad[6]} handleNumClick={handleNumClick} />
            <NumButton num={numPad[7]} handleNumClick={handleNumClick} />
            <NumButton num={numPad[8]} handleNumClick={handleNumClick} />
            <NumButton num="재배열" handleNumClick={handleNumClick}  shuffle={shuffle}/>
            <NumButton num={numPad[9]} handleNumClick={handleNumClick} />
            <NumButton num="Clear" handleNumClick={handleNumClick} handleClearClick={handleClearClick}/>
        </div>
    </div>;
}

function Number({num}:{num:number}) {
    return (
        <span key={num} className="w-6 h-6 flex items-center justify-center border-b text-xl">*</span>)
}

function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // 0부터 i까지 랜덤 인덱스 선택
        [array[i], array[j]] = [array[j], array[i]]; // 요소 교환 (ES6 구조 분해 할당)
    }
    return array;
}

function NumButton(props: {
    num: string;
    handleNumClick: (num: string) => void;
    handleClearClick?: () => void;
    shuffle?: () => void
}) {


    if (props.num === '재배열') {
        return (
            <button className="px-6 py-3 text-xl" onClick={props.shuffle}>재배열</button>
        )
    }
    if (props.num === 'Clear') {
        return (
            <button className="px-6 py-3 text-xl" onClick={props.handleClearClick}>Clear</button>
        )
    }
    return (
        <button className="px-6 py-3 text-xl" onClick={() => props.handleNumClick(props.num)}>{props.num}</button>
    )
}