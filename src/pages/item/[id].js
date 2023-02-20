import Navigation from '@/Fragments/navigation'
import Link from 'next/link'
import Head from 'next/head'
import { Button, Col, Container, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000';

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
            <div className="page">
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
                                <input type="number" defaultValue={1} />
                                <Button className="ms-1" variant="warning">Add to cart</Button>
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