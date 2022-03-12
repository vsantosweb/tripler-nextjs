import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CategoryCollection from '../resources/modules/CategoryCollection'
import trips from './trips-by-category.json';


const Home: NextPage = ({ layout }: any) => {

  React.useEffect(() => layout('DefaultLayout'), [])

  return (
    <CategoryCollection data={trips} />
  )
}

export default Home
