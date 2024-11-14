import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo list",
        desc: "A React & Typescript based app for managing and organizing",
        img: "/todo_png.png",  // Fixed image path
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "CountDown Timer",
        desc: "A Next.js & Typescript powered website to track time",
        img: "/countdown_jpg.jpg",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "A simple calculator",
        desc: "A React & Typescript based app for managing and organizing",
        img: "/calculator_webpg.webp",
        tags: ["Node", "CSS", "Typescript"],
    },
    {
        id: 3,
        title: "ATM machine",
        desc: "A React & Typescript based app for managing and organizing",
        img: "/atm.jpeg.jpg",  // Corrected image path
        tags: ["Node", "CSS", "Typescript"],
    },
    {
        id: 4,  // Made this ID unique
        title: "Currency converter",
        desc: "A React & Typescript based app for managing and organizing",
        img: "/curreny_png.png",
        tags: ["Node", "CSS", "Typescript"],
    },
    {
        id: 5,  // Changed the duplicate ID from 4 to 5
        title: "Resume",
        desc: "A React & Typescript based app for managing and organizing",
        img: "/resume_webpg.webp",  // Ensure the image path is correct
        tags: ["Node", "CSS", "Typescript"],
    },
];

export default function Projects() {
    return (
        <div id='projects' className='container mx-auto pt-32'>
            <Heading title="My Projects" />
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
                {data.map((el) => (
                    <Card 
                        key={el.id}
                        title={el.title}
                        desc={el.desc}
                        img={el.img}
                        tags={el.tags}
                    />
                ))}
            </div>
        </div>
    );
}