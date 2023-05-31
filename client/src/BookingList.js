import BookingItem from './BookingItem'

const BookingList = ({ bookings, removeBooking }) => {
    return (
        <div className="booking_list">
            {bookings.map(booking => {
                return (
                    <BookingItem 
                        key={booking._id}
                        booking={booking}
                        removeBooking={removeBooking}
                    />
                )
            })}
        </div>
    )
}

export default BookingList