"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import useProfileData from "../my-page/hooks/useProfileData";
import FooterNav from "../my-page/components/FooterNav";

const MyPageMain = () => {
    const { profile, loading, error } = useProfileData();
    const router = useRouter();


    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>에러가 발생했습니다: {error}</div>;
    if (!profile) return <div>프로필 데이터를 불러올 수 없습니다.</div>;

    return (
        <Container>
            <HeaderWrapper>
                <Title>MY PAGE</Title>
                <SettingButton onClick={() => router.push("/my-page/settings")}>설정</SettingButton>
            </HeaderWrapper>

            <MainContent>
                <ProfileSection>
                    <ProfileImageWrapper>
                        <img src={profile.image || "/images/profile.PNG"} alt="프로필" />
                    </ProfileImageWrapper>
                    <ProfileInfo>
                        {/* 이름과 성별을 한 줄로 배치 */}
                        <div className="flex items-center">
                            <Name className="mr-1">{profile.name}</Name>
                            <Gender className="text-gray-500">({profile.gender})</Gender>
                        </div>
                        <Phone>{profile.phone}</Phone>
                        <Organization>{profile.organization}</Organization>
                        <Email>{profile.email}</Email>
                        {/* 주소 추가 */}
                        <Address>{profile.address}</Address>
                    </ProfileInfo>
                </ProfileSection>

                {/* 프로필 수정 버튼 */}
                <EditProfileButton onClick={() => router.push("/my-page/profile-edit")}>
                    프로필 수정
                </EditProfileButton>

                <Section>
                    <SectionTitle>금융</SectionTitle>
                    <ButtonRow>
                        <StyledButton onClick={() => router.push("/my-page/appAccount")}>
                            앱 통장
                        </StyledButton>
                        <StyledButton onClick={() => router.push("/my-page/remittance")}>
                            해외 송금
                        </StyledButton>
                    </ButtonRow>
                </Section>

                <Section>
                    <SectionTitle>간병일지</SectionTitle>
                    <ButtonRow>
                        <StyledButton onClick={() => router.push("/my-page/logs")}>
                            제출된 간병일지
                        </StyledButton>
                        <StyledButton onClick={() => router.push("/my-page/todolist")}>
                            To-Do 리스트
                        </StyledButton>
                    </ButtonRow>
                </Section>

                <Section>
                    <SectionTitle>커뮤니티</SectionTitle>
                    <ButtonRow>
                        <StyledButton onClick={() => router.push("/community/education")}>
                            교육
                        </StyledButton>
                        <StyledButton onClick={() => router.push("/community/qna")}>
                            질문 및 답변
                        </StyledButton>
                    </ButtonRow>
                </Section>

                <TabBar>
                    <Tab $active onClick={() => router.push("/home")}>홈</Tab>
                    <Tab onClick={() => router.push("/community")}>커뮤니티</Tab>
                    <Tab onClick={() => router.push("/care-journal")}>간병일지</Tab>
                    <Tab onClick={() => router.push("/message")}>쪽지,선물</Tab>
                    <Tab onClick={() => router.push("/my-page")}>마이</Tab>
                </TabBar>
            </MainContent>
            <FooterNav />
        </Container>
    );
};
const Container = styled.div`
    min-height: 100vh;
    background-color: #f8f9fa;
`;

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #eee;
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
`;

const SettingButton = styled.button`
    border: none;
    background: none;
    font-size: 16px;
`;

const MainContent = styled.main`
    padding: 16px;
`;

const ProfileSection = styled.div`
    background: white;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
`;

const ProfileImageWrapper = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 12px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Name = styled.span`
    font-size: 16px;
    font-weight: bold;
`;

const Gender = styled.span`
    font-size: 15px;
    font-weight: bold;
    color: #666;
`;

const Organization = styled.span`
    font-size: 14px;
    color: #666;
`;

const Phone = styled.span`
    font-size: 14px;
    color: #666;
`;

const Email = styled.span`
    font-size: 14px;
    color: #666;
`;

const Address = styled.span`
    font-size: 14px;
    color: #666;
`;

const EditProfileButton = styled.button`
    width: 100%;
    padding: 12px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 24px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #f1f1f1;
    }
`;

const Section = styled.section`
    margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
    font-size: 16px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`;

const StyledButton = styled.button`
    width: 100%;
    padding: 16px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #f3f3f3;
    }
`;

const TabBar = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 8px;
    border-top: 1px solid #eee;
`;

const Tab = styled.button<{ $active?: boolean }>`
    padding: 8px;
    border: none;
    background: ${({ $active }) => ($active ? '#f0f0f0' : 'white')};
    font-size: 12px;
    cursor: pointer;

    &:hover {
        background-color: #f7f7f7;
    }
`;

export default MyPageMain;