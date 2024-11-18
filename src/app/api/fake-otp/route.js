import {NextResponse} from "next/server";

export async function POST(req) {

        // Parse the request body to extract email, password, and confirmPassword
        const otp = Math.floor(10000 + Math.random() * 90000); // Generate 5-digit OTP
        const { user_name, last_name, phone_number } = await req.json();
        // Validation for missing fields
        if (!user_name || !last_name || !phone_number) {
            return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
        }

        // Validate password strength (optional but recommended)
        if (phone_number.length < 11) {
            return NextResponse.json({ message: 'Phone Number should be 11 characters long' }, { status: 400 });
        }

        // Simulate successful response (you can add additional logic as needed)
        return NextResponse.json({
            message: 'Otp Has Sent',
            otp : `${otp}`
        }, { status: 200 });

        // Catch and handle any unexpected errors
        return NextResponse.json({ message: 'Invalid request format or server error' }, { status: 500 });
}
