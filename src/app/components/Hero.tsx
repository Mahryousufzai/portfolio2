import Image from 'next/image';
import styles from '../../../styles/hero.module.css';

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.imgDiv}>
				<Image src={'/main.png'} alt="mainImage" width={100} height={100} />
			</div>

			<div className={styles.textDiv}>
				<p data-aos="fade-down-right">I&apos;m</p>
				<p data-aos="fade-down-left">Mehar</p>
				<p data-aos="fade-down-left">Ali</p>
			</div>
		</div>
	);
};

export default Hero;
