import { NextResponse } from 'next/server'

import prisma from '@libs/prismadb'
import getCurrentUser from '@/app/actions/getCurrentUser'

// todo: CREATE EXTERNAL API
export async function POST(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) return NextResponse.error()

  const body = await request.json()
  const {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price
  } = body

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) return NextResponse.error()
  })

  console.log(location)

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc:
        'https://res.cloudinary.com/dwpqm9ddh/image/upload/v1687735766/airbnb-clone/tfsqwxe7c1eoddet04ra.jpg',
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location != null ? location.value : '',
      price: parseInt(price, 10),
      userId: currentUser.id
    }
  })

  return NextResponse.json(listing)
}
