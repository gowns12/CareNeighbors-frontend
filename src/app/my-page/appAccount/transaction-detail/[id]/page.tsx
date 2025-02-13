// app/appAccount/transaction-detail/[id]/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export default function TransactionDetailPage() {
    const router = useRouter();

    const transaction = {
        merchant: "케어네이버스",
        amount: -10000,
        transactionType: "출금",
        transactionTime: "2025.01.30 14:36:19",
        memo: "입력하세요.",
        finalBalance: 14912,
    };

    return (
        <Container>
            <Header>
                <BackButton onClick={() => router.back()}>뒤로 가기</BackButton>
            </Header>

            <Content>
                <MerchantName>{transaction.merchant}</MerchantName>
                <Amount $isPositive={transaction.amount > 0}>
                    {transaction.amount.toLocaleString()}원
                </Amount>

                <DetailSection>
                    <DetailRow>
                        <DetailLabel>거래 구분</DetailLabel>
                        <DetailValue>{transaction.transactionType}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <DetailLabel>거래 시각</DetailLabel>
                        <DetailValue>{transaction.transactionTime}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <DetailLabel>메모, 태그</DetailLabel>
                        <DetailValue>{transaction.memo}</DetailValue>
                    </DetailRow>
                </DetailSection>

                <AmountSection>
                    <DetailRow>
                        <DetailLabel>거래 금액</DetailLabel>
                        <DetailValue>{transaction.amount.toLocaleString()}원</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <DetailLabel>거래 후 잔액</DetailLabel>
                        <DetailValue>{transaction.finalBalance.toLocaleString()}원</DetailValue>
                    </DetailRow>
                </AmountSection>
            </Content>

            <Footer>
                <ShareButton>공유</ShareButton>
                <ConfirmButton>확인</ConfirmButton>
            </Footer>
        </Container>
    );
}

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
  background: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MerchantName = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
`;

const Amount = styled.div<{ $isPositive: boolean }>`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.$isPositive ? '#2c8af3' : '#000'};
  margin-bottom: 24px;
`;

const DetailSection = styled.div`
  border-top: 1px solid #eee;
  padding-top: 16px;
  margin-bottom: 24px;
`;

const AmountSection = styled.div`
  border-top: 1px solid #eee;
  padding-top: 16px;
  margin-bottom: 24px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const DetailLabel = styled.div`
  color: #666;
  font-size: 14px;
`;

const DetailValue = styled.div`
  font-size: 14px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
`;

const ShareButton = styled.button`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  margin-right: 8px;
`;

const ConfirmButton = styled.button`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  margin-left: 8px;
`;
