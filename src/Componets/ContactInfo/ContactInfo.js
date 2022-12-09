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
            <p className='mt-10'>I would Love To Here From You</p>
            <form onSubmit={handleOnSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2  container mx-auto'>
                    <div  className='text-center lg:text-left text-xl font-bold'>
                        <label htmlFor="">Name</label><br/>
                        <input type="text" name="name" id="" className='input input-bordered w-3/4 lg:w-full mt-3 mb-3' placeholder='Enter Your Name' required/><br/>
                        <label htmlFor="">Email</label><br/>
                        <input type="email" name="email" id="" className='input input-bordered w-3/4 lg:w-full mt-3 mb-3' placeholder='Enter Your Email' required/><br/>
                        <label htmlFor="">Phone Number</label><br/>
                        <input type="tel" name="phone" id="" className='input input-bordered w-3/4 lg:w-full mt-3 mb-3' placeholder='Enter Your Phone Number' required/><br/>
                        <label htmlFor="">Message</label><br/>
                        <textarea type="message" name="message" className='input input-bordered w-3/4 lg:w-full mt-3'></textarea><br/>
                        <input type="submit"className='btn btn-primary' value="Submit" />
                        
                    </div>
                    <div>
                        <img src={mailGif} alt="" className='hidden lg:block'/>
                    </div>
                </div>
               
           </form>
        </div>
    );
};

export default ContactInfo;