import { NextApiRequest, NextApiResponse } from 'next';
// const baseURL = process.env.NEXT_API_BASE_URL;
const baseURL = 'https://1597-2405-201-a002-9f6-69cc-ab65-e236-fb73.ngrok-free.app';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('req: ', req)
    try {

        const { email, password } = req.body;
        console.log('email: ', email)
        console.log('password', password)
        const response = await fetch(`${baseURL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error(`Error logging in: ${response.statusText}`);
        }

        res.status(201).json(response);

    } catch (error) {
        console.error('Error while login:', error);
        res.status(500).json(null);
    }
}