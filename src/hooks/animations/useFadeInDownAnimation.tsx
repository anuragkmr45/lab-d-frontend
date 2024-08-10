import { useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

interface FadeInDownAnimationProps {
    duration?: number;
}

const useFadeInDownAnimation = ({ duration = 1100 }: FadeInDownAnimationProps) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    const [fadeInDownRef, inView] = useInView({
        triggerOnce: true,
    });

    const fadeInDown = useSpring({
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? 'translateY(0)' : 'translateY(-50px)',
        config: { duration },
    });

    useEffect(() => {
        if (inView) {
            setShouldAnimate(true);
        }
    }, [inView]);

    return [fadeInDownRef, fadeInDown];
};

export default useFadeInDownAnimation;
