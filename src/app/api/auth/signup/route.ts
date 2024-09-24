"use server";

import { NextResponse } from 'next/server';

const baseURL = 'https://c15b-2405-201-a002-9f6-202f-62cd-893a-cf53.ngrok-free.app';
// const baseURL = process.env.NEXT_API_BASE_URL;
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const cookie = cookies();

        const response = await fetch(`${baseURL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if ('error' in responseData) {
            return NextResponse.json({ token: null, tokenStatus: false, errorText: responseData.error });
        }

        const resToken: string = responseData.token
        const resStatus: boolean = responseData.tokenStatus

        console.log('resToken: ', resToken)

        if (resToken && resStatus) {
            cookie.set('token', responseData.token, { secure: true, sameSite: 'strict' });
            return NextResponse.json({ token: resToken, tokenStatus: resStatus, errorText: '' });
        }

        return NextResponse.json({ token: null, tokenStatus: false, errorText: 'Unable to fetch' });

    } catch (error) {
        console.error('Error while login:', error);
        return new NextResponse("Unable to fetch", { status: 400 });
    }
}