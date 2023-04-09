import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '@/Fragments/navigation';
import Table from 'react-bootstrap/Table';
import { useSession } from "next-auth/react"

function History() {
    const [orderList, setOrderList] = useState(undefined)
    const [isLoading, setLoading] = useState(false)
    const { data: session, status } = useSession()

    useEffect(() => {
        setLoading(true)
        if (status === "authenticated") {
            fetch(`/api/get-orders/${session.user.id}`)
            .then((res) => res.json())
            .then((data) => {
                setOrderList(data)
                setLoading(false)
            })
        }
    }, [status])

    if (isLoading || !orderList || status !== "authenticated") return (
        <>
            <Head>
                <title>Shopping | History</title>
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
                        <span className="nav-link underline">Order History</span>
                    </div>
                    <h1 className='h1'><b>Order History</b></h1>
                </div>
            </main >
        </>
    )

    return (
        <>
            <Head>
                <title>Shopping | Admin</title>
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
                        <span className="nav-link underline">Order History</span>
                    </div>
                    <h1 className='h1'><b>Order History</b></h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>User ID</th>
                                <th>Items</th>
                                <th>$Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderList ? orderList.map((details, i) => {
                                    return (
                                        <tr key={"detail " + i}>
                                            <td className='wordbreak'>
                                                {details.orderid}
                                            </td>
                                            <td className='wordbreak'>
                                                {details.userid}
                                            </td>
                                            <td className='wordbreak'>
                                                {
                                                    JSON.parse(details.items).details.map((item, j) => {
                                                        return (
                                                            <p key={j}>
                                                                <b>{item.name}</b>,<br />
                                                                Price: {item.price} Quantity: {item.quantity}
                                                            </p>
                                                        )
                                                    })
                                                }
                                            </td >
                                            <td className='wordbreak'>
                                                ${details.amount}
                                            </td>
                                        </tr>
                                    )
                                }) : null
                            }
                        </tbody>
                    </Table>
                </div>
            </main >
        </>
    )
}

export default History