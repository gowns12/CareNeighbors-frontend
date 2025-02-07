import { useState, useEffect } from "react";
import { getProfile } from "../services/profileService";

export interface ProfileData {
    name: string;
    email: string;
    phone: string;
    image?: string; // 선택적 이미지 필드
}

const useProfileData = () => {
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true; // 컴포넌트가 마운트된 상태인지 확인

        const fetchProfile = async () => {
            setLoading(true); // 로딩 상태 초기화
            setError(null); // 에러 상태 초기화
            try {
                const data: ProfileData = await getProfile();
                if (isMounted) {
                    setProfile(data);
                }
            } catch (err: unknown) {
                console.error("프로필 데이터 가져오기 실패:", err);
                if (isMounted) {
                    // 에러 메시지가 명확하다면 세부 정보 제공
                    const errorMessage =
                        err instanceof Error ? err.message : "알 수 없는 에러 발생";
                    setError(`데이터를 가져오는 데 실패했습니다: ${errorMessage}`);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchProfile();

        // 컴포넌트 언마운트 시 상태 업데이트 막기
        return () => {
            isMounted = false;
        };
    }, []);

    // 상태를 초기화하기 위한 reset 함수 제공
    const resetState = () => {
        setProfile(null);
        setLoading(true);
        setError(null);
    };

    return { profile, loading, error, resetState };
};

export default useProfileData;