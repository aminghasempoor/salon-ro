import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // Parse the request body to extract email, password, and confirmPassword
        const { first_name, last_name, national_id, birthday, gender, province, city } = await req.json();
        // Validation for missing fields
        if (!first_name || !last_name || !national_id || !birthday || !gender || !province || !city) {
            return NextResponse.json({ message: "Missing fields" }, { status: 400 });
        }

        // Validate national_id strength (optional but recommended)
        if (national_id.length < 10) {
            return NextResponse.json(
                { message: "National Id should be 10 characters long ." },
                { status: 400 }
            );
        }

        // Simulate successful response (you can add additional logic as needed)
        return NextResponse.json(
            {
                message: "registered successfully",
                token: "93|8cq5b0th9mLE5s5PRplIGTXdOyDiLPVSMd2JV7uX",
            },
            { status: 200 }
        );
    } catch (error) {
        // Catch and handle any unexpected errors
        return NextResponse.json({ message: "Invalid request format or server error" }, { status: 500 });
    }
}
