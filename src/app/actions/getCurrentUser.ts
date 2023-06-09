import { getServerSession } from 'next-auth'
import { authOptions } from '@pages/api/auth/[...nextauth]'

import prisma from '@libs/prismadb'

export async function getSession() {
  return await getServerSession(authOptions)
}
const getCurrentUser = async () => {
  try {
    const session = await getSession()

    if (!session?.user?.email) return null

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email
      }
    })

    if (!currentUser) return null

    return currentUser
  } catch (error) {
    return null
  }
}

export default getCurrentUser
