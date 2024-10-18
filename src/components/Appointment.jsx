import React, { useState } from 'react';

const Appointment = () => {
    const [date, setDate] = useState('');
    const [slot, setSlot] = useState('');
    const [email, setEmail] = useState('');  // Add email state
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const appointmentData = { date, slot, email };  // Include email in the payload

        try {
            const response = await fetch('https://capstone-backend-p9vf.onrender.com/api/appointments/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointmentData),
            });

            if (response.ok) {
                setMessage('Your booking is confirmed and email sent!');
            } else {
                setMessage('Failed to send email.');
            }
        } catch (error) {
            setMessage('Error sending email.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-black text-white text-center p-5 min-h-screen">
            <h1 className="text-lime-500">FitnessFIT</h1>
            <h2 className="text-xl">All Appointments</h2>
            <form className="mx-auto flex flex-col items-center mt-5" onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
                <input 
                    type="date" 
                    placeholder="Mm/Dd/Yyyy" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="my-2 p-2 w-full rounded-md border-none text-center"
                />
                <select 
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="my-2 p-2 w-full rounded-md border-none text-center"
                >
                    <option value="">--Please Choose A Slot Option--</option>
                    <option value="6am-8am">6 AM to 8 AM</option>
                    <option value="8am-11am">8 AM to 11 AM</option>
                    <option value="11am-1pm">11 AM to 1 PM</option>
                    <option value="1pm-3pm">1 PM to 3 PM</option>
                    <option value="3pm-5pm">3 PM to 5 PM</option>
                    <option value="5pm-7pm">5 PM to 7 PM</option>
                    <option value="7pm-9pm">7 PM to 9 PM</option>
                </select>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}                          // Add email input
                    onChange={(e) => setEmail(e.target.value)}
                    className="my-2 p-2 w-full rounded-md border-none text-center"
                    required
                />
                <button type="submit" className="my-2 p-2 w-full bg-lime-500 text-black rounded-md cursor-pointer">Book An Appointment</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Appointment;
