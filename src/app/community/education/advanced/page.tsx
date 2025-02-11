"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function CaregiverEducationPage() {
    const router = useRouter();

    return (
        <Container>
            <Header>
                <BackButton onClick={() => router.back()}>← 뒤로</BackButton>
                <Title>간병인 보수 교육</Title>
            </Header>
            <Content>
                {/* 보수 교육의 목적 섹션 */}
                <Section>
                    <SectionTitle>보수 교육이란?</SectionTitle>
                    <Paragraph>
                        간병인 보수 교육은 환자의 안전과 건강을 위해 간병인의 전문성을 강화하고 최신 의료 및 간병 지식을 학습하는 과정입니다.
                        이를 통해 간병 업무의 질을 높이고, 환자와 보호자에게 더 나은 서비스를 제공할 수 있습니다.
                    </Paragraph>
                </Section>

                {/* 추천 강의 섹션 */}
                <Section>
                    <SectionTitle>추천 강의</SectionTitle>
                    <CardContainer>
                        <Card>
                            <CardImage src="https://via.placeholder.com/150" alt="감염 관리 강의" />
                            <CardTitle>감염 관리와 위생</CardTitle>
                            <CardDescription>
                                환자와 간병인의 안전을 위한 감염 예방 및 위생 관리 방법을 학습합니다.
                            </CardDescription>
                        </Card>
                        <Card>
                            <CardImage src="https://via.placeholder.com/150" alt="응급처치 강의" />
                            <CardTitle>응급처치 및 기본 대처</CardTitle>
                            <CardDescription>
                                응급 상황에서 환자를 안전하게 돌볼 수 있는 기본 응급처치 기술을 배웁니다.
                            </CardDescription>
                        </Card>
                        <Card>
                            <CardImage src="https://via.placeholder.com/150" alt="치매 관리 강의" />
                            <CardTitle>치매 환자 돌봄</CardTitle>
                            <CardDescription>
                                치매 환자의 행동 이해와 효과적인 돌봄 방법을 배울 수 있는 강의입니다.
                            </CardDescription>
                        </Card>
                    </CardContainer>
                </Section>

                {/* 학습 자료 섹션 */}
                <Section>
                    <SectionTitle>학습 자료</SectionTitle>
                    <Paragraph>- PDF 매뉴얼: 감염 관리 및 응급처치 가이드</Paragraph>
                    <Paragraph>- 동영상 강의: 치매 환자와의 소통 방법</Paragraph>
                    <Paragraph>- 실습 자료: 응급 상황 시뮬레이션 및 케이스 스터디</Paragraph>
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
