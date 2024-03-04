"use client";

import React from 'react';
import SectionHeading from './sectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const About = () => {

    const { ref } = useSectionInView("Acerca");

    return (
        <motion.section className='grid gap-4 text-center
        max-w-[45rem] leading-8 scroll-mt-28 mb-28 sm:mb-4'
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="acerca"
        >
            <SectionHeading>Acerca de mí</SectionHeading>
            <p>
                Tras graduarme de tecnólogo en{" "}
                <span className="font-medium">sistemas</span>, decidí perseguir mi pasión por la programación.
                Me propuse aprenderlo por cuenta propia, sobre la codificación y aprendí{" "}
                <span className="font-medium">desarrollo web front-end</span>.{" "}
                <span className="italic">Mi parte favorita de la programación</span> es el aspecto de poder proyectar el modelo
                sobre la importancia para los clientes tener una presencia digital para su negocio y la resolución de problemas. El
                <span className="underline"> amor</span> y
                sensación de haber encontrado por fin la solución a un problema o poder convertir un negocio
                físico a su forma virtual y presencia digital. Mi pila principal
                es{" "}
                <span className="font-medium">
                    HTML, CSS, JavaScript, React, Next.js, Node.js
                </span>
                . También estoy familiarizado con TypeScript. Siempre estoy buscando aprender nuevas tecnologías.
                Actualmente estoy buscando un{" "}
                <span className="font-medium">puesto a tiempo completo</span> como desarrollador de software.
            </p>
            <p>
                <span className="italic">Cuando no estoy codificando</span>, Me gusta practicar lo relacionado al diseño web.
                También me gusta{" "}
                <span className="font-medium">aprender cosas nuevas</span>. Actualmente estoy aprendiendo sobre{" "}
                <span className="font-medium">ventas y marketing</span>. También sobre desarrollo personal.
            </p>

        </motion.section>


    )
}

export default About