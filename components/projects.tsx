"use client";

import React from 'react';
import SectionHeading from './sectionHeading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

const Projects = () => {

    const { ref } = useSectionInView("Proyectos", 0.5);

    return (
        <>
            <section className='scroll-mt-28 mb-28 sm:mb-4' id="projectos" ref={ref}>
                <SectionHeading>Mis Proyectos</SectionHeading>

                <div className="">
                    {projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Projects;

