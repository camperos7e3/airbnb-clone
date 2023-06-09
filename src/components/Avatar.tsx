'use client'

import Image from 'next/image'
import avatar_placeholder from '../../public/images/placeholder.jpg'

interface AvatarProps {
  src?: string | null | undefined
}
const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src={src ?? avatar_placeholder}
    />
  )
}

export default Avatar
