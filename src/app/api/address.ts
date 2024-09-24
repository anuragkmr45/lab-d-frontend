import { NextApiRequest, NextApiResponse } from 'next';
const baseURL = process.env.NEXT_API_BASE_URL;

const authHeader = (req: NextApiRequest) => {
    const authToken = req.headers.cookie?.match(/authToken=([^;]+)/)?.[1];

    if (!authToken) {
        throw new Error('Authorization token required');
    }

    return authToken;
}

const addAddress = async (req: NextApiRequest, res: NextApiResponse, data: {
    line1: string,
    line2: string,
    city: string,
    state: string,
    pincode: string,
    coordinates: string,
}) => {
    try {
        const authToken: string = authHeader(req);

        if (!authToken) {
            return res.status(400).json({ error: 'Authorization token required' });
        }

        const response: Response = await fetch(`${baseURL}/addAddress`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error adding booking: ${response.statusText}`);
        }

        const resData = await response.json();
        res.status(201).json(resData);
    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { addAddress };