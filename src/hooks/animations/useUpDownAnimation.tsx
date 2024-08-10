import { useState } from 'react';
import { useSpring } from 'react-spring';

interface UseUpDownAnimationProps {
    initialY?: number;
    amplitude?: number;
    frequency?: number;
}

const useUpDownAnimation = ({ initialY = 0, amplitude = 20, frequency = 0.5 }: UseUpDownAnimationProps) => {
    const [up, setUp] = useState(true);

    const props = useSpring({
        loop: { reverse: true },
        from: { transform: `translateY(${initialY}px)` },
        to: async (next) => {
            while (true) {
                await next({ transform: `translateY(${up ? initialY - amplitude : initialY + amplitude}px)` });
                setUp(!up);
            }
        },
        config: { duration: 1000 / frequency },
    });

    return props;
};

export default useUpDownAnimation;
