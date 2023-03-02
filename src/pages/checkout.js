import { useContext, useEffect, useState } from "react";
import { itemListContext } from "@/lib/context";
import { useRouter } from 'next/router'
import Navigation from "@/Fragments/navigation";
import Head from 'next/head'
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function CartList() {
    const router = useRouter()
    const { itemList, setItemList } = useContext(itemListContext)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const saved = localStorage.getItem("cart")
        if (saved) {
            setItemList(JSON.parse(saved))
        }
        setLoading(false)
    }, []);

    if (isLoading || Object.keys(itemList).length === 0) return <span className="dropdown-item">Empty...</span>

    let totalAmount = 0
    return (
        <>
            <Head>
                <title>Shopping</title>
                <meta name="description" content="For CUHK IERG4210, studentID: 1155159363" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="body">
                <Navigation allowCart={false} />
                <div className='page'>
                    <div className="hierarchicalNav">
                        <span className="nav-link underline">Checkout</span>
                    </div>
                    <h1 className='h1'><b>Checkout</b></h1>
                    {
                        itemList.items.map((item) => {
                            totalAmount += item.price * item.count
                            return (
                                <div className="checkout">{item.name} | ${item.price} | x{item.count}</div>
                            )
                        })
                    }
                    <hr />
                    <div className="checkout">Total: {totalAmount}</div>
                </div>
            </main>

            <Button className="mt-2" variant="warning">Payment</Button>
        </>
    )
}