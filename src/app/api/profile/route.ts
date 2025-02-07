import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        name: "김철수",
        email: "chulsoo@example.com",
        phone: "010-1234-5678",
        image: "/images/profile_chulsoo.jpg",
    });
}

export async function PUT(request: Request) {
    const body = await request.json(); // 요청받은 body 데이터 파싱
    const { name, email, phone, image } = body;

    // 확인용 로그 출력
    console.log("업데이트된 프로필 데이터:", { name, email, phone, image });

    // 성공 응답
    return NextResponse.json({
        message: "프로필 업데이트 성공",
        profile: { name, email, phone, image },
    });
}