import React, { useState, useRef  } from 'react';
    import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import mailGif from "../../assests/dfsd.gif"

const ContactInfo = () => {
   

    // const handleOnSubmit = event => {
    //     event.preventDefault()
    //     const form = event.target

    //     const name = form.name.value
    //     const email = form.email.value
    //     const phone = form.phone.value
    //     const message = form.message.value

    //     const user = { name, email, phone, message }
    //     if (user) {
           
    //         }
           
    // }

        const form = useRef();

        const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hmq2i6j', 'template_0vr09e6', form.current, 'cQmwS4rhD3IG2esxt')
            .then((result) => {
                if (result) {
                    Swal.fire(
                        'Please Check Your Email!',
                        'Thank You!',
                        'success'
                    )
                }
            }, (error) => {
                console.log(error.text);
            });
        };

    return (

       
        <div>
            <h2 className='text-4xl font-bold'>Get In Touch</h2>
            <p className='mb-10'>I would Love To Here From You</p>
            <div>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label><br/>
                        <input type="text" name="user_name" className='input input-bordered mb-5'/><br/>
                        <label>Email</label><br/>
                        <input type="email" name="user_email" className='input input-bordered mb-5'/><br/>
                        <label>Message</label><br/>
                        <textarea name="message" className='input input-bordered mb-5'/><br/>
                        <input type="submit" className='btn btn-primary' value="Send" />
                    </form>
                </div>
           </div>
        </div>
    );
};

export default ContactInfo;