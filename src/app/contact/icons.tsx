import React from 'react'
import Image from 'next/image'

const icons = () => {
return (
    <div className='flex flex-row justify-center gap-x-9'>
        <a>
            <Image src="/gmail.png" alt="gmail" width={50} height={50} />
        </a>
        <a>
            <Image src="/linkedin.png" alt="linkedin" width={50} height={50} />
        </a>
        <a>
            <Image src="/twitter.png" alt="twitter" width={50} height={50} />
        </a>
        <a>
            <Image src="/github.png" alt="github" width={50} height={50} />
        </a>
    </div>
)
}

export default icons;
