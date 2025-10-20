import React from 'react'
import callicon from '../assets/call.png'
import addressicon from '../assets/pin.png'
import mailicon from '../assets/mail.png'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='items-center flex flex-col text-white bg-[#1E1E1E] shadow shadow-[#181818] rounded-md mt-10 py-16 px-4 md:px-10 lg:px-[150px]'>
      <motion.h1 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 text-center mb-10' initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}>
        GET IN TOUCH
      </motion.h1>

      <motion.div className='flex flex-col md:flex-row justify-center items-start md:items-center gap-10 md:gap-20 mt-10' initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}>
        
        {/* Phone */}
        <div className='flex flex-col items-center text-center'>
          <img src={callicon} alt="Phone Icon" className='w-12 h-12 bg-white p-2 rounded-xl' />
          <p className='text-sm mt-6'>Phone No: +91 7025249503</p>
        </div>

        {/* Address */}
        <div className='flex flex-col items-center text-center'>
          <img src={addressicon} alt="Address Icon" className='w-12 h-12 bg-white p-2 rounded-xl' />
          <p className='text-lg mt-6 font-semibold'>Main Address</p>
          <p className='text-sm mt-2'>
            A L Manzil, Manickalpally<br />
            Venjaramoodu P.O,<br />
            Thiruvananthapuram, Kerala
          </p>
        </div>

        {/* Email */}
        <div className='flex flex-col items-center text-center'>
          <img src={mailicon} alt="Mail Icon" className='w-12 h-12 bg-white p-2 rounded-xl' />
          <p className='text-lg mt-6 font-semibold'>Main Email</p>
          <p className='text-sm'>aneesansariii123@gmail.com</p>
          <p className='mt-6 font-semibold'>Secondary Email</p>
          <p className='text-sm'>aneesal874@gmail.com</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
