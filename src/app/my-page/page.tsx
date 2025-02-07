import React from "react";

const FeatureCard = ({
                         title,
                         description,
                     }: {
    title: string;
    description: string;
}) => (
    <div className="bg-gray-200 p-4 rounded-lg text-center shadow hover:shadow-lg transition">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

export default function MyPageScreen() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow-md py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">MY PAGE</h1>
                    <button className="px-4 py-2 text-sm">설정</button>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-6 px-4">
                {/* 프로필 섹션 */}
                <section className="bg-white p-6 rounded-lg shadow mb-6">
                    <div className="flex items-start justify-between">
                        <div className="w-16 h-16 bg-gray-300 rounded-lg flex-shrink-0 text-center">
                            프로필 사진
                        </div>
                        <div className="flex-grow px-4">
                            <p className="font-medium">김이름 (남)</p>
                            <p className="text-gray-600">010-1234-5678</p>
                            <p className="text-gray-600">dlapdlf@dlapdlf.com</p>
                            <p className="text-gray-600">서울 마포구 (A 직업소개소)</p>
                        </div>
                    </div>
                    <button className="w-full mt-4 p-2 border rounded-lg">프로필 수정</button>
                </section>

                {/* 금융 섹션 */}
                <section className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">금융</h2>
                        <button className="text-sm text-blue-600">선불카드 신청</button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-white p-4 rounded-lg shadow text-center">
                            앱 통장
                        </button>
                        <button className="bg-white p-4 rounded-lg shadow text-center">
                            해외 송금
                        </button>
                    </div>
                </section>

                {/* 간병일지 섹션 */}
                <section className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">간병일지</h2>
                        <button className="text-sm text-blue-600">환자 현황</button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-white p-4 rounded-lg shadow text-center">
                            제출된 간병일지
                        </button>
                        <button className="bg-white p-4 rounded-lg shadow text-center">
                            To-Do 리스트
                        </button>
                    </div>
                </section>

                {/* 커뮤니티 섹션 */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">커뮤니티</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-white p-4 rounded-lg shadow text-center">
                            교육
                        </button>
                        <button className="bg-white p-4 rounded-lg shadow text-center">
                            질문 및 답변
                        </button>
                    </div>
                </section>

                {/* Bottom Navigation */}
                <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
                    <div className="grid grid-cols-5 gap-1 p-3">
                        <button className="flex flex-col items-center justify-center h-16 text-sm">
                            홈
                        </button>
                        <button className="flex flex-col items-center justify-center h-16 text-sm">
                            커뮤니티
                        </button>
                        <button className="flex flex-col items-center justify-center h-16 text-sm">
                            간병일지
                        </button>
                        <button className="flex flex-col items-center justify-center h-16 text-sm">
                            폴짓
                        </button>
                        <button className="flex flex-col items-center justify-center h-16 text-sm">
                            마이
                        </button>
                    </div>
                </nav>
            </main>
        </div>
    );
}
