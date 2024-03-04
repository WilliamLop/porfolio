'use client';

import React from 'react';
import SectionHeading from './sectionHeading';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'; 
import { fadeInAnimationVariants } from './skills';

const Experience = () => {

    const { ref } = useSectionInView("Experiencia", 0.75);

    return (
        <section id="experiencia" className='scroll-mt-28'
            ref={ref}>
            <SectionHeading>Mi Experiencia</SectionHeading>

            <article className="relative mt-20">
                <ul className="timeline -z-10 text-center md:text-left text-black dark:text-white dark:-z-[999]">
                    {experiencesData.map((item, i) => (
                        <motion.li key={i} className="flex flex-col md:flex-row mb-10 gap-3 mt-16"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={i}
                        >
                            <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-info-100 text-gray-100
                            text-4xl bg-black/[0.7] p-2 shadow-md md:hidden mx-auto dark:bg-white/20">
                                {item.icon}
                            </div>

                            <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'pr-4' : 'pl-4'}`}>
                                {i % 2 === 0 && (
                                    <div className="rounded-lg bg-[#f3f4f6] p-6 shadow-md shadow-black/5 dark:shadow-black/10
                                    md:max-w-[800px] dark:bg-white/10">
                                        {/* Contenido del contenedor */}
                                        <div className="flex flex-col sm:flex-row justify-between items-center">
                                            <p className="font-semibold capitalize text-lg"
                                            >{item.title}</p>

                                            <p className="">{item.date}</p>

                                        </div>

                                        <p className="mb-4">{item.location}</p>
                                        
                                        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/80">
                                        {item.description}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="w-[50x h-[50px] items-center justify-center rounded-full bg-info-100 text-gray-100
                            text-3xl bg-black/[0.7] px-2 shadow-md hidden md:flex dark:bg-white/20">
                                {item.icon}
                            </div>
                            
                            <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'pl-4' : 'pr-4'}`}>
                                {i % 2 !== 0 && (
                                    <div className="rounded-lg bg-[#f3f4f6] p-6 shadow-md shadow-black/5 dark:shadow-black/10
                                    dark:bg-white/10">
                                        {/* Contenido del contenedor */}
                                        <div className="flex  flex-col sm:flex-row justify-between items-center">
                                            <p className="font-semibold capitalize"
                                            >{item.title}</p>

                                            <p className="">{item.date}</p>

                                        </div>

                                        <p className="mb-4">{item.location}</p>
                                        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/80">
                                        {item.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </article>

        </section>
    )
}

export default Experience