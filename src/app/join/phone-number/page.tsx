
import {BackButton} from "@/components/back-button";
import InputPhoneNumber from "@/app/join/phone-number/inputPhoneNumber";
import SendVerificationButton from "@/app/join/phone-number/sendVerificationButton";
import {NextButton} from "@/components/next-button";
import SelectCarrier from "@/app/join/phone-number/selectCarrier";

export default function ChoicePage(){
    const next = {
        url:'/join/join-complete',
        text:"다음"
    }


    return (
        <div className="p-6">
            {/* Back Button */}
            <BackButton url="/login/choice"/>

            {/* Title */}
            <h1 className="flex text-xl font-bold justify-center">전화번호로 시작하기</h1>
            <p className="mt-2">전화번호를 입력해주세요</p>

            {/* Phone Number Input */}
            <div className="mt-4 flex items-center">
                <InputPhoneNumber/>
                <SendVerificationButton/>
            </div>

            {/* Carrier Selection */}
            <SelectCarrier/>

            {/* Verification Code Input */}
            <InputPhoneNumber/>

            {/* Next Button */}
            <NextButton {...next}/>
        </div>
    );
}