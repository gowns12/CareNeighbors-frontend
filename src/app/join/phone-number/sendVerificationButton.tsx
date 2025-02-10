'use client'

export default function SendVerificationButton() {

    const handleSendVerification = () => {
        // Logic for sending the verification code goes here
        console.log('Sending verification code...');
    };


    return <button
        onClick={handleSendVerification}
        className="bg-gray-400 hover:bg-gray-500 text-white px-2 py-1 rounded font-semibold text-xs"
    >
        인증번호 전송
    </button>
}