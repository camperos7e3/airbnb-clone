import Container from '@components/Container'
import ListingCard from '@components/listings/ListingCard'
import EmptyState from '@components/EmptyState'

import getListings, { type IListingsParams } from '@actions/getListings'
import getCurrentUser from '@actions/getCurrentUser'
import ClientOnly from '@components/ClientOnly'

interface HomeProps {
  searchParams: IListingsParams
}

const Home = async ({ searchParams }: HomeProps) => {
  const params = {
    userId: searchParams.userId ?? '',
    roomCount: searchParams.roomCount ?? 0,
    guestCount: searchParams.guestCount ?? 0,
    bathroomCount: searchParams.bathroomCount ?? 0,
    locationValue: searchParams.locationValue ?? '',
    startDate: searchParams.startDate ?? '',
    endDate: searchParams.endDate ?? '',
    category: searchParams.category ?? ''
  }
  const listings = await getListings(params)
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  )
}

export default Home
