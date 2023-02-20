import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/button';
import Card from 'react-bootstrap/card';

export default function ItemCard({ pid }) {
    useEffect(() => {
        if (!isNaN(pid)) {
            setLoading(true)
            fetch(`/api/getitem/${pid}`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                    setLoading(false)
                })
        }
    }, [])
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    if (!isNaN(pid)) {
        if (isLoading) return (
            <Card>
                <Card.Body>
                    <Card.Title>Loading</Card.Title>
                    <Card.Text>
                        Loading...
                    </Card.Text>
                    <Card.Text className="price">
                        Loading...
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        )
        if (!data) return (
            <Card>
                <Card.Body>
                    <Card.Title>No Data</Card.Title>
                    <Card.Text>
                        No Data
                    </Card.Text>
                    <Card.Text className="price">
                        No Data
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        )

        return (
            <Card>
                <Link href={"/item/" + pid} /* onClick={() => setItem(["cate-fnb", "Apple", require("./img/apple.jpg")])}*/>
                    <Card.Img variant="top" src={`${data.image}`} />
                </Link>
                <Card.Body>
                    <Link href={"/item/" + pid} className="nav-link" /* onClick={() => setItem(["cate-fnb", "Apple", require("./img/apple.jpg")])}*/>
                        <Card.Title>{data.name}</Card.Title>
                    </Link>
                    <Card.Text>
                        {data.description}
                    </Card.Text>
                    <Card.Text className="price">
                        {"$" + data.price}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        )
    }

}