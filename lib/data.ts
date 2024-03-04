import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mockupcarhub from "@/public/mockupcarhub.png";
import vitaglowDesign from "@/public/vitaglowDesign.png";
import spotyy from "@/public/spotyy.png";


export const links = [
    {
        name: 'Inicio',
        hash: '#inicio',
    },
    {
        name: "Acerca",
        hash: "#acerca",
    },
    {
        name: "Proyectos",
        hash: "#projectos",
    },
    {
        name: "Habilidades",
        hash: "#habilidades",
    },
    {
        name: "Experiencia",
        hash: "#experiencia",
    },
    {
        name: "Contacto",
        hash: "#contacto",
    },
] as const;

export const experiencesData = [
    {
        title: "Tecnólogo en sistemas",
        location: "SENA",
        description:
            "Me graue tras 12 meses de estudio. Enseguida encontré trabajo como tecnólogo en sistemas.",
        icon: React.createElement(LuGraduationCap),
        date: "2021",
    },
    {
        title: "Freelancer web",
        location: "Colombia",
        description:
            "Trabaje como freelancer y desarrolle algunos sitios web a empresas y negocios.",
        icon: React.createElement(CgWorkAlt),
        date: "2023 - 2024",
    },
    {
        title: "Front-end Developer",
        location: "Colombia",
        description:
            "Ahora soy un desarrollador Frontend que trabaja como freelancer. Mi pila incluye React, Next.js, TypeScript, Tailwind y algo de diseño web y sus tecnologías. Estoy abierto a oportunidades a tiempo completo.",
        icon: React.createElement(FaReact),
        date: "2024",
    },
] as const;


export const projectsData = [
    {
        title: "Carhub",
        description:
            "Este es un sitio web, desarrollado con next js, consumiendo una api de prueba para obtener información de los vehículos y realizar la reserva.",
        tags: ["React", "Next.js", "Headlessui", "Tailwind", "Typescript"],
        imageUrl: mockupcarhub,
    },
    {
        title: "Vita-Glow",
        description:
            "Es un destino en línea para productos de salud y bienestar.",
        tags: ["React", "JavaScript", "Next.js", "Tailwind", "Figma"],
        imageUrl: vitaglowDesign,
    },
    {
        title: "Spotify clon",
        description:
            "Creado un clon de Spotify desde 0",
        tags: ["Astro", "JavaScript", "Svelte", "Tailwind", "Typescript"],
        imageUrl: spotyy,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Framer Motion",
    "Astro",
    "Vite",
    "Netifly",
    "Adobe XD",
    "Figma",
    "Photoshop",
] as const;