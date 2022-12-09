import React, { useState } from 'react';
import Swal from 'sweetalert2';
import mailGif from "../../assests/dfsd.gif"

const ContactInfo = () => {
   

    const handleOnSubmit = event => {
        event.preventDefault()
        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const message = form.message.value

        const user = { name, email, phone, message }
        if (user) {
            Swal.fire(
                'Thanks For Your Valuable Time!',
                'Contact You Soon!',
                'success'
              )
            }
           
    }

    return (
        <div>
            <h2 className='text-4xl font-bold'>Get In Touch</h2>
            <p>I would Love To Here From You</p>
            <form onSubmit={handleOnSubmit}>
                <div className='flex sm:flex-col-reverse md:flex-col lg:flex-row justify-around items-center  container mx-auto'>
                    <div  className='text-left text-xl font-bold'>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" id="" className='input input-bordered w-full mt-3 mb-3' placeholder='Enter Your Name' required/>
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="" className='input input-bordered w-full mt-3 mb-3' placeholder='Enter Your Email' required/>
                        <label htmlFor="">Phone Number</label>
                        <input type="tel" name="phone" id="" className='input input-bordered w-full mt-3 mb-3' placeholder='Enter Your Phone Number' required/>
                        <label htmlFor="">Message</label>
                        <textarea type="message" name="message" className='input input-bordered w-full mt-3'></textarea>
                        <input type="submit"className='btn btn-primary' value="Submit" />
                        
                    </div>
                    <div>
                        <img src={mailGif} alt="" />
                    </div>
                </div>
               
           </form>
        </div>
    );
};

export default ContactInfo;