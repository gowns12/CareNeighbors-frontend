// src/app/layout.tsx
import "./globals.css";
import React from "react";

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
        <body className="min-h-screen flex flex-col bg-gray-100 font-sans">
        {/* Header */}
        <header className="bg-white shadow-md py-3 px-4 sticky top-0 z-10">
            <div className="max-w-md mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">
                    Caregivers App
                </h1>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-md mx-auto w-full py-4 px-4">
            {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 py-3 px-4 text-center">
            <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Caregivers App
            </p>
        </footer>
        </body>
        </html>
    );
}