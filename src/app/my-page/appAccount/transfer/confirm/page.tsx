'use client';

     import { useState, useCallback } from 'react';
     import { useRouter, useSearchParams } from 'next/navigation';
     import styled from 'styled-components';

     const numberFormat = new Intl.NumberFormat('ko-KR');

     export default function InputAmountPage() {
         const router = useRouter();
         const searchParams = useSearchParams();

         const initialBank = searchParams.get('bank') || '케어네이버스 통장';
         const initialAccount = searchParams.get('accountNumber') || '0000-000-000000';

         const [transferAmount, setTransferAmount] = useState(0);
         const availableBalance = 7456; // 출금 가능 금액 (고정값)

         const handleNumberClick = useCallback((number: string) => {
             setTransferAmount(prevAmount => {
                 const newAmount = parseInt(String(prevAmount) + number);
                 return isNaN(newAmount) ? 0 : newAmount;
             });
         }, []);

         const handleBackspaceClick = () => {
             setTransferAmount(prevAmount => {
                 return Math.floor(prevAmount / 10);
             });
         };

         const handleAmountPreset = (amount: number) => {
             setTransferAmount(amount);
         };

         const handleTransfer = () => {
             if (transferAmount > availableBalance) {
                 alert("출금 가능 금액을 초과했습니다.");
                 return;
             }

             // 확인 페이지로 이동
             router.push(`/appAccount/transfer/confirm?fromBank=${initialBank}&fromAccount=${initialAccount}&toBank=국민은행&toAccount=00000000000000&amount=${transferAmount}`);
         };

         const renderNumberButtons = () => {
             const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '0', 'backspace'];

             return numbers.map((number, index) => (
                 <NumberButton key={index} onClick={() => {
                     if (number === 'backspace') {
                         handleBackspaceClick();
                     } else {
                         handleNumberClick(number);
                     }
                 }}>
                     {number === 'backspace' ? '←' : number}
                 </NumberButton>
             ));
         };

         return (
             <Container>
                 <Header>
                     <BackButton onClick={() => router.back()}>뒤로 가기</BackButton>
                     <Title>이체하기</Title>
                 </Header>

                 <AccountInfo>
                     <AccountSelector>
                         <AccountLabel>사용자의 통장에서</AccountLabel>
                         <AccountDetails>
                             {initialBank} {initialAccount}
                         </AccountDetails>
                     </AccountSelector>

                     <AccountSelector>
                         <AccountLabel>누구누구의 계좌로</AccountLabel>
                         <AccountDetails>
                             국민은행 00000000000000
                         </AccountDetails>
                     </AccountSelector>
                 </AccountInfo>

                 <AmountSection>
                     <AmountQuestion>얼마를 이체하시겠어요?</AmountQuestion>
                     <AvailableBalance>출금가능금액 {numberFormat.format(availableBalance)} 원</AvailableBalance>
                     <AmountDisplay>{numberFormat.format(transferAmount)} 원</AmountDisplay>
                 </AmountSection>

                 <PresetAmounts>
                     <PresetButton onClick={() => handleAmountPreset(10000)}>+1만</PresetButton>
                     <PresetButton onClick={() => handleAmountPreset(50000)}>+5만</PresetButton>
                     <PresetButton onClick={() => handleAmountPreset(100000)}>+10만</PresetButton>
                     <PresetButton onClick={() => handleAmountPreset(availableBalance)}>전액</PresetButton>
                 </PresetAmounts>

                 <NumberPad>
                     {renderNumberButtons()}
                 </NumberPad>

                 <ConfirmButton onClick={handleTransfer}>확인</ConfirmButton>
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

     const AccountInfo = styled.div`
         margin-bottom: 20px;
     `;

     const AccountSelector = styled.div`
         margin-bottom: 10px;
     `;

     const AccountLabel = styled.div`
         font-size: 14px;
         color: #666;
     `;

     const AccountDetails = styled.div`
         font-size: 16px;
     `;

     const AmountSection = styled.div`
         margin-bottom: 20px;
     `;

     const AmountQuestion = styled.div`
         font-size: 16px;
         margin-bottom: 5px;
     `;

     const AvailableBalance = styled.div`
         font-size: 14px;
         color: #666;
         margin-bottom: 10px;
     `;

     const AmountDisplay = styled.div`
         font-size: 24px;
         font-weight: bold;
         text-align: right;
         padding: 10px;
         border: 1px solid #ddd;
         border-radius: 4px;
     `;

     const PresetAmounts = styled.div`
         display: flex;
         justify-content: space-between;
         margin-bottom: 20px;
     `;

     const PresetButton = styled.button`
         padding: 10px 15px;
         border: 1px solid #ddd;
         border-radius: 4px;
         background: white;
         cursor: pointer;
     `;

     const NumberPad = styled.div`
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         gap: 8px;
         margin-bottom: 20px;
     `;

     const NumberButton = styled.button`
         padding: 15px;
         border: 1px solid #ddd;
         border-radius: 4px;
         background: white;
         cursor: pointer;
         font-size: 18px;
         text-align: center;
     `;

     const ConfirmButton = styled.button`
         width: 100%;
         padding: 12px;
         border: 1px solid #ddd;
         border-radius: 4px;
         background: white;
         cursor: pointer;
         font-size: 16px;
     `;