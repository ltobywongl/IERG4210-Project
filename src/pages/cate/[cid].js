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
    1: 'cate-pcnh',
    2: 'cate-fnb',
    3: 'cate-h'
}

function Cate({ items }) {
    // Render the page using the data
    if (items === undefined) return

    return (
        <>
            <Head>
                <title>{`Shopping | ${dict[CidToCate[items[0].cid]]}`}</title>
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
                        <span className="nav-link underline">{`${dict[CidToCate[items[0].cid]]}`}</span>
                    </div>
                    <h1 className='h1'><b>{`${dict[CidToCate[items[0].cid]]}`}</b></h1>
                    {
                        (function () {
                            let rows = [];
                            let len = items.length
                            for (let i = 0; i * 4 < len; i++) {
                                let currentGroup = []
                                for (let j = 0; j < 4 && i * 4 + j < len; j++) {
                                    currentGroup.push(items[i * 4 + j])
                                    //console.log("item", items[i * 4 + j])
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
    try {
        const response = await axios.get(`/api/getcateproducts/${cid}`)
        return {
            props: {
                items: response.data,
                key: response.data[0].cid
            },
        }
    } catch (e) {
        console.log('warning getting api response:', e)
        return {
            props: {
                items: {}
            }
        }
    }
}

export default Cate