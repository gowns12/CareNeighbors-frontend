// src/app/page.tsx

"use client";

import React, { useState } from "react";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // 로그인 처리 로직 (예: API 호출)
        console.log("로그인 시도", { email, password });
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Welcome to Caregivers App</h2>
            <p>간병인을 위한 맞춤형 웹 애플리케이션입니다.</p>

            {/* 로그인 섹션 */}
            <div style={{ marginTop: "40px", maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
                <h3>로그인</h3>
                <div style={{ marginBottom: "16px" }}>
                    <input
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            marginBottom: "8px"
                        }}
                    />
                </div>
                <div style={{ marginBottom: "16px" }}>
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ccc"
                        }}
                    />
                </div>
                <button
                    onClick={handleLogin}
                    style={{
                        padding: "10px 20px",
                        borderRadius: "4px",
                        border: "none",
                        backgroundColor: "#007bff",
                        color: "white",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    로그인
                </button>
            </div>
        </div>
    );
}