"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import FooterNav from "@/app/my-page/components/FooterNav";

export default function Page() {
    const router = useRouter();

    return (
        <Container>
            <Header>
                <MenuButton>메뉴</MenuButton>
                <Title>커뮤니티</Title>
                <NotificationButton>알림</NotificationButton>
            </Header>
            <Section>
                <SectionTitle>교육</SectionTitle>
                <Subsection>
                    <ButtonRow>
                        <StyledButton onClick={() => router.push("/community/education/language")}>
                            언어 교육
                        </StyledButton>
                        <StyledButton onClick={() => router.push("/community/education/advanced")}>
                            보수 교육
                        </StyledButton>
                    </ButtonRow>
                </Subsection>
            </Section>

            <Section>
                <SectionTitle>질문 및 답변</SectionTitle>
                <Subsection>
                    <StyledButton onClick={() => router.push("/community/qna")}>
                        전체 게시판
                    </StyledButton>
                </Subsection>
            </Section>
            <FooterNav />
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
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #eee;
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
`;

const MenuButton = styled.button`
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;
`;

const NotificationButton = styled.button`
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;
`;

const Section = styled.section`
    margin-bottom: 16px;
    padding: 0 16px;
`;

const SectionTitle = styled.h2`
    font-size: 16px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const DropdownArrow = styled.span`
    font-size: 14px;
`;

const Subsection = styled.div`
    padding: 0 16px;
    margin-bottom: 8px;
`;

const ButtonRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`;

const StyledButton = styled.button`
    width: 100%;
    padding: 12px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #f3f3f3;
    }
`;

const TabBar = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 8px;
    border-top: 1px solid #eee;
`;

const Tab = styled.button<{ $active?: boolean }>`
    padding: 8px;
    border: none;
    background: ${({ $active }) => ($active ? "#f0f0f0" : "white")};
    font-size: 12px;
    cursor: pointer;

    &:hover {
        background-color: #f7f7f7;
    }
`;


