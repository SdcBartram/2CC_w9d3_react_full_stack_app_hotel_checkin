use hotel;
db.dropDatabase();

db.bookings.insertMany([
    { name: "Bill", email: "bob@bob.com", checkedIn : false }, 
    { name: "Ted", email: "todd@bob.com", checkedIn : false }
])