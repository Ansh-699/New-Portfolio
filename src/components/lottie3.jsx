'use client';

import Lottie from 'lottie-react';
import CatAnimation from '../../public/cat.json';

export default function LottieAnimation() {
  return <Lottie animationData={CatAnimation} style={{ width: 300, height: 100 }} loop autoplay />;
}