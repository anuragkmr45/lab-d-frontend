import { useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

interface FadeInUpAnimationProps {
    duration?: number;
}

const useFadeInUpAnimation = ({ duration = 1050 }: FadeInUpAnimationProps) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    const [fadeInUpRef, inView] = useInView({
        triggerOnce: true,
    });

    const fadeInUp = useSpring({
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? 'translateY(0)' : 'translateY(50px)',
        // from: { opacity: 0, transform: 'translateY(50px)' },
        config: { duration },
    });

    useEffect(() => {
        if (inView) {
            setShouldAnimate(true);
        }
    }, [inView]);

    return [fadeInUpRef, fadeInUp];
};

export default useFadeInUpAnimation;
