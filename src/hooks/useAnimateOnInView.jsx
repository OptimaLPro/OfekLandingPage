import { useRef } from 'react';
import { useInView } from 'framer-motion';

const useAnimateOnInView = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const transition = {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.2
    };
    const animationControls = {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 },
        transition: transition
    };

    return { ref, ...animationControls };
};

export default useAnimateOnInView;