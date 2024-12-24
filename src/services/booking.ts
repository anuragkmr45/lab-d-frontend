import apiClient from '@/lib/axios';

export const addBooking = async (bookingData: {
    addressId: string;
    contactId: string;
    date: string;
    time: string;
    paymentId: string;
    statusId: string;
    services: number[];
}) => {
    try {
        const response = await apiClient.post('/add-booking', bookingData);
        return response.data;
    } catch (error) {
        console.error('Error adding booking:', error);
        throw new Error('Failed to add booking. Please try again later.');
    }
};

export const trackBooking = async (bookingId: number) => {
    try {
        const response = await apiClient.get(`/track-booking/${bookingId}`);
        return response.data;
    } catch (error) {
        console.error('Error while tracking bookings:', error);
        throw new Error('Failed to track bookings. Please try again later.');
    }
};

export const getAllBookings = async () => {
    try {
        const response = await apiClient.get('/my-bookings');
        return response.data;
    } catch (error) {
        console.error('Error while fetching all bookings:', error);
        throw new Error('Failed to feth bookings. Please try again later.');
    }
};

export const deleteBooking = async (bookingId: number) => {
    try {
        const response = await apiClient.delete('/delete-booking', {
            data: { bookingId },
        });
        return response.data;
    } catch (error) {
        console.error('Error while deleting booking:', error);
        throw new Error('Failed to delete booking. Please try again later.');
    }
};
