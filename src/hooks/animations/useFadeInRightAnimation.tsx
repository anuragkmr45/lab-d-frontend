import { useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

interface FadeInRightAnimationProps {
    duration?: number;
}

const useFadeInRightAnimation = ({ duration = 1100 }: FadeInRightAnimationProps) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    const [fadeInRightRef, inView] = useInView({
        triggerOnce: true,
    });

    const fadeInRight = useSpring({
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration },
    });

    useEffect(() => {
        if (inView) {
            setShouldAnimate(true);
        }
    }, [inView]);

    return [fadeInRightRef, fadeInRight];
};

export default useFadeInRightAnimation;
