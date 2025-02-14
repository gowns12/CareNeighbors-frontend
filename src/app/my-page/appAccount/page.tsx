'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export default function AppAccountPage() {
    const router = useRouter();

    const transactions = [
        { id: "1", date: "01. 31", merchant: "케어네이버스", amount: -7456, balance: 7456 },
        { id: "2", date: "01. 30", merchant: "케어네이버스", amount: -10000, balance: 14912 },
        { id: "3", date: "12. 25", merchant: "케어네이버스", amount: 10000, balance: 24912 },
        { id: "4", date: "12. 24", merchant: "케어네이버스", amount: -100000, balance: 14912 },
        { id: "5", date: "12. 20", merchant: "케어네이버스", amount: 100000, balance: 114912 },
        { id: "6", date: "12. 19", merchant: "케어네이버스", amount: -1000000, balance: 14912 },
        { id: "7", date: "12. 15", merchant: "케어네이버스", amount: 1000000, balance: 1014912 },
        { id: "8", date: "12. 20", merchant: "케어네이버스", amount: -500000, balance: 0 },
    ];

    const recentTransactions = transactions.slice(0, 5);

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
                <TransferButton onClick={() => router.push("/my-page/appAccount/transfer/select-institution")}>이체</TransferButton>
            </AccountBox>

            <ActionButtons>
                <ActionButton onClick={() => router.push("/my-page/appAccount/transaction-history")}>
                    입/출금 내역
                </ActionButton>
            </ActionButtons>

            <RecentTransactionsSection>
                <SectionTitle>직전 거래내역</SectionTitle>
                <TransactionHistory>
                    {recentTransactions.map((tx) => (
                        <TransactionItem key={tx.id}>
                            {tx.date}  {tx.merchant}  {tx.amount > 0 ? '입금' : '출금'} {Math.abs(tx.amount).toLocaleString()}원
                        </TransactionItem>
                    ))}
                </TransactionHistory>
            </RecentTransactionsSection>
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
    margin-bottom: 20px;
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
`;

const RecentTransactionsSection = styled.section`
    margin-top: 20px;
`;

const SectionTitle = styled.h2`
    font-size: 16px;
    margin-bottom: 10px;
`;

const TransactionHistory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px; // 내역 사이 간격
    margin-bottom: 20px;
`;

const TransactionItem = styled.div`
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    background: #f9f9f9;
    font-size: 14px;
    color: #333;
`;