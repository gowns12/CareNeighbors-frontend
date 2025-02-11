// app/appAccount/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export default function AppAccountPage() {
    const router = useRouter();

    return (
        <Container>
            <Header>
                <HeaderButton onClick={() => router.back()}>뒤로 가기</HeaderButton>
                <PageTitle>앱 통장</PageTitle>
                <HeaderButton>알림</HeaderButton>
                <MenuButton>⋮</MenuButton>
            </Header>

            <AccountBox>
                <AccountInfo>
                    <AccountLabel>사용자의 통장</AccountLabel>
                    <AccountBalance>7,456원</AccountBalance>
                </AccountInfo>
                <TransferButton>이체</TransferButton>
            </AccountBox>
            <ActionButtons>
                <ActionButton onClick={() => router.push("/my-page/appAccount/transaction-history")}>
                    입/출금 내역
                </ActionButton>
                <ActionButton>
                    이체하기
                </ActionButton>
            </ActionButtons>
        </Container>
    );
}

const Container = styled.main`
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    min-height: 100vh;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 20px;
`;

const HeaderButton = styled.button`
    border: none;
    background: none;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
`;

const MenuButton = styled(HeaderButton)`
    font-size: 20px;
`;

const PageTitle = styled.h1`
    font-size: 18px;
    margin: 0;
    flex-grow: 1;
    text-align: center;
`;

const AccountBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 8px;
    margin-bottom: 16px;
`;

const AccountInfo = styled.div``;

const AccountLabel = styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 4px;
`;

const AccountBalance = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const TransferButton = styled.button`
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
    cursor: pointer;
`;

const ActionButtons = styled.div`
    display: flex;
    gap: 12px; // 버튼 사이 간격
    margin-top: 20px;
`;

const ActionButton = styled.button`
    flex: 1; // 버튼이 동일한 너비를 가지도록 설정
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: none;
    font-size: 16px;
    color: #333;
    text-align: center; // 중앙 정렬
    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }

    &:active {
        background-color: #eeeeee;
    }

    &:active {
        background-color: #eeeeee;
    }`;
