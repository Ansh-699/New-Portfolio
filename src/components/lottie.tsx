'use client';

import Lottie from 'lottie-react';
import helloAnimation from '../../public/hello-last.json';

export default function LottieAnimation() {
  return <Lottie animationData={helloAnimation} style={{ width: 200, height: 200 }} loop autoplay />;
}