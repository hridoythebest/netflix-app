import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row title='popular' fetchURL={requests.requestPopular} />
        <Row title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row title='Trending' fetchURL={requests.requestTrending} />
        <Row title='Latest' fetchURL={requests.requestLatest} />
        <Row title='Up Coming' fetchURL={requests.requestUpcoming} />
    </div>
  )
}

export default Home