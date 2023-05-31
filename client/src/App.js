
import { useState, useEffect } from 'react'
import './App.css';
import BookingList from './BookingList'
import { getBookings } from './BookingService'
import BookingForm from './BookingForm';


function App() {
  const [bookings,setBookings] = useState([])

  useEffect(() => {
    getBookings().then((bookings) => {
      setBookings(bookings)
    })
  }, [])

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking])
  }

  const removeBooking = (id) => {
    const bookingsToKeep = bookings.filter(booking => booking._id !== id)
    setBookings(bookingsToKeep)
  }

  return (
    <div className="App_container">
      <BookingForm addBooking={addBooking}/>
      <BookingList bookings={bookings} removeBooking={removeBooking}/>
    </div>
  );
}

export default App;
