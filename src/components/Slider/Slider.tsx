import React, { useRef, useCallback, useEffect } from 'react';
import styles from './Slider.module.scss';
import { ImageSliderProps } from "../../entity/index.entity";

const Slider: React.FC<ImageSliderProps> = ({ slides, showText }) => {
    const scrollerContainerRef = useRef<HTMLDivElement>(null);
    const translateX = useRef(0);
    const lastScrollY = useRef(0);

    const handleScroll = useCallback(() => {
        if (!scrollerContainerRef.current) return;

        const currentScrollY = window.scrollY;
        const deltaY = currentScrollY - lastScrollY.current;
        lastScrollY.current = currentScrollY;

        const speedFactor = 0.5;
        translateX.current -= deltaY * speedFactor;
        scrollerContainerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className={styles.scroller}>
            <div ref={scrollerContainerRef} className={styles.scrollerContainer}>
                {slides.map((slide, index) => {
                    const isVideo = slide.image.toLowerCase().endsWith('.mp4');
                    return (
                        <div key={index} className={styles.scrollerItem}>
                            {isVideo ? (
                                <video
                                    src={slide.image}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.slideVideo}
                                />
                            ) : (
                                <img
                                    src={slide.image}
                                    alt={`Slide ${index}`}
                                    className={styles.slideImage}
                                />
                            )}
                            {showText && slide.text && (
                                <div className={styles.slideText}>{slide.text}</div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
