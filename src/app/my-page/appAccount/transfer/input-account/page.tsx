'use client';

    import { useState, useEffect } from 'react';
    import { useRouter, useSearchParams } from 'next/navigation';
    import styled from 'styled-components';

    export default function InputAccountPage() {
        const router = useRouter();
        const searchParams = useSearchParams();
        const [accountNumber, setAccountNumber] = useState('');
        const [selectedBank, setSelectedBank] = useState('');

        useEffect(() => {
            const institution = searchParams.get('institution');
            if (institution) {
                setSelectedBank(institution);
            }
        }, [searchParams]);

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setAccountNumber(e.target.value);
        };

        const handleNextClick = () => {
            console.log(`계좌번호: ${accountNumber}, 은행: ${selectedBank}`);
            router.push(`/my-page/appAccount/transfer/input-amount?bank=${selectedBank}&accountNumber=${accountNumber}`);
        };

        return (
            <Container>
                <Header>
                    <BackButton onClick={() => router.back()}>뒤로 가기</BackButton>
                    <Title>이체하기</Title>
                </Header>

                <Content>
                    <Instruction>계좌번호를 입력해 주세요</Instruction>

                    <BankSelection>
                        <BankLogo>은행 로고</BankLogo>
                        <BankName>{selectedBank}</BankName>
                    </BankSelection>

                    <InputArea>
                        <Input
                            type="number"
                            placeholder="입력"
                            value={accountNumber}
                            onChange={handleInputChange}
                        />
                        <InputUnderline />
                    </InputArea>

                </Content>

                <Footer>
                    <NextButton onClick={handleNextClick}>다음</NextButton>
                </Footer>
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

    const Content = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
    `;

    const Instruction = styled.div`
        font-size: 16px;
        margin-bottom: 20px;
    `;

    const BankSelection = styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    `;

    const BankLogo = styled.div`
        width: 40px;
        height: 40px;
        border: 1px solid #ddd;
        margin-right: 10px;
    `;

    const BankName = styled.div`
        font-size: 16px;
    `;

    const InputArea = styled.div`
        margin-bottom: 20px;
    `;

    const Input = styled.input`
        width: 100%;
        padding: 8px;
        border: none;
        font-size: 16px;
        &:focus {
            outline: none;
        }
    `;

    const InputUnderline = styled.div`
        width: 100%;
        height: 1px;
        background-color: #ddd;
    `;

    const Footer = styled.footer`
        padding-top: 20px;
    `;

    const NextButton = styled.button`
        width: 100%;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        background: white;
        cursor: pointer;
        font-size: 16px;
    `;