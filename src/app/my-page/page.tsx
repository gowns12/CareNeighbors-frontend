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
                    <h1 className="text-2xl font-bold">마이페이지</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-6 px-4">
                {/* 섹션 1: 사용자 정보 */}
                <section className="bg-white p-6 rounded-lg shadow mb-6">
                    <h2 className="text-xl font-semibold mb-4">사용자 정보</h2>
                    <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div>
                            <p className="text-lg font-medium">홍길동</p>
                            <p className="text-gray-600">이메일: example@example.com</p>
                            <p className="text-gray-600">회원 가입일: 2023-01-01</p>
                        </div>
                    </div>
                </section>

                {/* 섹션 2: 주요 메뉴 */}
                <section className="bg-white p-6 rounded-lg shadow mb-6">
                    <h2 className="text-xl font-semibold mb-4">주요 메뉴</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <FeatureCard title="내 주문" description="주문 내역을 확인하세요." />
                        <FeatureCard
                            title="쿠폰 확인"
                            description="사용 가능한 쿠폰을 확인하세요."
                        />
                        <FeatureCard
                            title="배송지 관리"
                            description="배송 정보를 업데이트하세요."
                        />
                        <FeatureCard title="개인 정보" description="회원 정보를 수정하세요." />
                        <FeatureCard
                            title="문의 내역"
                            description="고객 지원 요청 내역을 확인하세요."
                        />
                    </div>
                </section>

                {/* 섹션 3: 공지사항 */}
                <section className="bg-white p-6 rounded-lg shadow mb-6">
                    <h2 className="text-xl font-semibold mb-4">공지사항</h2>
                    <ul className="space-y-2">
                        <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                            <a href="#" className="flex justify-between items-center">
                                <span>공지사항 제목 1</span>
                                <time className="text-gray-500 text-sm">2023-10-01</time>
                            </a>
                        </li>
                        <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                            <a href="#" className="flex justify-between items-center">
                                <span>공지사항 제목 2</span>
                                <time className="text-gray-500 text-sm">2023-09-28</time>
                            </a>
                        </li>
                        <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                            <a href="#" className="flex justify-between items-center">
                                <span>공지사항 제목 3</span>
                                <time className="text-gray-500 text-sm">2023-09-15</time>
                            </a>
                        </li>
                    </ul>
                </section>

                {/* 섹션 4: 기타 정보 */}
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">기타 정보</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FeatureCard
                            title="포인트 관리"
                            description="포인트 내역을 확인합니다."
                        />
                        <FeatureCard
                            title="회원 등급"
                            description="현재 등급과 혜택을 확인하세요."
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}