'use client';

import Lottie from 'lottie-react';
import LoadAnimation from '../../public/loading.json';

export default function LottieAnimation() {
  return <Lottie animationData={LoadAnimation} style={{ width: 200, height: 200 }} loop autoplay />;
}