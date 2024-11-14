import React from 'react';
import Image from 'next/image';
import styles from '../styles/card.module.css';

interface PropsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
    return (
        <div className={styles.cardContainer} data-aos="fade-down-left">
            <div>
                <Image
                    className={styles.cardImage}
                    src={img}
                    width={350}
                    height={350}
                    alt={title}
                />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{title}</div>
                <div>{desc}</div>
                <div className={styles.tagsContainer}>
                    {tags.map((el, index) => (
                        <div className={`${styles.tag} ${styles[`tag-${index}`]}`} key={el}>
                            {el}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;