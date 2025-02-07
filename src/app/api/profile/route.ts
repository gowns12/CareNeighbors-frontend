import { NextResponse } from "next/server";

// GET 요청 처리: 프로필 정보를 반환
export async function GET() {
    return NextResponse.json({
        name: "홍길동", // 새로운 이름으로 업데이트
        gender: "남", // 성별 유지
        phone: "010-9876-5432", // 수정된 전화번호
        email: "example@example.com", // 수정된 이메일
        location: "서울 강남구", // 변경된 주소
        organization: "B 직업소개소" // 변경된 조직명
    });
}

// PUT 요청 처리: 클라이언트에서 보낸 데이터로 정보 업데이트
export async function PUT(request: Request) {
    const body = await request.json(); // 요청 body를 JSON으로 파싱
    const { name, email, phone, image, location, organization } = body; // 요청받은 추가 필드 parsing

    // 확인용 로그 출력
    console.log("업데이트된 프로필 데이터:", { name, email, phone, image, location, organization });

    // 성공 응답
    return NextResponse.json({
        message: "프로필 업데이트 성공",
        profile: { name, email, phone, image, location, organization },
    });
}