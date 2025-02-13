'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export default function SelectInstitutionPage() {
    const router = useRouter();
    const [isBankSelected, setIsBankSelected] = useState(true); // 은행/증권사 선택 상태

    const bankList = [
        "농협", "국민", "카카오뱅크", "신한", "우리", "IBK기업", "하나", "iM뱅크(대구)", "경남", "광주",
        "도이치", "부산", "신협", "산업", "새마을금고", "수협", "신협", "씨티", "우체국", "저축은행",
        "전북", "제주", "중국공상", "케이뱅크", "토스뱅크", "BNP", "BOA"
    ];

    const securitiesList = [
        "교보증권", "다올투자증권", "대신증권", "메리츠증권", "미래에셋증권", "부국증권", "삼성증권",
        "상상인증권", "신영증권", "신한투자증권", "유안타증권", "유진투자증권", "카카오페이증권", "케이프투자증권",
        "키움증권", "토스증권", "하나증권", "한국투자증권", "KB증권", "한화투자증권", "현대차증권", "BNK증권",
        "DB금융투자", "IBK투자증권", "iM증권", "KB증권", "LS증권"
    ];

    const handleInstitutionClick = (institution: string) => {
        router.push(`/my-page/appAccount/transfer/input-account?institution=${institution}`);
    };

    return (
        <Container>
            <Header>
                <BackButton onClick={() => router.back()}>뒤로 가기</BackButton>
                <Title>이체하기</Title>
            </Header>

            <SelectionButtons>
                <SelectionButton
                    $isSelected={isBankSelected}
                    onClick={() => setIsBankSelected(true)}
                >
                    은행
                </SelectionButton>
                <SelectionButton
                    $isSelected={!isBankSelected}
                    onClick={() => setIsBankSelected(false)}
                >
                    증권사
                </SelectionButton>
            </SelectionButtons>

            <ListContainer>
                {isBankSelected ? (
                    bankList.map((bank, index) => (
                        <InstitutionButton key={index} onClick={() => handleInstitutionClick(bank)}>
                            {bank}
                        </InstitutionButton>
                    ))
                ) : (
                    securitiesList.map((securities, index) => (
                        <InstitutionButton key={index} onClick={() => handleInstitutionClick(securities)}>
                            {securities}
                        </InstitutionButton>
                    ))
                )}
            </ListContainer>
        </Container>
    );
}

const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    min-height: 100vh;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 20px;
`;

const BackButton = styled.button`
    border: none;
    background: none;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
`;

const Title = styled.h1`
    font-size: 18px;
    margin: 0 auto;
    text-align: center;
`;

const SelectionButtons = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const SelectionButton = styled.button<{ $isSelected: boolean }>`
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: ${props => (props.$isSelected ? '#eee' : 'white')};
    cursor: pointer;
    &:first-child {
        margin-right: 8px;
    }
`;

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
`;

const InstitutionButton = styled.button`
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    text-align: center;
`;