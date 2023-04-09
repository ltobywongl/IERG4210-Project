import { useContext, useEffect, useState } from "react";
import { itemListContext } from "@/lib/context";
import { useRouter } from 'next/router'
import Navigation from "@/Fragments/navigation";
import Head from 'next/head'
import { PayPalButton } from "react-paypal-button-v2";
import { useSession } from "next-auth/react"

export default function CartList() {
    const router = useRouter()
    const { itemList, setItemList } = useContext(itemListContext)
    const [isLoading, setLoading] = useState(true)
    const { data: session, status } = useSession()

    useEffect(() => {
        setLoading(true)
        const saved = localStorage.getItem("cart")
        if (saved) {
            setItemList(JSON.parse(saved))
        }
        setLoading(false)
    }, []);

    if (isLoading || Object.keys(itemList).length === 0) return <span className="dropdown-item">Empty...</span>

    if (status !== "authenticated") return (
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
                    <h1 className='h1'><b>Please Login To Checkout!</b></h1>
                </div>
            </main>
        </>
    )

    let totalAmount = 0
    let itemsP = []
    let itemsS = []
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
                        itemList.items.map((item, key) => {
                            totalAmount += item.price * item.count
                            itemsS.push({
                                name: item.name,
                                price: item.price,
                                quantity: item.count,
                            })
                            itemsP.push({
                                name: item.name,
                                unit_amount: {
                                    currency_code: "USD",
                                    value: item.price,
                                },
                                quantity: item.count,
                            })
                            return (
                                <div className="checkout" key={"checkout" + key}>{item.name} | ${item.price} | x{item.count}</div>
                            )
                        })
                    }
                    <hr />
                    <div className="checkout">Total: ${totalAmount}</div>
                    <div className="center-div">
                        <PayPalButton
                            fundingSource="paypal"
                            amount={totalAmount}
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            currency_code: "USD",
                                            value: totalAmount,
                                            breakdown: {
                                                item_total: {
                                                    currency_code: "USD",
                                                    value: totalAmount
                                                }
                                            }
                                        },
                                        items: itemsP,
                                    }]
                                });
                            }}
                            onApprove={async (data, actions) => {
                                await fetch(`/api/paypal-complete`, {
                                    method: "POST",
                                    body: JSON.stringify({
                                        orderId: data.orderID,
                                        userId: session.user.id,
                                        items: JSON.stringify({ details: itemsS }),
                                        amount: totalAmount
                                    }),
                                    headers: { "Content-Type": "application/json" },
                                });
                                setItemList({})
                                localStorage.clear();
                                return router.push('/')
                            }}
                            options={{
                                clientId: process.env.CLIENT_ID
                            }}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}