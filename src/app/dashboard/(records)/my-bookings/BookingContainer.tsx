import { getAllBookings } from '@/services/booking';
import MyBookingCard from "@/components/cards/booking-card/MyBookings"

const BookingContainer = async () => {
    const res = await getAllBookings();
    // console.log('bookings:', res);

    type TestService = {
        serviceName: string;
        testParameters: any[];
      };

    type BookingUnitType ={
        bookingId: number,
        userId: string,
        date: string,
        time: string,
        reportStatus: string,
        paymentStatus: string,
        collectionLocation: string,
        services: TestService,
      }


    return (
        <div>
            <h1>My Bookings</h1>
            <div>

                {
                    res.map((booking: BookingUnitType) => {
                        return(
                            <MyBookingCard key={booking.bookingId} bookingData={booking} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BookingContainer