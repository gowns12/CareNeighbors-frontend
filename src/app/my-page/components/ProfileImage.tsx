"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ProfileData } from "../hooks/useProfileData"; // ProfileData 타입 가져오기

interface ProfileImageProps {
    profile: ProfileData; // profile 데이터를 prop으로 받음
}

const ProfileImage: React.FC<ProfileImageProps> = ({ profile }) => {
    const [image, setImage] = useState<string | null>(profile.image || null); // 초기 이미지 설정
    const [fileName, setFileName] = useState<string>("");

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            if (file.size > 2 * 1024 * 1024) {
                alert("파일 크기는 2MB를 초과할 수 없습니다.");
                return;
            }
            if (!["image/jpeg", "image/png"].includes(file.type)) {
                alert("허용된 파일 형식은 jpeg와 png뿐입니다.");
                return;
            }
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
            setFileName(file.name);
        }
    };

    const handleImageRemove = () => {
        if (image) {
            URL.revokeObjectURL(image);
            setImage(null);
            setFileName("");
        }
    };

    useEffect(() => {
        return () => {
            if (image) {
                URL.revokeObjectURL(image);
            }
        };
    }, [image]);

    return (
        <ImageContainer>
            <ImagePreview>
                {image ? (
                    <img src={image} alt="프로필 이미지" />
                ) : (
                    <Placeholder>이미지 없음</Placeholder>
                )}
            </ImagePreview>
            {fileName && <FileName>{fileName}</FileName>}
            <UploadLabel>
                사진 업로드
                <HiddenInput
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </UploadLabel>
            {image && (
                <RemoveButton onClick={handleImageRemove}>
                    이미지 제거
                </RemoveButton>
            )}
        </ImageContainer>
    );
};

export default ProfileImage;

// Styled-components
const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
`;

const ImagePreview = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Placeholder = styled.div`
    color: #aaa;
    font-size: 14px;
`;

const UploadLabel = styled.label`
    margin-top: 12px;
    padding: 8px 16px;
    background-color: #007aff;
    color: white;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

const RemoveButton = styled.button`
    margin-top: 12px;
    padding: 8px 16px;
    background-color: #ff4d4f;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

const HiddenInput = styled.input`
    display: none;
`;

const FileName = styled.p`
    margin-top: 8px;
    font-size: 12px;
    color: #555;
    text-align: center;
    word-break: break-word;
`;