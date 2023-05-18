import { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import CardGroup from 'react-bootstrap/CardGroup';
import { Inter } from '@next/font/google'
import Navigation from '@/Fragments/navigation';
import ItemCard from '@/Fragments/itemcard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState(null)
  const [list, setList] = useState([])
  const [isLoading, setLoading] = useState(false)
  const getDocHeight = () => {
    let D = document
    return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight,
      D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight
    )
  }
  const addToList = (data) => {
    let item = [];
    item[0] = data[Math.floor(Math.random() * data.length)].pid
    item[1] = data[Math.floor(Math.random() * data.length)].pid
    item[2] = data[Math.floor(Math.random() * data.length)].pid
    setList(list => [...list, [item[0], item[1], item[2]]])
  }

  useEffect(() => {
    setLoading(true)
    fetch(`/api/getproductids`)
      .then((res) => res.json())
      .then((resdata) => {
        setData(resdata)
        setLoading(false)
        addToList(resdata)
        addToList(resdata)
      })
  }, [])

  const onScroll = () => {
    if (data) {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
      if (bottom) {
        addToList(data)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [data])

  if (isLoading || !data) return (
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
          <h3 className='h3'>Loading...</h3>
        </div>
      </main >
    </>
  )

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
          <div>
            {
              list.map((cardGrp, keyList) => {
                return (
                  <CardGroup key={"List" + keyList}>
                    {
                      cardGrp.map((id, keyCard) => {
                        return <ItemCard key={"Card" + keyCard} pid={id} />
                      })
                    }
                  </CardGroup>
                )
              })
            }
          </div>
        </div>
      </main >
    </>
  )
}
