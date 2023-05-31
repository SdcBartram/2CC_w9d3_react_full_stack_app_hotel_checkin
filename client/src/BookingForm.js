import { useState, useEffect } from "react";
import { postBooking } from "./BookingService";
import { Switch } from 'antd';

const BookingForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkedIn: false,
    })
    const [checked, setChecked] = useState(false);
   
    const onChange = (event) => {
        const newFormData = Object.assign({}, formData)
        newFormData[event.target.name] = event.target.value
        setFormData(newFormData)
    }


    const onSubmit = (event) => {
        event.preventDefault()
        postBooking(formData).then((data)=>{
            console.log(data)
            addBooking(data)
        })
        setFormData({
            name: "",
            email: "",
            checkedIn: false,
        })
    }

    const handleChange = (checked) => {
        setChecked(checked)
            const newFormData = { ...formData, checkedIn: checked }
            setFormData(newFormData);
    }

    return (
        <form onSubmit={onSubmit} id="booking_form">
            <h3>New Booking: </h3>
                <div className="formWrap">
                <label htmlFor="name">Guest Name: </label>
                <input
                onChange={onChange}
                type="text"
                value={formData.name}
                id="name"
                name="name"
                required
                />
                <label htmlFor="email">Guest email: </label>
                <input
                onChange={onChange}
                type="email"
                value={formData.email}
                id="email"
                name="email"
                required
                />
               <Switch checked={checked} onChange={handleChange} />

                </div>

                <input type="submit" value="Submit" id="submit" />
        </form>
    )
}

export default BookingForm