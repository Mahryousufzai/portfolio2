import React from 'react';

const Skils = () => {
  return (
    <div id="skills" className="container mx-auto pt-32">
      <div className="grid gap-20 md:grid-cols-2">
        
        <div data-aos="fade-down-left">
          <h2 className="text-3xl font-bold text-green-50">I   Work    With Technologies</h2>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">
            As a passionate developer, I work with a diverse set of technologies that empower me to create dynamic and efficient web applications.
            My expertise in Node.js allows me to build scalable server-side applications, leveraging its non-blocking architecture for optimal performance.
            I enhance user interfaces using CSS, crafting responsive and visually appealing designs that improve user experience.
            Additionally, I utilize TypeScript to write robust, type-safe code, which helps prevent errors and makes my codebase more maintainable.
            Together, these technologies enable me to deliver high-quality solutions tailored to meet the needs of my clients.
          </p>
        </div>

        
        <div data-aos="fade-down-left">
          <div className="grid grid-cols-2 gap-6 text-xl text-green-300">
            <div>
              <h2>Typescript</h2>
              <h2>React.js</h2>
              <h2>Next.js</h2>
            </div>
            <div>
              <h2>Tailwind</h2>
              <h2>CSS</h2>
              <h2>Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;