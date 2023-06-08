'use client'

import Image from 'next/image'
import avatar_placeholder from '../../public/images/placeholder.jpg'

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src={avatar_placeholder}
    />
  )
}

export default Avatar
