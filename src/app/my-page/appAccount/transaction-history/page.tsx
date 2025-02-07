// app/appAccount/transaction-history/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface Transaction {
    date: string;
    merchant: string;
    amount: number;
    balance: number;
}

export default function TransactionHistoryPage() {
    const router = useRouter();

    const transactions: Transaction[] = [
        { date: "01. 31", merchant: "케어네이버스", amount: -7456, balance: 7456 },
        { date: "01. 30", merchant: "케어네이버스", amount: -10000, balance: 14912 },
        { date: "12. 25", merchant: "케어네이버스", amount: 10000, balance: 24912 },
        { date: "12. 24", merchant: "케어네이버스", amount: -100000, balance: 14912 },
        { date: "12. 20", merchant: "케어네이버스", amount: 100000, balance: 114912 },
        { date: "12. 19", merchant: "케어네이버스", amount: -1000000, balance: 14912 },
        { date: "12. 15", merchant: "케어네이버스", amount: 1000000, balance: 1014912 },
        { date: "12. 20", merchant: "케어네이버스", amount: -500000, balance: 0 },
    ];

    return (
        <Container>
            <Header>
                <BackButton onClick={() => router.back()}>뒤로 가기</BackButton>
                <Title>입/출금 내역</Title>
            </Header>

            <AccountBox>
                <AccountInfo>
                    <AccountName>사용자의 통장</AccountName>
                    <AccountBalance>7,456원</AccountBalance>
                </AccountInfo>
                <TransferButton>이체</TransferButton>
            </AccountBox>

            <FilterBar>
                <SearchIcon>🔍</SearchIcon>
                <FilterText>3개월, 전체, 최신</FilterText>
            </FilterBar>

            <TransactionList>
                {transactions.map((tx, index) => (
                    <TransactionItem key={index}>
                        <LeftSection>
                            <Date>{tx.date}</Date>
                            <Merchant>{tx.merchant}</Merchant>
                        </LeftSection>
                        <RightSection>
                            <Amount $isPositive={tx.amount > 0}>
                                {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()}원
                            </Amount>
                            <Balance>{tx.balance.toLocaleString()}원</Balance>
                        </RightSection>
                    </TransactionItem>
                ))}
            </TransactionList>
        </Container>
    );
}

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
  background: #fff;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  border: none;
  background: none;
  padding: 8px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 18px;
  flex: 1;
  text-align: center;
  margin: 0;
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

const AccountName = styled.div`
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

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

const SearchIcon = styled.span``;

const FilterText = styled.span`
  color: #666;
  font-size: 14px;
`;

const TransactionList = styled.div`
  margin-top: 16px;
`;

const TransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
`;

const LeftSection = styled.div``;

const Date = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
`;

const Merchant = styled.div`
  font-size: 14px;
`;

const RightSection = styled.div`
  text-align: right;
`;

const Amount = styled.div<{ $isPositive: boolean }>`
  font-weight: bold;
  color: ${props => props.$isPositive ? '#2c8af3' : '#000'};
  margin-bottom: 4px;
`;

const Balance = styled.div`
  font-size: 14px;
  color: #666;
`;


