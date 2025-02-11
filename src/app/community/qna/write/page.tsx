"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter, useSearchParams } from "next/navigation";

interface Post {
    id: number;
    category: string;
    title: string;
    content: string;
    uploadDate: string;
    views: number;
}

const CommunityQnaWrite = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const postId = searchParams.get("id");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // 임시 게시글 데이터 (추후 API 연동 필요)
    const posts: Post[] = [
        {
            id: 1,
            category: "전체",
            title: "질문 1",
            content: "본문 내용입니다. 질문에 대한 상세 내용을 여기에 적습니다.",
            uploadDate: "2025-02-11",
            views: 123,
        },
        {
            id: 2,
            category: "자유",
            title: "자유 게시글 1",
            content: "자유 게시글 내용입니다.",
            uploadDate: "2025-02-10",
            views: 456,
        },
    ];

    // 게시글 id에 따라 기존 게시글 데이터를 불러오는 로직 (수정 시)
    useEffect(() => {
        if (postId) {
            const post = posts.find((p) => p.id === Number(postId));
            if (post) {
                setCategory(post.category);
                setTitle(post.title);
                setContent(post.content);
            }
        }
    }, [postId]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const handleSubmit = () => {
        // 여기에 글 등록/수정 로직 추가 (API 연동 등)
        console.log("Category:", category);
        console.log("Title:", title);
        console.log("Content:", content);
        alert(postId ? "글이 수정되었습니다!" : "글이 등록되었습니다!");
        router.back(); // 이전 페이지로 이동
    };

    return (
        <Container>
            <Header>
                <BackButton onClick={() => router.back()}>뒤로 가기</BackButton>
                <Title>질문 및 답변</Title>
                <RegisterButton onClick={handleSubmit}>
                    {postId ? "수정" : "등록"}
                </RegisterButton>
            </Header>

            <CategorySelect value={category} onChange={handleCategoryChange}>
                <option value="">카테고리를 선택해주세요.</option>
                <option value="전체">전체</option>
                <option value="자유">자유</option>
                <option value="간병">간병</option>
            </CategorySelect>

            <TitleInput
                type="text"
                placeholder="글 제목을 입력해주세요."
                value={title}
                onChange={handleTitleChange}
            />

            <ContentTextarea
                placeholder="내용을 입력해주세요. (글자수 제한 10~1,000자)"
                value={content}
                onChange={handleContentChange}
            />

            <FileAttachButton>파일 첨부</FileAttachButton>
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

const RegisterButton = styled.button`
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;
`;

const CategorySelect = styled.select`
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
`;

const TitleInput = styled.input`
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
`;

const ContentTextarea = styled.textarea`
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    height: 200px; /* 높이 설정 */
    resize: vertical; /* 세로 크기 조절 가능 */
`;

const FileAttachButton = styled.button`
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export default CommunityQnaWrite;
