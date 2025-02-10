"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const GoogleMapPage = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadMapScript = () => {
            // Google Maps API 스크립트 동적으로 추가
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA4fQPReE8PueIfYooBb12sQXpqziYJKSc`;
            script.async = true; // 비동기로 로드
            script.defer = true; // 렌더링 지연

            // 로드 실패 시 콘솔 에러 출력
            script.onerror = () => {
                console.error("Google Maps API 로딩 실패");
            };

            // Google Maps 스크립트 로드 성공 시 호출
            script.onload = () => {
                setIsLoaded(true);
            };

            // 이미 추가된 스크립트 방지
            if (!document.head.querySelector(`script[src="${script.src}"]`)) {
                document.head.appendChild(script);
            }
        };

        // 전역 window 객체에 google이 없으면 스크립트 로드
        if (!window.google) {
            loadMapScript();
        } else {
            setIsLoaded(true); // 이미 스크립트가 로드되어 있으면 바로 적용
        }
    }, []);

    useEffect(() => {
        if (isLoaded && mapRef.current) {
            // Google Maps 초기화
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 37.6584, lng: 126.832 }, // 경기도 고양시 장항동 771-1 좌표
                zoom: 12, // 확대 수준
            });

            // 마커 추가
            new window.google.maps.Marker({
                position: { lat: 37.6584, lng: 126.832 }, // 마커 위치도 동일한 좌표로 설정
                map,
                title: "경기도 고양시 장항동 771-1",
            });
        }
    }, [isLoaded]); // isLoaded 변경 시에만 재실행

    return (
        <Container>
            <Header>
                <h1>Google Map</h1>
            </Header>
            <MapContainer ref={mapRef} />
        </Container>
    );
};

// 스타일 구성
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; /* 화면 전체 높이를 차지 */
`;

const Header = styled.header`
    padding: 16px;
    background: #0078ff;
    color: white;
    text-align: center;
`;

const MapContainer = styled.div`
    flex: 1; /* 남은 공간을 모두 사용 */
    width: 100%; /* 가로 크기를 100% */
    height: 400px; /* 명시적인 높이 값 */
`;

export default GoogleMapPage;