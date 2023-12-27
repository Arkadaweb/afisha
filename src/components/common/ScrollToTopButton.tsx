import React, { useState, useEffect } from 'react';
import ArrowToTopIcon from "../../assets/icons/common/ArrowToTopIcon";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrolledFromTop = window.scrollY;

        // Показывать кнопку, когда прокрутка превышает 100vh и ширина экрана меньше 1024px
        setIsVisible(scrolledFromTop > window.innerHeight && window.innerWidth < 1024);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                backgroundColor: 'rgba(226, 209, 175, 1)',
                borderRadius: 50,
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
                height: 60,
                width: 60,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onClick={scrollToTop}
        >
            <ArrowToTopIcon/>
        </div>
    );
};

export default ScrollToTopButton;
