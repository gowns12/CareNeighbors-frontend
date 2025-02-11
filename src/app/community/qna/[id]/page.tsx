"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

interface Post {
    id: number;
    category: string;
    title: string;
    content: string;
    uploadDate: string;
    views: number;
}

// 임시 게시글 데이터 (추후 API 연동 필요)
const tempPost: Post = {
    id: 1,
    category: "전체",
    title: "질문 1",
    content: "본문 내용입니다. 질문에 대한 상세 내용을 여기에 적습니다.",
    uploadDate: "2025-02-11",
    views: 123,
};

const CommunityQnaDetail = () => {
    const router = useRouter();

    return (
        <Container>
            <Header>
                <BackButton onClick={() => router.back()}>뒤로 가기</BackButton>
                <Title>질문 및 답변</Title>
                <NotificationButton>알림</NotificationButton>
            </Header>

            <Category>{`[${tempPost.category}]`}</Category>
            <PostTitle>{tempPost.title}</PostTitle>
            <PostDetails>
                {tempPost.uploadDate} | 조회수: {tempPost.views}
            </PostDetails>
            <Content>{tempPost.content}</Content>

            {/* 수정 버튼 추가 */}
            <EditButton onClick={() => router.push(`/community/qna/write?id=${tempPost.id}`)}>수정</EditButton>
        </Container>
    );
};

const Container = styled.div`
    min-height: 100vh;
    background-color: #f8f9fa;
    padding: 16px;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
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
`;

const NotificationButton = styled.button`
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;
`;

const Category = styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
`;

const PostTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const PostDetails = styled.div`
    font-size: 12px;
    color: #888;
    margin-bottom: 16px;
`;

const Content = styled.div`
    font-size: 16px;
    line-height: 1.6;
`;

// 수정 버튼 스타일
const EditButton = styled.button`
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #0056b3;
    }
`;

export default CommunityQnaDetail;
