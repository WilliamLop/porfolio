"use client";

import React from 'react';
import SectionHeading from './sectionHeading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';


export const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index : number) => ({
        opacity: 1,
        y:0,
        transition: {
            delay: 0.05 * index,
        }
    }),
}

const Skills = () => {

    const { ref } = useSectionInView("Habilidades");

    return (
        <section id="habilidades" ref={ref}
        className='scroll-mt-28 max-w-[53rem] text-center mb-28
        sm:mb-0' >
            <SectionHeading> My Skills</SectionHeading>

            <ul className=" flex items-center gap-2 flex-wrap mt-12
            justify-center text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li key={index}
                    className="bg-white borderBlack dark:bg-white/10 dark:text-white/80
                    rounded-xl px-5 py-3"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default Skills