"use client";

import React from "react";
import styled from "styled-components";
import useProfileData from "../../my-page/hooks/useProfileData";
import ProfileImage from "../../my-page/components/ProfileImage";
import ProfileForm from "../../my-page/components/ProfileForm";
import Header from "../../my-page/components/Header";
import { useRouter } from "next/navigation";

const ProfileEditPage = () => {
    const { profile, loading, error } = useProfileData();
    const router = useRouter(); // 페이지 이동을 위한 라우터

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>에러가 발생했습니다: {error}</div>;
    }

    if (!profile) {
        return <div>프로필 데이터를 불러올 수 없습니다.</div>;
    }

    return (
        <Container>
            {/* 공통 헤더 */}
            <Header title="프로필 수정" />

            {/* 프로필 및 폼 */}
            <MainContent>
                <ProfileImage profile={profile} />
                <ProfileForm profile={profile} />
            </MainContent>

            {/* 하단 버튼 */}
            <ButtonContainer>
                <CancelButton onClick={() => router.push("/my-page")}>
                    취소
                </CancelButton>
                <SaveButton onClick={() => console.log("프로필 저장")}>
                    저장
                </SaveButton>
            </ButtonContainer>
        </Container>
    );
};

export default ProfileEditPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const MainContent = styled.main`
    flex: 1;
    padding: 16px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`;

const CancelButton = styled.button`
    padding: 12px 24px;
    background-color: #ff4d4f;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    border: none;

    &:hover {
        background-color: #cc000a;
    }
`;

const SaveButton = styled.button`
    padding: 12px 24px;
    background-color: #28a745;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    border: none;

    &:hover {
        background-color: #218838;
    }
`;