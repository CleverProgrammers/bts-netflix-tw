import { useAddress } from "@thirdweb-dev/react";
import Banner from '../components/Banner'
import Login from "../components/Login"
import Nav from '../components/Nav'
import Row from '../components/Row'
import requests from '../requests'

export default function Home() {
  const address = useAddress()

  if (!address) return <Login />

  return (
    <>
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  )
}
