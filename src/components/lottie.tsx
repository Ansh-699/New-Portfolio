'use client';

import { useTheme } from 'next-themes';
import Lottie from 'lottie-react';
import helloAnimation from '../../public/hello-last.json';
import helloAnimationDark from '../../public/hello-white.json';

export default function LottieAnimation() {
    const { theme } = useTheme();
    const animationData = theme === 'dark' ? helloAnimationDark : helloAnimation;

    return <Lottie animationData={animationData} style={{ width: 200, height: 200 }} loop autoplay />;
}