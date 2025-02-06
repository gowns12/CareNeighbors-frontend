"use client";

import { useRouter } from "next/navigation";

interface HeaderProps {
    title: string;
    hasBack?: boolean;
}

export default function Header({ title, hasBack = false }: HeaderProps) {
    const router = useRouter();
    return (
        <header className="h-16 border-b w-full justify-between flex p-5">
            <div className="aspect-square size-6 ">
                {hasBack && (
                    <button
                        onClick={() => router.back()}
                        className="bg-white cursor-pointer"
                    >
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5 8.25 12l7.5-7.5"
                                />
                            </svg>
                        </div>
                    </button>
                )}
            </div>
            <div className="font-bold">{title}</div>
            <div className="aspect-square size-6"></div>
        </header>
    );
}
