import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/UserContext';

const BookingModal = () => {
    const bookedProducts = useLoaderData();
    const {name, resale_price} = bookedProducts;
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const price = form.price.value;
        const location = form.location.value;


        const booking = {
            item: name,
            user: userName,
            price,
            phone,
            email,
            location
        }
      
        fetch(`https://server-rose.vercel.app/bookings`, {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
        console.log(data);
        if(data.acknowledged){
            // setSelectedProduct(null);
            toast.success('Booking Confirmed!');
            form.reset();
        }
        else{
            toast.error(data.message);
        }
        })
    }

    return (
        <div className='my-20 mx-64'>
                    <h3 className="text-2xl text-center font-bold text-magenda-100">BOOKING FORM</h3>
                    <form onSubmit={handleBooking} className='mx-96 grid grid-cols-1 gap-3 mt-8'>
                        <span>User Name:</span> <input name='name' type="text"  placeholder="Full Name" defaultValue={user?.displayName} className="input input-bordered w-full" disabled/>
                        User Email: <input name='email' type="text"  placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full" disabled/>
                        {/* Item Name */}
                        Item Name: <input type="text" disabled value={name} placeholder={name} className="font-semibold input input-bordered w-full" />
                        {/* Price */}
                        Price: <input type="text" name='price' disabled value={resale_price} placeholder={resale_price} className="font-semibold input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Meeting Location" className="input input-bordered w-full" />
                        <input type="submit" value="SUBMIT" className='btn -btn-accent w-full w-max-xs' />
                    </form>
        </div>
    );
};

export default BookingModal;