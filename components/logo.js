import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Image from 'next/image'

const contactOptions = [
  {
    title: 'On-Site Visit',
    description: 'We can fly out to your office for an in-person consultation.',
    icon: '✈️'
  },
  {
    title: 'Online Meeting',
    description: 'Schedule a video call for a face-to-face discussion from anywhere.',
    icon: '🖥️'
  },
  {
    title: 'Phone Call',
    description: 'Let\'s have a conversation over the phone at your convenience.',
    icon: '📞'
  },
  {
    title: 'Visit Our Office',
    description: 'Come to our office for an in-person meeting and tour.',
    icon: '🏢'
  }
]

export default function ContactOptions() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/contact')
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Left Side: Content Section */}
      <div className="flex-1 flex flex-col justify-center items-start p-8 lg:p-16">
        <motion.h1 
          className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our services are offerred all across the United Kingdom
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We offer multiple ways to get in touch and discuss our services. Choose the option that works best for you, and let's start a conversation about how we can meet your needs.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full max-w-2xl">
          {contactOptions.map((option, index) => (
            <motion.div 
              key={option.title}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-6">
                <motion.div 
                  className="text-3xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {option.icon}
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center"
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Consultation
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
      </div>

      {/* Right Side: SVG Section */}
      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
        <Image
          src="/uk_map.svg"
          alt="Decorative illustration"
          width={500}
          height={500}
          className="w-full h-auto max-w-md"
        />
      </div>
    </div>
  )
}