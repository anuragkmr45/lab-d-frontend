import { NextApiRequest, NextApiResponse } from 'next';
const baseURL = process.env.NEXT_API_BASE_URL;

const authHeader = (req: NextApiRequest) => {
    const authToken = req.headers.authorization?.split(' ')[1];

    if (!authToken) {
        throw new Error('Authorization token required');
    }

    return authToken;
}

const addBooking = async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        const { addressId, date, time, contactId, statusId, paymentId } = req.body;
        const authToken: string = authHeader(req);

        if (!authToken) {
            return res.status(400).json({ error: 'Authorization token required' });
        }

        const response = await fetch(`${baseURL}/addBooking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ addressId, date, time, contactId, statusId, paymentId }),
        });

        if (!response.ok) {
            throw new Error(`Error adding booking: ${response.statusText}`);
        }

        const data = await response.json();
        res.status(201).json(data);
    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const myBookings = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const authToken: string = authHeader(req);

        if (!authToken) {
            return res.status(400).json({ error: 'Authorization token required' });
        }

        const response = await fetch(`${baseURL}/myBookings`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
        });

        if (response.status === 200) {
            throw new Error(`Error fetching bookings: ${response.statusText}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};