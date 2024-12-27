'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addBooking } from '@/services/booking';

const PatientLocation = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const serviceId: string | null = searchParams.get('serviceId');

    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [manualAddress, setManualAddress] = useState('');

    // Function to handle booking submission
    const handleAddBooking = async () => {
        if (!serviceId) {
            console.error('Service ID not found.');
            return;
        }

        // Ensure location is available or manual address is provided
        // const addressId = location
        //     ? `${location.latitude},${location.longitude}`
        //     : manualAddress;

            const addressId = manualAddress
        if (!addressId) {
            console.error('Address is not provided.');
            return;
        }

        const services = serviceId.split('').map((char) => Number(char));
        const bookingData = {
            addressId: "123 Main St",
            date: "2024-12-27",
            time: "14:00",
            services: services,
        };

        try {
            const res = await addBooking(bookingData);
            console.log('Booking Added:', res);
            router.replace('/dashboard/my-bookings');
        } catch (error) {
            console.error('Error while adding booking:', error);
        }
    };

    // Get user location on mount
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    const { latitude, longitude } = coords;
                    setLocation({ latitude, longitude });
                },
                (err) => {
                    setError('Location access denied. Please provide your address manually.');
                }
            );
        } else {
            setError('Geolocation is not supported by your browser.');
        }
    }, []);

    return (
        <div>
            <h2>Patient Location</h2>

            {/* Manual address input */}
            <Input
                type="text"
                placeholder="Home address manually"
                value={manualAddress}
                onChange={(e) => setManualAddress(e.target.value)}
            />

            <span>OR</span>

            {/* Location Display */}
            {location ? (
                <div>
                    <p>Your current location:</p>
                    <p>Latitude: {location.latitude}</p>
                    <p>Longitude: {location.longitude}</p>
                </div>
            ) : (
                <div>
                    <p>{error || 'Fetching your location...'}</p>
                </div>
            )}

            <Button onClick={handleAddBooking}>Submit Details</Button>
        </div>
    );
};

export default PatientLocation;
