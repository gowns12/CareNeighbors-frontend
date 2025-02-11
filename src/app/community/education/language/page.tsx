"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function LanguageEducationPage() {
    const router = useRouter();

    return (
        <Container>
            <Header>
                <BackButton onClick={() => router.back()}>← 뒤로</BackButton>
                <Title>언어 교육</Title>
            </Header>
            <Content>
                <Section>
                    <SectionTitle>언어 학습의 중요성</SectionTitle>
                    <Paragraph>
                        언어는 사람과 사람을 연결하는 중요한 도구입니다. 새로운 언어를 배우면
                        글로벌 커뮤니케이션 능력을 키울 수 있으며, 다양한 문화와 사람들을 이해하는 데
                        큰 도움이 됩니다.
                    </Paragraph>
                </Section>

                <Section>
                    <SectionTitle>추천 강의</SectionTitle>
                    <CardContainer>
                        <Card>
                            <CardImage src="https://via.placeholder.com/150" alt="한국어 강의" />
                            <CardTitle>한국어 기초 강의</CardTitle>
                            <CardDescription>한국어를 처음 배우는 분들을 위한 기초 과정입니다.</CardDescription>
                        </Card>
                        <Card>
                            <CardImage src="https://via.placeholder.com/150" alt="영어 강의" />
                            <CardTitle>영어 회화</CardTitle>
                            <CardDescription>실생활에서 바로 사용할 수 있는 영어 회화 강의입니다.</CardDescription>
                        </Card>
                        <Card>
                            <CardImage src="https://via.placeholder.com/150" alt="중국어 강의" />
                            <CardTitle>중국어 초급</CardTitle>
                            <CardDescription>중국어를 쉽고 재미있게 배울 수 있는 초급 과정입니다.</CardDescription>
                        </Card>
                    </CardContainer>
                </Section>

                <Section>
                    <SectionTitle>학습 자료</SectionTitle>
                    <Paragraph>- PDF 교재 다운로드</Paragraph>
                    <Paragraph>- 동영상 강의 자료</Paragraph>
                    <Paragraph>- 실시간 Q&A 세션</Paragraph>
                </Section>

                <StyledButton onClick={() => router.push("/community")}>
                    커뮤니티로 돌아가기
                </StyledButton>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #eee;
`;

const BackButton = styled.button`
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    flex: 1; /* 남은 공간을 차지하여 가운데 정렬 가능 */
    text-align: center; /* 텍스트를 수평 중앙 정렬 */
`;

const Content = styled.div`
    padding: 16px;
`;

const Section = styled.section`
    margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
    font-size: 16px;
    margin-bottom: 8px;
`;

const Paragraph = styled.p`
    font-size: 14px;
    color: #555;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
`;

const Card = styled.div`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
`;

const CardImage = styled.img`
    width: 100%;
    border-radius: 8px;
`;

const CardTitle = styled.h3`
    font-size: 14px;
    margin-top: 12px;
`;

const CardDescription = styled.p`
    font-size: 12px;
    color: #666;
`;

const StyledButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #4CAF50;
    color: white;
    border-radius: 8px;
    border: none;
    font-size: 14px;

    &:hover {
        background-color: #45a049;
        cursor: pointer;
    }
`;
