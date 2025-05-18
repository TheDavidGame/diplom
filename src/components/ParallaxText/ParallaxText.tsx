import React, {memo, useRef} from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import {wrap} from "@motionone/utils";
import styles from "./ParallaxText.module.scss";
import {ParallaxProps} from "../../entity/index.entity";

export const ParallaxText = memo(function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 30,
        stiffness: 300,
        mass: 0.5,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], { clamp: true });

    const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
    const directionFactor = useRef(1);

    useAnimationFrame((_, delta) => {
        const moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        const velocity = velocityFactor.get();

        if (velocity < 0) directionFactor.current = -1;
        else if (velocity > 0) directionFactor.current = 1;

        const adjustedMoveBy = moveBy + directionFactor.current * moveBy * velocity;
        baseX.set(baseX.get() + adjustedMoveBy);
    });

    return (
        <div className={styles.parallax}>
            <motion.div className={styles.scroller} style={{x}}>
                <span>{children}&nbsp;</span>
                <span>{children}&nbsp;</span>
                <span>{children}&nbsp;</span>
                <span>{children}&nbsp;</span>
            </motion.div>
        </div>
    );
});
