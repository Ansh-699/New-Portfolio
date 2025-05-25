
'use client'

import React from 'react'
import Image from 'next/image'
import Eye from './eyes'

export default function Page() {
    return (
        <div className='p-10 flex flex-col items-center justify-center space-y-8'>
           

            <div className="relative flex items-center justify-center">
                <Image
                    src="/frog.webp"
                    alt="frog"
                    width={380}
                    height={300}
                    className="object-cover"
                />
                <div
                    className="absolute"
                    style={{
                        top: '20%',
                        left: '50%',
                        transform: 'translate(-50%, -25%)',
                        display: 'flex',
                        gap: '57px',
                    }}
                >
                    <Eye id="eye1" />
                    <Eye id="eye2" />
                </div>
            </div>
            
        </div>
    )
}
