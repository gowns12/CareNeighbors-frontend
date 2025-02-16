"use client";

import { useRouter } from "next/navigation";

interface HeaderProps {
    title: string;
    hasBack?: boolean;
}

export default function Header({ title, hasBack = false }: HeaderProps) {
    const router = useRouter();
    return (
        <header className="border-b w-full flex justify-between items-center py-4 px-5">
            <div className="w-6 h-6">
                {hasBack && (
                    <button
                        onClick={() => router.back()}
                        className="bg-white cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                )}
            </div>
            <div className="font-bold">{title}</div>
            <div className="w-6 h-6"></div>
        </header>
    );
}