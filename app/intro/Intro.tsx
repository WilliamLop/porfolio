"use client";

import React from 'react';
import Image from 'next/image';
import william from '@/public/willliam.jpeg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-contents';

const Intro = () => {

    const { ref } = useSectionInView("Inicio", 0.5);

    const {
        setActiveSection,
        setTimeOfLastClick,
    } = useActiveSectionContext();

    return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0
        scroll-mt-28'
        id='inicio' ref={ref}>
            <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                initial = {{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tewwn",
                    duraiton: 0.2,
                }}
                >
                    <Image
                    src={william}
                    alt="william-img"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className='object-cover h-24
                    w-24 rounded-full border border-[0.35rem] border-white shadow-xl
                    xl:w-28 xl:h-28'/>
                </motion.div>
                    <motion.span className="absolute text-3xl bottom-0 right-0"
                    initial = {{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                    }}
                    >
                        👋
                    </motion.span>

            </div>

            
            </div>
            
            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hola, soy William.</span> Soy un{" "}
                <span className="font-bold">desarrollador front-end</span> con{" "}
                <span className="font-bold">1 año</span> de experiencia. Me gusta construir
                <span className="italic">sitios y apps web</span>. Mi objetivo es{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row gap-4 items-center justify-center
            text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link href="#contacto" className='group flex items-center bg-gray-900 text-white 
                px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 transition
                hover:scale-110 hover:bg-gray-950 active:scale-105'
                onClick={() => {
                    setActiveSection('Contacto');
                    setTimeOfLastClick(Date.now());
                }}
                >
                    Contactame <BsArrowRight className='opacity-70
                    group-hover:translate-x-1 transition'/>
                </Link>

                <a href="/CV.pdf" className="group flex items-center gap-2 px-6 py-3 rounded-full border
                border-black/10 bg-white cursor-pointer outline-none focus:scale-110 transition
                hover:scale-110 active:scale-105 dark:bg-white/10" download>
                    Descargar CV <HiDownload className='group-hover:translate-y-1 transition
                    opacity-70'/>
                </a>

                <Link href="https://www.linkedin.com/in/willcalde/" target='_blank'
                className='p-4 rounded-full bg-white text-gray-700
                focus:scale-[1.15] transition borderBlack dark:bg-white/10 dark:text-white/70
                hover:scale-[1.15] active:scale-105 hover:text-gray-950'>
                    <BsLinkedin />
                </Link>

                <a href="https://github.com/WilliamLop" target='_blank'
                className='p-4 rounded-full bg-white text-gray-700
                focus:scale-[1.15] transition borderBlack dark:bg-white/10 dark:text-white/70
                hover:scale-[1.15] active:scale-105 hover:text-gray-950'>
                    <BsGithub />
                </a>
            </motion.div>
        </section>
    )
}

export default Intro