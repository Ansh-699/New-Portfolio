'use client';

import Lottie from 'lottie-react';
import mailAnimation from '../../public/mail.json';

export default function LottieAnimation() {
  return <Lottie animationData={mailAnimation} style={{ width: 200, height: 200 }} loop autoplay />;
}