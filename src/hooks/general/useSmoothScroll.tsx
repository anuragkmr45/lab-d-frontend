import { useEffect } from 'react';

const useSmoothScroll = () => {
    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
}

export default useSmoothScroll;
