import { useState, useContext } from 'react'
import Navigation from '@/Fragments/navigation'
import Link from 'next/link'
import Head from 'next/head'
import { Button, Col, Container, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { itemListContext } from '@/lib/context'
axios.defaults.baseURL = 'https://secure.s59.ierg4210.ie.cuhk.edu.hk/';

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

function Item({ item }) {
    const [count, setCount] = useState(1)
    const { itemList, setItemList } = useContext(itemListContext)
    const handleChange = (e) => {
        setCount(e.target.value)
    }
    const addToCart = (newCartItemCount) => {
        if (isNaN(newCartItemCount)) return false;
        const saved = localStorage.getItem("cart")
        let objSaved = JSON.parse(saved)
        if (objSaved && objSaved.items) {
            //Check if pid exist
            let existed = false;
            objSaved["items"].map((mapItem) => {
                if (mapItem.id === item.pid) existed = true
            })
            if (!existed) objSaved["items"][objSaved["items"].length] = {"id": item.pid, "name": item.name, "count": newCartItemCount, "price": item.price};
        } else {
            objSaved = {"items": [{"id": item.pid, "name": item.name, "count": newCartItemCount, "price": item.price}]}
        }
        setItemList(objSaved)
        localStorage.setItem("cart", JSON.stringify(objSaved))
    }
    // Render the page using the data
    if (item.image === undefined) item = { id: '-1', name: 'Not Found', cate: 'cate-notfound', price: '0', desc: 'Not found', image: ""};
    return (
        <>
            <Head>
                <title>{'Shopping | ' + item.name}</title>
                <meta name="description" content="For CUHK IERG4210, studentID: 1155159363" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <div className="page body">
                <div className="hierarchicalNav">
                    <Link className="nav-link underline" href="/">Home</Link>
                    {">"}
                    <Link className="nav-link underline" href={"/" + CidToCate[item.cid]}>{dict[CidToCate[item.cid]]}</Link>
                    {">"}
                    <span className="nav-link underline">{item.name}</span>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={`${item.image}`} />
                            </Card>
                        </Col>
                        <Col>
                            <h2>{item.name}</h2>
                            <h3>In Stock</h3>
                            <p>{item.description}</p>
                            <div className="price"><b>{'$' + item.price}</b></div>
                            <div className="Row">
                                <input className='number-input' type="number" onChange={handleChange} value={count} />
                                <Button className='ms-1' variant="warning" onClick={() => addToCart(count)}>Add to Cart</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    // Fetch data for the page based on the ID
    try {
        const response = await axios.get(`/api/getitem/${id}`)
        return {
            props: {
                item: response.data
            },
        }
    } catch (e) {
        console.log('warning getting api response:', e)
        return {
            props: {
                item: { id: '-1', name: 'Not Found', cate: 'cate-notfound', price: '0', desc: 'Not found' }
            }
        }
    }
}

export default Item