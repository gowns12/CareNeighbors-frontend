// src/app/page.tsx
'use client'; // 클라이언트 측에서 라우팅을 처리하기 위해 선언

import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter(); // 라우터 사용을 위한 훅

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Welcome to Caregivers App</h2>
            <p>간병인을 위한 맞춤형 웹 애플리케이션입니다.</p>

            {/* 이동 버튼 추가 */}
            <div style={{ marginTop: "20px" }}>
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                    onClick={() => router.push("/login/choice-language")}
                >
                     시작하기
                </button>
            </div>
        </div>
    );
}