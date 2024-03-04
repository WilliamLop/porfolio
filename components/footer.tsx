import React from 'react'

const Footer = () => {
    return (
        <footer className='mb-10 px4 text-center text-gray-500 dark:text-white/90'>
            <small className="mb-2 text-xs block">
                &copy; 2024 - William Calderon. All rights reserverd
            </small>
            <p className="text-xs">
                <span className="font-semibold">About this website: </span>
                build whih React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion,
                React Email & Resend, Vercel hosting.
            </p>
        </footer>
    )
}

export default Footer