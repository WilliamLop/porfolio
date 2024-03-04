"use client";

import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react';



type ActiveSectionContextsProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext =  React.createContext<ActiveSectionContextType | null>(null);


const ActiveSectionContexts = ({ children } : ActiveSectionContextsProps) => {

    const [activeSection, setActiveSection] = useState<SectionName>('Inicio');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // tenemos que hacer un seguimiento de esto para desactivar el observador
    //temporalmente cuando el usuario hace clic en un enlace

    return (
        <ActiveSectionContext.Provider value={{activeSection, setActiveSection,
        timeOfLastClick, setTimeOfLastClick}}>
            <div>
                {children}
            </div>
        </ActiveSectionContext.Provider>
    )
}

export default ActiveSectionContexts



export function useActiveSectionContext(){

    const context = useContext(ActiveSectionContext);

    if(context === null) {
        throw new Error(
            "UseActiveSectionContext must be used within an ActiveSectionContexts"
        );
    }


    return context;

}