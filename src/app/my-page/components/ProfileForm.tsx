"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { updateProfile } from "../services/profileService"; // 서비스 함수 임포트
import { useRouter } from "next/navigation";
import { ProfileData } from "../hooks/useProfileData"; // ProfileData 타입 가져오기

interface ProfileFormProps {
    profile: ProfileData; // profile 데이터를 prop으로 받음
}

const ProfileForm: React.FC<ProfileFormProps> = ({ profile }) => {
    const [formData, setFormData] = useState(profile); // 폼 데이터를 로컬 상태로 관리
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        try {
            await updateProfile(formData); // 현재 폼 데이터를 업데이트
            console.log("저장 성공");
            router.push("/my-page"); // 성공 시 페이지 이동
        } catch (error) {
            console.error("저장 실패", error);
        }
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>
                이름:
                <input name="name" type="text" value={formData.name} onChange={handleInputChange} />
            </label>
            <label>
                이메일:
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <label>
                전화번호:
                <input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
            </label>
            <ButtonContainer>
                <CancelButton onClick={() => router.back()}>취소</CancelButton>
                <SaveButton onClick={handleSave}>저장</SaveButton>
            </ButtonContainer>
        </form>
    );
};

export default ProfileForm;

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 16px;
`;

const SaveButton = styled.button`
    width: 50%;
    padding: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
`;

const CancelButton = styled.button`
    width: 50%;
    padding: 16px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
`;