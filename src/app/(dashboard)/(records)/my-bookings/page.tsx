import MyBookingCard from '@/components/cards/booking-card/MyBookings';

const MyBookings = () => {
    return (
        <main className='px-4 py-4 w-full md:w-10/12 mx-auto'>
            <h1 className='font-medium text-[#5A5A5A] text-center py-2 md:py-4'>My Bookings</h1>
            <MyBookingCard />
        </main>
    )
}

export default MyBookings
