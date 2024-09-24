import { cookies } from 'next/headers';
import { truncate } from 'fs/promises';
import { NextResponse } from 'next/server';
// const baseURL = process.env.NEXT_API_BASE_URL;
const baseURL = 'https://1597-2405-201-a002-9f6-69cc-ab65-e236-fb73.ngrok-free.app';

export async function POST(res: NextResponse) {
    try {
        const data = await res.json();

        const cookie = cookies();

        const response = await fetch(`${baseURL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data,
        });

        const responseData = await response.json();

        const resToken: string = responseData.token
        console.log('resToken: ', resToken)
        if ('error' in responseData) {
            return NextResponse.json({ token: null, tokenStatus: false, errorText: responseData.error });
        }

        if (resToken !== '') {
            cookie.set('token', responseData.token, { secure: true, sameSite: 'strict' });
            return NextResponse.json({ token: resToken, tokenStatus: true, errorText: '' });
        }

        return NextResponse.json({ token: null, tokenStatus: false, errorText: 'Unable to fetch' });

    } catch (error) {
        console.error('Error while login:', error);
        return NextResponse.json({ token: null, tokenStatus: false, errorText: 'Unable to fetch' });
    }
}