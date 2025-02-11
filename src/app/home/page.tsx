"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import FooterNav from "../my-page/components/FooterNav";

const HomeMain = () => {
    const router = useRouter();

    // 임시 데이터 (추후 API 연동 필요)
    const jobPostings = [
        {
            id: 1,
            hospitalName: "[강남] 서울병원",
            recruitmentTitle: "구인 글 제목 1",
            uploadDate: "2024-02-09",
            views: 123,
        },
        {
            id: 2,
            hospitalName: "[서초] 강남병원",
            recruitmentTitle: "구인 글 제목 2",
            uploadDate: "2024-02-08",
            views: 456,
        },
        {
            id: 3,
            hospitalName: "[송파] 잠실병원",
            recruitmentTitle: "구인 글 제목 3",
            uploadDate: "2024-02-07",
            views: 789,
        },
        {
            id: 4,
            hospitalName: "[영등포] 여의도병원",
            recruitmentTitle: "구인 글 제목 4",
            uploadDate: "2024-02-06",
            views: 1011,
        },
    ];

    return (
        <Container>
            <HeaderWrapper>
                <Title>케어네이버스</Title>
                <NotificationButton>알림</NotificationButton>
            </HeaderWrapper>

            <Banner><BannerImage src="/images/banner.PNG" alt="배너 이미지" /></Banner>

            <QuickMenu>
                <QuickMenuItem onClick={() => router.push("/my-page/appAccount")}>앱 통장</QuickMenuItem>
                <QuickMenuItem>해외 송금</QuickMenuItem>
                <QuickMenuItem>환자 현황</QuickMenuItem>
                <QuickMenuItem onClick={() => router.push("/google-map")}>구글 맵</QuickMenuItem>
            </QuickMenu>

            <JobSection>
                <SectionTitle>
                    직업소개소 구인
                    <MoreButton>더보기</MoreButton>
                </SectionTitle>
                {jobPostings.map((post) => (
                    <JobPost key={post.id}>
                        <HospitalLogo>병원 로고?</HospitalLogo>
                        <JobInfo>
                            <HospitalName>{post.hospitalName}</HospitalName>
                            <RecruitmentTitle>{post.recruitmentTitle}</RecruitmentTitle>
                            <Details>
                                {post.uploadDate} | 조회수: {post.views}
                            </Details>
                        </JobInfo>
                        <ApplyButton>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 9L12 16L19 9" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ApplyButton>
                    </JobPost>
                ))}
            </JobSection>

            <TabBar>
                <Tab $active onClick={() => router.push("/home")}>홈</Tab>
                <Tab onClick={() => router.push("/community")}>커뮤니티</Tab>
                <Tab onClick={() => router.push("/care-journal")}>간병일지</Tab>
                <Tab onClick={() => router.push("/message")}>쪽지,선물</Tab>
                <Tab onClick={() => router.push("/my-page")}>마이</Tab>
            </TabBar>

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
    display: flex;
    font-size: 18px;
    font-weight: bold;
`;

const NotificationButton = styled.button`
    border: none;
    background: none;
    font-size: 16px;
`;

const Banner = styled.div`
    height: 150px;
    margin: 16px;
    border-radius: 8px;
    overflow: hidden; /* 이미지가 div를 넘어가지 않도록 */
`;

const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 div에 꽉 차도록 */
`;

const QuickMenu = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 16px;
`;

const QuickMenuItem = styled.button`
    padding: 12px 16px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #f3f3f3;
    }
`;

const JobSection = styled.section`
    margin-bottom: 24px;
    padding: 0 16px;
`;

const SectionTitle = styled.h2`
    font-size: 16px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MoreButton = styled.button`
    border: none;
    background: none;
    font-size: 14px;
    cursor: pointer;
`;

const JobPost = styled.div`
    display: flex;
    padding: 16px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 8px;
`;

const HospitalLogo = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 8px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const JobInfo = styled.div`
    flex: 1;
    margin-left: 12px;
`;

const HospitalName = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
`;

const RecruitmentTitle = styled.div`
    font-size: 16px;
    margin-bottom: 4px;
`;

const Details = styled.div`
    font-size: 12px;
    color: #666;
`;

const ApplyButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
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
    background: ${({ $active }) => ($active ? "#f0f0f0" : "white")};
    font-size: 12px;
    cursor: pointer;

    &:hover {
        background-color: #f7f7f7;
    }
`;

export default HomeMain;