"use client";

import { useState, useEffect } from "react";
import { getAllBookings, deleteBooking } from '@/services/booking';
import MyBookingCard from "@/components/cards/booking-card/MyBookings"

const BookingContainer = () => {

    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await getAllBookings();
                setBookings(res);
                console.log('bookings:', res);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        }

        fetchBookings();
    }, []);


    return (
        <div>BookingContainer</div>
    )
}

export default BookingContainer