import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import CardGroup from 'react-bootstrap/CardGroup';
import Navigation from '@/Fragments/navigation';
import ItemCard from '@/Fragments/itemcard';

const inter = Inter({ subsets: ['latin'] })

export default function CateH() {
  return (
    <>
      <Head>
        <title>Shopping | Categories</title>
        <meta name="description" content="For CUHK IERG4210, studentID: 1155159363" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"body"}>
        <Navigation />
        <div className='page'>
          <div className="hierarchicalNav">
            <Link className="nav-link underline" href="/">Home</Link>
            {">"}
            <span className="nav-link underline">Houseware</span>
          </div>
          <h1 className='h1'><b>Houseware</b></h1>
          <CardGroup>
            <ItemCard pid="4" />
            <ItemCard pid="4" />
            <ItemCard pid="4" />
            <ItemCard pid="4" />
          </CardGroup>
          <CardGroup>
            <ItemCard pid="4" />
            <ItemCard pid="4" />
            <ItemCard pid="4" />
            <ItemCard pid="4" />
          </CardGroup>
          <CardGroup>
            <ItemCard pid="4" />
            <ItemCard pid="4" />
            <ItemCard pid="4" />
            <ItemCard pid="4" />
          </CardGroup>
        </div>
      </main >
    </>
  )
}