import React from 'react';
import styles from '../../../styles/skills.module.css';

const Skils = () => {
	return (
		<div id="skills" className={styles.main}>
			<div className={styles.mainDivOne} data-aos="fade-down-left">
				<h2 className={styles.h}>I Work With Technologies</h2>
				<p className={styles.para}>
					As a passionate developer, I work with a diverse set of technologies that empower me to create
					dynamic and efficient web applications. My expertise in Node.js allows me to build scalable
					server-side applications, leveraging its non-blocking architecture for optimal performance. I
					enhance user interfaces using CSS, crafting responsive and visually appealing designs that improve
					user experience. Additionally, I utilize TypeScript to write robust, type-safe code, which helps
					prevent errors and makes my codebase more maintainable. Together, these technologies enable me to
					deliver high-quality solutions tailored to meet the needs of my clients.
				</p>
			</div>

			<div className={styles.mainDivTwo} data-aos="fade-down-left">
        <div className='grid md:grid-cols-3 grid-cols-2'>
        <span className='bg-slate-600 hover:bg-slate-700 m-4 p-4 flex justify-center rounded-md text-[14px] sm:text-[18px]'>Typescript</span>
        <span className='bg-slate-600 hover:bg-slate-700 m-4 p-4 flex justify-center rounded-md text-[14px] sm:text-[18px]'>Nextjs</span>
        <span className='bg-slate-600 hover:bg-slate-700 m-4 p-4 flex justify-center rounded-md text-[14px] sm:text-[18px]'>Reactjs</span>
        <span className='bg-slate-600 hover:bg-slate-700 m-4 p-4 flex justify-center rounded-md text-[14px] sm:text-[18px]'>Tailwind</span>
        <span className='bg-slate-600 hover:bg-slate-700 m-4 p-4 flex justify-center rounded-md text-[14px] sm:text-[18px]'>Figma</span>
        <span className='bg-slate-600 hover:bg-slate-700 m-4 p-4 flex justify-center rounded-md text-[14px] sm:text-[18px]'>UI/UX design</span>
        </div>
			</div>

		</div>
	);
};

export default Skils;
