"use client";
import Hero from "./components/Hero";

import Projects from "./components/Projects";


import Skils from "./components/Skils";
import Contact from "./components/Contact";
import About from "./components/About";

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  useEffect(() =>{
    AOS.init({
      easing: "ease-out-back",
      duration: 1000,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,


  });
  AOS.refresh()
}, [])
  return (
   <main>
    <Hero />
    <Projects />
    <Skils />
    <Contact />
    <About />
   </main>

  );
}
