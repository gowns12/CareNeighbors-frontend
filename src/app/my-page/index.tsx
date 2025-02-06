// pages/mypage/index.tsx
import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

interface ProfileData {
    name: string;
    gender: string;
    phone: string;
    email: string;
    location: string;
    organization: string;
}

const MyPage: NextPage = () => {
    const profileData: ProfileData = {
        name: "김이름",
        gender: "남",
        phone: "010-1234-5678",
        email: "dlapdlf@dlapdlf.com",
        location: "서울 마포구",
        organization: "A 직업소개소"
    };

    return (
        <Container>
            <Header>
                <Title>마이</Title>
                <SettingButton>설정</SettingButton>
            </Header>

            <ProfileSection>
                <ProfileImage />
                <ProfileInfo>
                    <ProfileName>{profileData.name} ({profileData.gender})</ProfileName>
                    <ProfileDetail>전화번호: {profileData.phone}</ProfileDetail>
                    <ProfileDetail>이메일: {profileData.email}</ProfileDetail>
                    <ProfileDetail>거주지 (소속): {profileData.location} ({profileData.organization})</ProfileDetail>
                </ProfileInfo>
                <EditButton>프로필 수정</EditButton>
            </ProfileSection>

            <MenuSection>
                <MenuGroup>
                    <MenuTitle>금융</MenuTitle>
                    <MenuItem>선불카드 신청</MenuItem>
                    <MenuItem>앱 통장</MenuItem>
                    <MenuItem>해외 송금</MenuItem>
                </MenuGroup>

                <MenuGroup>
                    <MenuTitle>간병일지</MenuTitle>
                    <MenuItem>환자 현황</MenuItem>
                    <MenuItem>제출된 간병일지</MenuItem>
                    <MenuItem>투두리스트</MenuItem>
                </MenuGroup>

                <MenuGroup>
                    <MenuTitle>커뮤니티</MenuTitle>
                    <MenuItem>교육</MenuItem>
                    <MenuItem>질문 및 답변</MenuItem>
                </MenuGroup>
            </MenuSection>
        </Container>
    );
};

const Container = styled.div`
  padding: 20px;
  background-color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const SettingButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  background-color: #f5f5f5;
  border: none;
`;

const ProfileSection = styled.div`
  margin-bottom: 32px;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-bottom: 16px;
`;

const ProfileInfo = styled.div`
  margin-bottom: 16px;
`;

const ProfileName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ProfileDetail = styled.p`
  color: #666;
  margin-bottom: 4px;
`;

const EditButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007AFF;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
`;

const MenuSection = styled.div`
  margin-top: 24px;
`;

const MenuGroup = styled.div`
  margin-bottom: 24px;
`;

const MenuTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const MenuItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  color: #333;
`;

export default MyPage;
