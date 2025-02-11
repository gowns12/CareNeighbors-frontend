// src/app/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                {/* Google Maps API Script */}
                <script
                    async
                    defer
                    src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                ></script>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}