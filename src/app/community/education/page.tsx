"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function EducationMainPage() {
    const router = useRouter();

    return (
        <Container>
            <Header>
                <Title>교육 메인 페이지</Title>
            </Header>
            <Content>
                <Section>
                    <CardContainer>
                        {/* 언어 교육 카드 */}
                        <Card onClick={() => router.push("/community/education/language")}>
                            <CardImage src="/images/education-language.PNG" alt="언어 교육" />
                            <CardTitle>언어 교육</CardTitle>
                            <CardDescription>
                                글로벌 커뮤니케이션 능력을 키우기 위한 언어 학습 강의.
                            </CardDescription>
                        </Card>

                        {/* 보수 교육 카드 */}
                        <Card onClick={() => router.push("/community/education/advanced")}>
                            <CardImage src="/images/education-advance.PNG" alt="보수 교육" />
                            <CardTitle>보수 교육</CardTitle>
                            <CardDescription>
                                간병인의 전문성을 강화하고 최신 기술을 배우는 과정.
                            </CardDescription>
                        </Card>
                    </CardContainer>
                </Section>

                {/* 커뮤니티로 돌아가기 버튼 */}
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
    padding: 16px;
    border-bottom: 1px solid #eee;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
`;

const Content = styled.div`
    padding: 16px;
`;

const Section = styled.section`
    margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
    font-size: 16px;
    margin-bottom: 16px;
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
    cursor: pointer;

    &:hover {
        background-color: #f3f3f3;
        transform: translateY(-4px);
        transition: all 0.2s ease-in-out;
    }
`;

const CardImage = styled.img`
    width: 100%;
    border-radius: 8px;
`;

const CardTitle = styled.h3`
    font-size: 16px;
    margin-top: 12px;
`;

const CardDescription = styled.p`
    font-size: 14px;
    color: #555;
`;

const StyledButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #007BFF; /* 파란색 버튼 */
    color: white;
    border-radius: 8px;
    border: none;
    font-size: 14px;

    &:hover {
        background-color: #0056b3; /* 어두운 파란색 */
        cursor: pointer;
    }
`;
