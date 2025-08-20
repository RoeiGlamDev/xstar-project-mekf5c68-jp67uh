import { useEffect, useState } from 'react';

const useParallax = (ref: React.RefObject<HTMLElement>, speed: number) => {
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        if (ref.current) {
            const top = ref.current.getBoundingClientRect().top;
            setOffset(window.scrollY * speed + top);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref, speed]);

    return offset; // Returns the calculated offset for parallax effect
};

export default useParallax;