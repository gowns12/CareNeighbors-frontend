"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

interface HeaderProps {
    title: string;
    hasBack?: boolean;
}

const Header = ({ title, hasBack = false }: HeaderProps) => {
    const router = useRouter();
    return (
        <StyledHeader>
            <div>
                {hasBack && (
                    <BackButton
                        onClick={() => {
                            console.log("뒤로가기 클릭됨");
                            router.back();
                        }}
                        aria-label="뒤로가기"
                    >
                        &larr;
                    </BackButton>
                )}
            </div>
            <Title>{title}</Title>
            <div />
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #ddd;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const BackButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: #007aff;
`;