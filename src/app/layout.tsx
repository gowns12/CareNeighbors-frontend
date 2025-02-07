// src/app/layout.tsx
import "@/app/styles/globals.css";
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
        <html lang="ko">
        <body>
        <header style={{ padding: "20px", background: "#f4f4f4" }}>
            <h1>Caregivers App</h1>
        </header>
        <main>{children}</main>
        <footer style={{ padding: "20px", background: "#f4f4f4", marginTop: "20px" }}>
            <p>© 2023 Caregivers App</p>
        </footer>
        </body>
        </html>
    );
}