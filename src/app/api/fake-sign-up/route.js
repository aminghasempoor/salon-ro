import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        // Parse the request body to extract email, password, and confirmPassword
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
            message: 'Registration successful',
            token: "93|8cq5b0th9mLE5s5PRplIGTXdOyDiLPVSMd2JV7uX"
        }, { status: 200 });

    } catch (error) {
        // Catch and handle any unexpected errors
        return NextResponse.json({ message: 'Invalid request format or server error' }, { status: 500 });
    }
}
