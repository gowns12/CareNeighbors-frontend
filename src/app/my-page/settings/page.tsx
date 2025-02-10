"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation"; // Next.js useRouter import

const Page = () => {
    const router = useRouter();

    return (
        <Container>
            <Header>
                <BackButton onClick={() => router.back()}>뒤로 가기</BackButton>
                <Title>설정</Title>
            </Header>

            <SettingsList>
                {/* 언어 선택 */}
                <Item onClick={() => router.push("/login/choice-language")}> {/* 언어 선택 페이지로 이동 */}
                    <span>언어</span>
                    <SelectedValue>한국어</SelectedValue>
                </Item>

                {/* 메뉴 항목 */}
                <MenuItem>알림</MenuItem>
                <MenuItem>공지사항</MenuItem>
                <MenuItem>문의하기</MenuItem>
                <MenuItem>서비스 이용약관</MenuItem>
                <MenuItem>개인정보 처리방침</MenuItem>

                {/* 캐시 삭제 */}
                <CacheInfo>
                    <span>캐시 삭제</span>
                    <CacheDetails>
                        <CacheSize>1.3MB</CacheSize>
                        <Arrow>{">"}</Arrow>
                    </CacheDetails>
                </CacheInfo>
            </SettingsList>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    max-width: 500px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: #f8f9fa;
    min-height: 100vh;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-bottom: 1px solid #eee;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
`;

const BackButton = styled.button`
    position: absolute; /* 버튼을 왼쪽 상단 구석으로 이동 */
    left: 16px; /* 왼쪽 바깥 여백 */
    border: none;
    background: none;
    font-size: 16px;
    color: #007aff;
    cursor: pointer;

    &:hover {
        text-decoration: underline;

    }
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
`;

const SettingsList = styled.div`
    margin-top: 16px;
    background-color: white;
`;

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    color: #333;
    cursor: pointer; /* 추가: 클릭 가능 스타일 */

    &:hover {
        background-color: #f8f8f8;
    }
`;

const SelectedValue = styled.span`
    color: #666;
`;

const MenuItem = styled.div`
    padding: 16px;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    color: #333;
    cursor: pointer;

    &:hover {
        background-color: #f8f8f8;
    }
`;

const CacheInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    color: #333;
    cursor: pointer;

    &:hover {
        background-color: #f8f8f8;
    }
`;

const CacheDetails = styled.div`
    display: flex;
    align-items: center;
`;

const CacheSize = styled.span`
    color: #666;
    margin-right: 8px;
`;

const Arrow = styled.span`
    color: #999;
    font-size: 14px;
`;

export default Page;