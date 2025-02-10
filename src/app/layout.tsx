// src/app/layout.tsx
import "./globals.css";

export const metadata = {
    title: "Caregivers App",
    description: "케어네이버스를 위한 웹 애플리케이션",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko" className="h-full">
        <body className="min-h-screen flex flex-col bg-gray-50 h-full">
        {/* Header */}
        <header className="bg-white shadow-md py-3 px-4 sticky top-0 z-10">
            <div className="max-w-md mx-auto flex items-center justify-between">
                {/* 로고 영역 */}
                <div className="flex-shrink-0">
                    <img
                        src="/images/CareNeighbors.PNG"
                        alt="CareNeighbors"
                        className="h-12 w-24" // 높이를 8로 조정하고 너비는 자동으로 비율 유지
                    />
                </div>

                {/* 중앙으로 이동한 제목 영역 */}
                <h1 className="text-xl font-bold text-gray-800 mx-auto">
                    Caregivers App
                </h1>

                {/* 오른쪽 빈 공간 (선택사항: 필요 시 추가 버튼이나 동작을 넣을 수 있음) */}
                <div className="flex-shrink-0"></div>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-md mx-auto w-full py-4 px-4">
            {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 py-3 px-4 text-center mt-auto">
            <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Caregivers App
            </p>
        </footer>
        </body>
        </html>
    );
}