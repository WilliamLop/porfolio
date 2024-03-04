"use client";

import React from 'react';
import SectionHeading from './sectionHeading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-bn';
import toast from 'react-hot-toast';


const Contact = () => {

    const { ref } = useSectionInView("Contacto", 0.75);

    return (
        <motion.section id="contacto" className='mb-20 sm:mb-28 w-[min(100%,38rem)]'
        ref={ref}
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1}}
        viewport={{once: true}}
        >
            <SectionHeading>Contacto</SectionHeading>
            <p className="text-center leading-7 text-gray-700 -m-3 dark:text-white/70">
                Póngase en contacto conmigo directamente en {" "}
                <a className="underline" href="mailto:calderonwilliam25@gmail.com">
                    calderonwilliam25@gmail.com
                </a> o a través de este formulario.
            </p>

            <form action={ async (formData) => {
                const { data, error } = await sendEmail(formData);
                
                if(error){
                    toast.error(error);
                    return;
                }

                toast.success('Correo electrónico enviado correctamente');
                
            }} 
            className="group mt-10 grid">
                <input type="email" className='h-14 rounded-lg borderBlack px-4 bg-white dark:bg-white/10'
                placeholder='Email' required maxLength={500} name="senderEmail" />


                <textarea className='h-52 my-3 rounded-lg borderBlack p-4 bg-white dark:bg-white/10' 
                placeholder='Mensaje' required maxLength={5000}
                name="message"></textarea>

                <SubmitBtn />
            </form>
        </motion.section>
    )
}

export default Contact