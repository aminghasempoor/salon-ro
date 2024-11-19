import { NextResponse } from "next/server";

export async function POST(req) {
    // Parse the request body to extract email, password
    const { phone_number, password } = await req.json();
    // Validation for missing fields
    if (!phone_number || !password) {
        return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }
    // Validate password strength (optional but recommended)
    if (password.length < 6) {
        return NextResponse.json({ message: "Password should be at least 6 characters long" }, { status: 400 });
    }
    // Simulate successful response (you can add additional logic as needed)
    return NextResponse.json(
        {
            message: "Registration successful",
            token: "93|8cq5b0th9mLE5s5PRplIGTXdOyDiLPVSMd2JV7uX",
        },
        { status: 200 }
    );
}
