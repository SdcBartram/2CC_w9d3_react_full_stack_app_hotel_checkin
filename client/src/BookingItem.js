import { useState } from "react";
import { deleteBooking, updateBooking } from "./BookingService";
import { Switch } from 'antd';

const BookingItem = ({ booking, removeBooking }) => {
    const [checkedIn, setCheckedIn] = useState(booking.checkedIn)

    const handleDelete = () => {
        deleteBooking(booking._id)
        .then(()=>{
        removeBooking(booking._id)
        console.log(booking._id)
    })
    .catch((error) => {
        console.error('Error deleting booking:', error)
    })
}

const handleSwitchChange = (checked) => {
    setCheckedIn(checked);
    
    const updatedBooking = { ...booking, checkedIn: checked };
        updateBooking(updatedBooking)
        .then(() => {
            // Update successful
        })
        .catch((error) => {
            console.error('Error updating booking:', error);
        });
  };

    return (
        <div className="booking_item">
            <ul>
                <li key={booking.id}>{booking.name}</li>
                <li key={booking.id}>{booking.email}</li>
                <li key={booking.id}>
                    <Switch checked={checkedIn} onChange={(handleSwitchChange)} />
                </li>
                <button onClick={handleDelete}>🗑</button>
            </ul>
        </div>
    )
}
export default BookingItem
