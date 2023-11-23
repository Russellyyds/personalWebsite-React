"use client"
import React, { useState } from 'react'
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";
const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
          };
          console.log(data)
          const JSONdata = JSON.stringify(data);
          const endpoint = "/api/send";
           // Form the request for sending data to the server.
    const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };
  
      const response = await fetch(endpoint, options);
      const resData = await response.json();
    
      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    }
    return (
        <section id='contact' className=' grid md:grid-cols-2 my-12 md:gap-y-12 py-24 gap-4 relative'>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className='z-10'>
                <h5 className=' text-xl font-bold text-white my-2'>
                    Let's Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="github.com">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="linkedin.com">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor="email" className=' mb-2 text-white block text-sm font-medium'>Your Email</label>
                        <input name='email' type="email" required id='email' placeholder='xxxxx@gmail.com' className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" />

                    </div>
                    <div className='mb-6'>
                        <label htmlFor="subject" className='mb-2 text-white block  text-sm font-medium'>
                            Your Subject
                        </label>
                        <input name='subject' type="text" required id='subject' placeholder='Just saying hi' className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" />

                    </div>
                    <div className='mb-6'>
                        <label  htmlFor="message" className='mb-2 text-white block  text-sm font-medium'>
                            Message
                        </label>
                        <textarea id='message' placeholder="Let's talk about..." name='message' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'></textarea>
                    </div>

                    <button type='submit' className=' bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
                    {
                        emailSubmitted&&(
                            <p className=' text-green-500 text-sm mt-2'>
                                Email sent Successfully!
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection