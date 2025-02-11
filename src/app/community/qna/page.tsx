"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const CommunityQna = () => {
    const router = useRouter();
    const [category, setCategory] = useState("전체"); // 초기 카테고리 설정

    // 임시 게시글 데이터 (추후 API 연동 필요)
    const posts = [
        {id: 1, category: "전체", title: "질문 1", uploadDate: "2025-02-11", views: 123},
        {id: 2, category: "자유", title: "자유 게시글 1", uploadDate: "2025-02-10", views: 456},
        {id: 3, category: "간병", title: "간병 관련 질문", uploadDate: "2025-02-09", views: 789},
        {id: 4, category: "전체", title: "질문 2", uploadDate: "2025-02-08", views: 1011},
        {id: 5, category: "자유", title: "자유 게시글 2", uploadDate: "2025-02-07", views: 1234},
        {id: 6, category: "간병", title: "간병 팁 공유", uploadDate: "2025-02-06", views: 1456},
        {id: 7, category: "전체", title: "질문 3", uploadDate: "2025-02-05", views: 1678},
        {id: 8, category: "자유", title: "자유 게시글 3", uploadDate: "2025-02-04", views: 1890},
        {id: 9, category: "간병", title: "간병 후기", uploadDate: "2025-02-03", views: 2112},
        {id: 10, category: "전체", title: "질문 4", uploadDate: "2025-02-02", views: 2334},
    ];

    // 카테고리 변경 핸들러
    const handleCategoryChange = (newCategory: string) => {
        setCategory(newCategory);
    };

    // 카테고리에 따라 게시글 필터링
    const filteredPosts = category === "전체" ? posts : posts.filter((post) => post.category === category);

    return (
        <Container>
            <Header>
                <BackButton onClick={() => router.back()}>뒤로 가기</BackButton>
                <Title>질문 및 답변</Title>
                <NotificationButton>알림</NotificationButton>
            </Header>

            <TabButtons>
                <TabButton $active={true}>전체</TabButton>
                <TabButton>내가 쓴 글</TabButton>
            </TabButtons>

            <CategoryButtons>
                <CategoryButton
                    $active={category === "전체"}
                    onClick={() => handleCategoryChange("전체")}
                >
                    전체
                </CategoryButton>
                <CategoryButton
                    $active={category === "자유"}
                    onClick={() => handleCategoryChange("자유")}
                >
                    자유
                </CategoryButton>
                <CategoryButton
                    $active={category === "간병"}
                    onClick={() => handleCategoryChange("간병")}
                >
                    간병
                </CategoryButton>
            </CategoryButtons>

            <PostList>
                {filteredPosts.map((post) => (
                    <Link href={`/community/qna/${post.id}`} key={post.id}>
                        <Post>
                            <PostCategory>{`[${post.category}]`}</PostCategory>
                            <PostTitle>{post.title}</PostTitle>
                            <PostDetails>
                                {post.uploadDate} | 조회수: {post.views}
                            </PostDetails>
                        </Post>
                    </Link>
                ))}
            </PostList>

            <WriteButton onClick={() => router.push("/community/qna/write")}>글쓰기</WriteButton>
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

const TabButtons = styled.div`
    display: flex;
    margin-bottom: 16px;
`;

const TabButton = styled.button<{ $active?: boolean }>`
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: ${({ $active }) => ($active ? "#f0f0f0" : "white")};
    font-size: 14px;
    cursor: pointer;
    margin-right: 8px;

    &:hover {
        background-color: #f3f3f3;
    }
`;

const CategoryButtons = styled.div`
    display: flex;
    margin-bottom: 16px;
`;

const CategoryButton = styled.button<{ $active?: boolean }>`
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 20px;
    background-color: ${({ $active }) => ($active ? "#f0f0f0" : "white")};
    font-size: 14px;
    cursor: pointer;
    margin-right: 8px;

    &:hover {
        background-color: #f3f3f3;
    }
`;

const PostList = styled.ul`
    list-style: none;
    padding: 0;
`;

const Post = styled.li`
    padding: 16px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 8px;
`;

const PostCategory = styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 4px;
`;

const PostTitle = styled.h2`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 4px;
`;

const PostDetails = styled.div`
    font-size: 12px;
    color: #888;
`;

const WriteButton = styled.button`
    position: fixed;
    bottom: 70px;
    right: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #0056b3;
    }
`;

export default CommunityQna;

