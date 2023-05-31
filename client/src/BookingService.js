const baseURL = 'http://localhost:9000/api/bookings'

export const getBookings = () => {
    return fetch(baseURL)
    .then(response => response.json())
}

export const postBooking=(payload) =>{
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers:{'Content-Type': 'application/json'}
    })
    .then(response => response.json())
}

export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateBooking = (booking) => {
    console.log(booking)
    return fetch(baseURL + '/' + booking._id, {
      method: 'PUT',
      body: JSON.stringify(booking),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  };
  