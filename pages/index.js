import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'


export default function Home({results}) {
  
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Header />
      <Navbar />
      <Results reqResults={results} />
    </>
  )
}

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;
  const req = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`  )
  const res = await req.json();
  return {
    props: {
      results: res
    }
  }

}
