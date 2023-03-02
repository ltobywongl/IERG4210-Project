import Navigation from '@/Fragments/navigation'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCard from '@/Fragments/itemcard';
axios.defaults.baseURL = 'http://localhost:80';

const dict = {
    "cate-pcnh": "Personal Care & Health",
    "cate-fnb": "Food & Beverages",
    "cate-h": "Houseware",
    "cate-notfound": "Not Found",
}

const CidToCate = {
    0: 'cate-notfound',
    1: 'cate-pcnh',
    2: 'cate-fnb',
    3: 'cate-h'
}

function Cate({ data }) {
    // Render the page using the data
    if (data.items === undefined) return
    const items = data.items
    return (
        <>
            <Head>
                <title>{`Shopping | ${dict[CidToCate[data.key]]}`}</title>
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
                        <span className="nav-link underline">{`${dict[CidToCate[data.key]]}`}</span>
                    </div>
                    <h1 className='h1'><b>{`${dict[CidToCate[data.key]]}`}</b></h1>
                    {
                        (function () {
                            let rows = [];
                            let len = items.length
                            for (let i = 0; i * 4 < len; i++) {
                                let currentGroup = []
                                for (let j = 0; j < 4 && i * 4 + j < len; j++) {
                                    currentGroup.push(items[i * 4 + j])
                                }
                                rows.push(
                                    <CardGroup key={"CardGroup" + i}>
                                        {
                                            currentGroup.map((item, itemkey) => {
                                                return (
                                                    <ItemCard key={"Item" + itemkey} pid={item.pid} />
                                                )
                                            })
                                        }
                                    </CardGroup>
                                )
                            }
                            return rows
                        }())
                    }
                </div>
            </main >
        </>
    )
}

export async function getServerSideProps(context) {
    const { cid } = context.query
    if (cid > 3 || cid < 1) {
        const data = { items: [{}], key: 0 }
        return {
            props: {
                data
            },
        }
    }
    try {
        const response = await axios.get(`/api/getcateproducts/${cid}`)
        const data = { items: response.data, key: cid }
        return {
            props: {
                data
            },
        }
    } catch (e) {
        console.log('warning getting api response:', e)
        const data = { items: [{}], key: 0 }
        return {
            props: {
                data
            }
        }
    }
}

export default Cate