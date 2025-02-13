// app/appAccount/transfer/confirm/page.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const numberFormat = new Intl.NumberFormat('ko-KR');

export default function TransferConfirmationPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [fromBank, setFromBank] = useState('케어네이버스 통장');
    const [fromAccount, setFromAccount] = useState('0000-000-000000');
    const [toBank, setToBank] = useState('국민은행');
    const [toAccount, setToAccount] = useState('00000000000000');
    const [transferAmount, setTransferAmount] = useState(1400000);

    useEffect(() => {
        // URL 파라미터에서 값 가져오기 (초기값 설정)
        setFromBank(searchParams.get('fromBank') || '케어네이버스 통장');
        setFromAccount(searchParams.get('fromAccount') || '0000-000-000000');
        setToBank(searchParams.get('toBank') || '국민은행');
        setToAccount(searchParams.get('toAccount') || '00000000000000');
        const amountParam = searchParams.get('amount');
        setTransferAmount(amountParam ? parseInt(amountParam) : 1400000);
    }, [searchParams]);

    const handleTransferConfirmation = () => {
        // 실제 이체 로직 구현 (API 호출 등)
        console.log('이체 실행!');
        // 이체 완료 후 페이지 이동 (예: 완료 페이지)
        // router.push('/appAccount/transfer/complete');
    };

    return (
        <Container>
            <Header>
                <BackButton onClick={() => router.back()}>뒤로 가기</BackButton>
                <Title>이체하기</Title>
            </Header>

            <TransferDetails>
                <AccountInfo>
                    <AccountLabel>사용자의 통장에서</AccountLabel>
                    <AccountValue>
                        <BankLogo>은행 로고</BankLogo>
                        {fromBank} {fromAccount}
                    </AccountValue>
                </AccountInfo>
                <AccountInfo>
                    <AccountLabel>누구누구의 계좌로</AccountLabel>
                    <AccountValue>
                        <BankLogo>은행 로고</BankLogo>
                        {toBank} {toAccount}
                    </AccountValue>
                </AccountInfo>

                <Amount>
                    {numberFormat.format(transferAmount)} 원
                </Amount>
                <SubAmount>
                    {numberFormat.format(transferAmount)} 원
                </SubAmount>

                <MemoOptions>
                    <MemoOption>받는 분 통장표기</MemoOption>
                    <MemoOption>사용자 이름 ></MemoOption>
                </MemoOptions>
                <MemoOptions>
                    <MemoOption>내 통장표기</MemoOption>
                    <MemoOption>받는 사용자 이름 ></MemoOption>
                </MemoOptions>
            </TransferDetails>

            <NextButton onClick={handleTransferConfirmation}>다음</NextButton>
        </Container>
    );
}

const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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

const TransferDetails = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
`;

const AccountInfo = styled.div`
    margin-bottom: 10px;
`;

const AccountLabel = styled.div`
    font-size: 14px;
    color: #666;
`;

const AccountValue = styled.div`
    font-size: 16px;
    display: flex;
    align-items: center;
`;

const BankLogo = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    margin-right: 5px;
`;

const Amount = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
`;

const SubAmount = styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
`;

const MemoOptions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;

const MemoOption = styled.div`
    font-size: 14px;
`;

const NextButton = styled.button`
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
`;
