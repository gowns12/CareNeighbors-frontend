'use client'

import React, {useState} from 'react';

const LanguageSelector: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('한국어');

    const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div>
            <h1>언어</h1>
            <form>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="한국어"
                            checked={selectedLanguage === '한국어'}
                            onChange={handleLanguageChange}
                        />
                        한국어
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="English"
                            checked={selectedLanguage === 'English'}
                            onChange={handleLanguageChange}
                        />
                        English
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="日本語"
                            checked={selectedLanguage === '日本語'}
                            onChange={handleLanguageChange}
                        />
                        日本語
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="Русский"
                            checked={selectedLanguage === 'Русский'}
                            onChange={handleLanguageChange}
                        />
                        Русский
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="Монгол"
                            checked={selectedLanguage === 'Монгол'}
                            onChange={handleLanguageChange}
                        />
                        Монгол
                    </label>
                </div>
            </form>
            <button onClick={() => window.location.href = "/login/choice"}>
                다음
            </button>
        </div>
    );
};

export default LanguageSelector;