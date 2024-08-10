import { useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

interface FadeInLeftAnimationProps {
    duration?: number;
}

const useFadeInLeftAnimation = ({ duration = 1100 }: FadeInLeftAnimationProps) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    const [fadeInLeftRef, inView] = useInView({
        triggerOnce: true,
    });

    const fadeInLeft = useSpring({
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? 'translateX(0)' : 'translateX(50px)',
        config: { duration },
    });

    useEffect(() => {
        if (inView) {
            setShouldAnimate(true);
        }
    }, [inView]);

    return [fadeInLeftRef, fadeInLeft];
};

export default useFadeInLeftAnimation;
