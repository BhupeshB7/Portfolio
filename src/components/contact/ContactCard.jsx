import React from 'react'
import { motion } from 'framer-motion'
import { FaMessage } from 'react-icons/fa6'
import contact from "../../assets/contact.png"
const ContactCard = () => {
  return (
    <div className=''>
        <motion.h5 className="text-xl text-purple-300 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
              If you need to  <span className='flex justify-between text-4xl  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>get in touch with us,</span >  don't hesitate to give us a <div className="flex gap-3"><FaMessage size={25} style={{color:"violet"}}/> or a call.</div> 
        </motion.h5>
        <img src={contact} alt="contact"/>
        </div>
  )
}

export default ContactCard