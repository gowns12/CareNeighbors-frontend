import pageStyles from '../page.module.css';
import contentStyles from './page.module.css';
import {BackButton} from "@/components/back-button";
import Link from "next/link";

export default function LoginScreen() {
    const choice = {
        "카카오로 시작하기":"",
        "구글로 시작하기":"",
        "애플로 시작하기":"",
        "전화번호로 시작하기":"/join/phone-number"
    }

    return (
        <div className={pageStyles.container}>
            <div className={pageStyles.mobileView}>
                <div className={contentStyles.innerContents}>
                    <BackButton url="/login/choice-language"/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    로고
                    <LoginButton {...choice}/>
                    <div className={contentStyles.footerNotice}>
                        회원가입을 진행함으로써 <a href="/terms"><u>서비스 이용약관</u></a> 및 <a href="/privacy">개인정보 처리방침</a>에 동의하는 것으로 간주됩니다.
                    </div>
                </div>

            </div>
        </div>
    );
}

function LoginButton(props: Record<string, string>) {
    return (
        <div className={contentStyles.buttonContainer}>
            {Object.entries(props).map(([key, value]) => (
                <Link key={key} href={value} className={contentStyles.button}>{key}</Link>
            ))}
        </div>
    )
}






