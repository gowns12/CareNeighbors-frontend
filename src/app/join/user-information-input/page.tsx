import {BackButton} from "@/components/back-button";
import InputInformation from "@/app/join/user-information-input/inputInformation";
import SelectGender from "@/app/join/user-information-input/selectGender";
import {NextButton} from "@/components/next-button";

export default function UserInformationInput() {
    const next = {
        url: './join-complete',
        text: "다음"
    }

    return (
        <div className="mt-6 flex flex-col items-center">
            <BackButton url={'/join/phone-number'}/>
            <h1 className={"text-xl text-center"}><strong>회원 정보 입력</strong></h1>
            <br/>
            <InputInformation info={"이름"}/>
            <SelectGender/>
            <InputInformation info={"전화번호"}/>
            <InputInformation info={"이메일"}/>
            <InputInformation info={"거주지"}/>
            <InputInformation info={"소속 직업소개소"}/>

            <NextButton {...next}/>
        </div>
    )
}