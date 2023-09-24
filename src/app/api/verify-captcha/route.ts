import { NextRequest, NextResponse } from "next/server";



export const POST = async (req: NextRequest) => {

    try {

        const { token } = await req.json();

        const reCAPTCHA_SECRET_KEY = process.env.NEXT_APP_reCAPTCHA_SECRET_KEY;

        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${reCAPTCHA_SECRET_KEY}&response=${token}`, {
            method: 'POST',
            // headers: { "Content-Type": "application/x-www-form-urlencoded" },
            // body: `secret=${reCAPTCHA_SECRET_KEY}&response=${token}`,
        });

        const data = await response.json();

        if (data.success) {

            return NextResponse.json({
                message: "Captcha verification success",
            }, { status: 200 });

        }

        return NextResponse.json({
            message: "Captcha verification failed",
            error: data['error-codes']
        }, { status: 400 });

    } catch (error) {
        console.log(error);

    }

}