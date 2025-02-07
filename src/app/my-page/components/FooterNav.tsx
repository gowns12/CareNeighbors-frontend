"use client";

import { usePathname, useRouter } from "next/navigation";

const FooterNav = () => {
    const router = useRouter();
    const pathname = usePathname(); // 현재 경로 가져오기

    // routes 정보를 컴포넌트 내부에서 정의
    const routes = [
        { label: "홈", path: "/", icon: "🏠" },
        { label: "커뮤니티", path: "/community", icon: "💬" },
        { label: "간병일지", path: "/care-log", icon: "📋" },
        { label: "정책", path: "/policy", icon: "📜" },
        { label: "마이페이지", path: "/my-page", icon: "🙋‍♂️" },
    ];

    const getActiveClass = (path: string) =>
        pathname === path ? "text-blue-500 font-bold" : "text-gray-500";

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md">
            <div className="flex justify-around items-center p-2">
                {routes.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => router.push(item.path)}
                        className={`flex flex-col items-center justify-center text-sm ${getActiveClass(
                            item.path
                        )}`}
                        tabIndex={0}
                        aria-label={`${item.label}로 이동`}
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default FooterNav;