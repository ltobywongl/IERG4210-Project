import Head from 'next/head'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from "react-bootstrap/Carousel";
import CardGroup from 'react-bootstrap/CardGroup';
import { Inter } from '@next/font/google'
import Navigation from '@/Fragments/navigation';
import ItemCard from '@/Fragments/itemcard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Shopping</title>
        <meta name="description" content="For CUHK IERG4210, studentID: 1155159363" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"body"}>
        <Navigation />
        <div className='page'>
          <div className="hierarchicalNav">
            <Link className="nav-link underline" href="/">Home</Link>
          </div>
          <h1 className='h1'><b>Welcome to the site!</b></h1>
          <h3 className='h3'>Featured</h3>
          <Carousel indicators={false} interval={3000} variant="dark">
            <Carousel.Item>
              <CardGroup>
                <ItemCard pid="1" />
                <ItemCard pid="1" />
                <ItemCard pid="1" />
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
              <CardGroup>
                <ItemCard pid="3" />
                <ItemCard pid="3" />
                <ItemCard pid="3" />
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
              <CardGroup>
                <ItemCard pid="4" />
                <ItemCard pid="4" />
                <ItemCard pid="4" />
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </div>
      </main >
    </>
  )
}
