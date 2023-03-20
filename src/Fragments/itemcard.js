import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { itemListContext } from '@/lib/context';

export default function ItemCard({ pid }) {
    const [data, setData] = useState(null)
    const [count, setCount] = useState(1)
    const [isLoading, setLoading] = useState(false)
    const { itemList, setItemList } = useContext(itemListContext)
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

    const addToCart = (newCartItemCount) => {
        if (isNaN(newCartItemCount)) return false;
        const saved = localStorage.getItem("cart")
        let objSaved = JSON.parse(saved)
        if (objSaved && objSaved.items) {
            //Check if pid exist
            let existed = false;
            objSaved["items"].map((item) => {
                if (item.id === pid) existed = true
            })
            if (!existed) objSaved["items"][objSaved["items"].length] = {"id": pid, "name": data.name, "count": newCartItemCount, "price": data.price};
        } else {
            objSaved = {"items": [{"id": pid, "name": data.name, "count": newCartItemCount, "price": data.price}]}
        }
        setItemList(objSaved)
        localStorage.setItem("cart", JSON.stringify(objSaved))
    }

    const handleChange = (e) => {
        setCount(e.target.value)
    }

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
                    <input className='number-input' type="number" onChange={handleChange} value={count} />
                    <Button variant="primary" onClick={() => addToCart(count)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        )
    }

}