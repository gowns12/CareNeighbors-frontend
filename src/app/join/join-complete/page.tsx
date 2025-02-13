import {BackButton} from "@/components/back-button";
import {NextButton} from "@/components/next-button";

export default function ChoicePage(){

    const next = {
        url: './create-simple-password',
        text: "다음"
    }

    return (
        <div className="flex flex-col items-center">
            {/* Back Button */}
            <BackButton url='./phone-number'/>
            <br/>
            {/* Title */}
            <h1 className="text-xl font-bold">전화번호로 시작하기</h1>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            회원가입이 완료되었습니다<br/><br/>

            {/* Next Button */}
            <NextButton {...next}/>
        </div>
    );
};