"use client";

import React from "react";
import styled from "styled-components";
import useProfileData from "../../my-page/hooks/useProfileData";
import Header from "../../my-page/components/Header";
import { useRouter } from "next/navigation";

const ProfileEditPage = () => {
    const { profile, loading, error } = useProfileData();
    const router = useRouter();

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>에러가 발생했습니다: {error}</div>;
    }

    if (!profile) {
        return <div>프로필 데이터를 불러올 수 없습니다.</div>;
    }

    const handleEdit = (field: string) => {
        console.log(`${field} 수정 클릭됨`);
        alert(`${field} 수정 페이지로 이동합니다.`);
    };

    const handleImageChange = () => {
        console.log("이미지 변경 클릭됨");
        alert("프로필 사진을 변경합니다.");
    };

    return (
        <Container>
            <Header title="프로필 수정" />

            <MainContent>
                <ProfileSection>
                    {/* 프로필 이미지 */}
                    <ProfileImageWrapper>
                        <img
                            src={profile.image || "/images/default-profile.jpg"}
                            alt="프로필"
                        />
                        <ChangeImageButton onClick={handleImageChange}>
                            이미지 변경
                        </ChangeImageButton>
                    </ProfileImageWrapper>

                    {/* 프로필 정보 */}
                    <ProfileInfo>
                        <Field>
                            <Label>이름</Label>
                            <Value>{profile.name}</Value>
                        </Field>
                        <Field>
                            <Label>전화번호</Label>
                            <Value>{profile.phone}</Value>
                        </Field>
                        <Field>
                            <Label>소속</Label>
                            <Value>{profile.organization}</Value>
                        </Field>
                        <Field>
                            <Label>성별</Label>
                            <Value>{profile.gender}</Value>
                        </Field>
                        {/* 수정 버튼이 있는 필드 */}
                        <Field>
                            <Label>위치</Label>
                            <Value>{profile.location}</Value>
                            <EditButton onClick={() => handleEdit("location")}>
                                수정
                            </EditButton>
                        </Field>
                        <Field>
                            <Label>이메일</Label>
                            <Value>{profile.email}</Value>
                            <EditButton onClick={() => handleEdit("email")}>
                                수정
                            </EditButton>
                        </Field>
                        <Field>
                            <Label>주소</Label>
                            <Value>{profile.address}</Value>
                            <EditButton onClick={() => handleEdit("address")}>
                                수정
                            </EditButton>
                        </Field>
                    </ProfileInfo>
                </ProfileSection>
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

const ProfileSection = styled.div`
    background: white;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ProfileImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;

    img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 8px;
    }
`;

const ChangeImageButton = styled.button`
    background-color: #ffd3e0; /* 파스텔 핑크 */
    color: black;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #ffc1d4; /* 조금 더 진한 파스텔 핑크 */
        transform: scale(1.05);
    }
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

const Field = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Label = styled.span`
    flex: 0 0 120px; /* 고정 너비 */
    font-size: 18px; /* 글씨 크기를 10% 줄임 */
    color: #555;
    font-weight: bold;
`;

const Value = styled.span`
    flex: 1; /* 값이 남은 공간을 차지 */
    font-size: 18px;
    color: #333;
    font-weight: bold;
    text-align: left;
`;

const EditButton = styled.button`
    flex: 0 0 70px; /* 버튼 고정 너비 */
    padding: 6px 10px;
    background-color: #cff1ff; /* 파스텔 블루 */
    color: black;
    font-size: 14px; /* 글씨 크기를 10% 줄임 */
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;

    &:hover {
        background-color: #b3e7f4; /* 조금 더 진한 파스텔 블루 */
        transform: translateY(-2px);
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    padding: 16px;
`;

const CancelButton = styled.button`
    padding: 14px 28px;
    background-color: #ffe7c7; /* 파스텔 오렌지 */
    color: black;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;

    &:hover {
        background-color: #ffd4a3; /* 조금 더 진한 파스텔 오렌지 */
        transform: translateY(-2px);
    }
`;

const SaveButton = styled.button`
    padding: 14px 28px;
    background-color: #d5f5c3; /* 파스텔 그린 */
    color: black;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;

    &:hover {
        background-color: #bce8a3; /* 조금 더 진한 파스텔 그린 */
        transform: translateY(-2px);
    }
`;