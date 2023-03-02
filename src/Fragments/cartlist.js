import { useContext, useEffect, useState } from "react";
import { itemListContext } from "@/lib/context";
import { useRouter } from 'next/router'
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function CartList() {
    const router = useRouter()
    const { itemList, setItemList } = useContext(itemListContext)
    const [count, setCount] = useState({})
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const saved = localStorage.getItem("cart")
        if (saved) {
            setLoading(false)
            setItemList(JSON.parse(saved))
            let newCount = {}
            JSON.parse(saved).items.map(item => {
                newCount[item.id] = item.count
            })
            setCount(newCount)
        } else {
            setLoading(false)
            setItemList({ items: [] })
        }
    }, []);

    useEffect(() => {
        if (Object.keys(itemList).length !== 0) {
            let newCount = Object.assign({}, count);
            itemList.items.map(item => {
                newCount[item.id] = item.count
            })
            setCount(newCount)
        }
    }, [itemList.items])

    const handleChange = (e) => {
        if (!isNaN(e.target.value) && e.target.value > 0) {
            setCount(prevState => {
                let newCount = Object.assign({}, prevState);
                newCount[e.target.id] = e.target.value
                return newCount
            })
            let newItemList = Object.assign({}, itemList);
            let itemKey = -1
            newItemList.items.map((item, key) => {
                if ('' + item.id === '' + e.target.id) {
                    itemKey = key
                }
            })
            if (itemKey !== -1) {
                newItemList.items[itemKey].count = e.target.value;
                setItemList(newItemList)
                localStorage.setItem("cart", JSON.stringify(newItemList))
            }
        } else if (!isNaN(e.target.value) && '' + e.target.value === '0') {
            //Remove Key if remove item
            let newCount = {}
            Object.keys(count).map(key => {
                if (key !== e.target.id) newCount[key] = count[key]
            })
            setCount(newCount)

            let newItemList = Object.assign({}, itemList);
            let itemKey = -1
            newItemList.items.map((item, key) => {
                if ('' + item.id === '' + e.target.id) {
                    itemKey = key
                }
            })
            if (itemKey !== -1) {
                newItemList.items.splice(itemKey, 1)
                setItemList(newItemList)
                localStorage.setItem("cart", JSON.stringify(newItemList))
            }
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push("/checkout")
    }

    if (isLoading || Object.keys(itemList).length === 0 || Object.keys(count).length === 0) return <span className="dropdown-item">Empty...</span>

    let totalAmount = 0
    return (
        <>
            {
                itemList.items.map((item, key) => {
                    totalAmount += item.price * item.count
                    return (
                        <span className="dropdown-item" key={key}>
                            <Link className="nav-link" href={"/item/" + item.id}>{item.name} | ${item.price}</Link>
                            <input className='number-input' type="number" id={item.id} onChange={handleChange} value={count[item.id] || ""} />
                        </span>
                    )
                })
            }
            <div>Total: ${totalAmount}</div>
            <Button className="mt-2" variant="warning" onClick={handleClick}>Checkout</Button>
        </>
    )
}