import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || ""; // 환경 변수에서 API 기본 URL 정의

export const getProfile = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/profile`); // 정확한 URL로 요청
        return response.data;
    } catch (error) {
        console.error("프로필 가져오기 실패:", error);
        throw error; // 문제를 상위로 전달
    }
};

export const updateProfile = async (profileData: any) => {
    try {
        const response = await axios.put(`${BASE_URL}/api/profile`, profileData);
        return response.data;
    } catch (error) {
        console.error("프로필 업데이트 실패:", error);
        throw error;
    }
};