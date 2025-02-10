'use client'
import pageStyles from '../page.module.css';
import contentStyles from './page.module.css';
import React, {useState} from 'react';
import {NextButton} from "@/components/next-button";

const LanguageSelector: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('한국어');

    const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedLanguage(event.target.value);
    };

    const next = {
        url: '/login/choice',
        text: "다음"
    }

    const language: string[] = [
        "한국어", "English", "日本語", "Русский", "Монгол"
    ]

    return (
        <div className={pageStyles.container}>
            <div className={pageStyles.mobileView}>
                <div className={contentStyles.innerContent}>
                    <h1 style={{fontSize: '16px', fontWeight: '400'}}><br/>언어</h1>
                    <form>
                        {language.map((lang: string) => (
                            <RadioBox
                                key={lang}
                                language={lang}
                                setSelectedLanguage={selectedLanguage}
                                handleLanguageChange={handleLanguageChange}
                            />
                        ))}
                    </form>
                    <NextButton {...next} />
                </div>
            </div>
        </div>

);
}



function RadioBox(props : {
    language: string;
    setSelectedLanguage : string;
    handleLanguageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
} ) {
    return (
        <div className={contentStyles.radioBox}>
            <input className={contentStyles.radio}
                   type="radio"
                   id={props.language}
                   name="language"
                   value={props.language}
                   checked={props.setSelectedLanguage === props.language}
                   onChange={props.handleLanguageChange}
            />
            <label className={contentStyles.radioLabel} htmlFor={props.language}>
                {props.language}
            </label>
        </div>
    )
}

export default LanguageSelector;