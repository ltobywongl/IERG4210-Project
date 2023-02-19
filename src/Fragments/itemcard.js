import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ItemCard({ pid }) {
    function toBase64(arr) {
        return btoa(
            arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
    }

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    if (!isNaN(pid)) {
        useEffect(() => {
            setLoading(true)
            fetch(`/api/getitem/${pid}`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                    setLoading(false)
                })
        }, [])

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
                <Link href={"/item/"+pid} /* onClick={() => setItem(["cate-fnb", "Apple", require("./img/apple.jpg")])}*/>
                    <Card.Img variant="top" src={`data:image/png;base64,${toBase64(data.image.data)}`} />
                </Link>
                <Card.Body>
                    <Link href={"/item/"+pid} className="nav-link" /* onClick={() => setItem(["cate-fnb", "Apple", require("./img/apple.jpg")])}*/>
                        <Card.Title>Apple</Card.Title>
                    </Link>
                    <Card.Text>
                        Fresh and crispy apple.
                    </Card.Text>
                    <Card.Text className="price">
                        $10
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        )
    }

}