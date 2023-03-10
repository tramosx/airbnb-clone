import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"

import Image from 'next/image'

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />
    <Banner/>

    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Explorar nas proximidades</h2>

        {/* Pull some data from a server - API endpoints */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          { exploreData?.map(({img, distance, location}) => (
            <SmallCard 
            key={img}
            img={img} 
            distance={distance} 
            location={location}
            />
          ))}
        </div>
      </section>
    </main>

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await  fetch('https://www.jsonkeeper.com/b/4G1G').
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData
    }
  }
}