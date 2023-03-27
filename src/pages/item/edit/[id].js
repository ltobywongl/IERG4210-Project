import Navigation from '@/Fragments/navigation'
import Link from 'next/link'
import Head from 'next/head'
import Table from "react-bootstrap/Table"
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useSession } from "next-auth/react"
axios.defaults.baseURL = 'https://localhost:80';

function Item({ item }) {
    const router = useRouter()
    const { data: session, status } = useSession()
    const [newimage, setNewimage] = useState(null)
    if (item === undefined || item.image === undefined) return;

    const handleDelete = async (event) => {
        event.preventDefault()
        if (status === "authenticated" && session.user.role === "admin") {
            if (!confirm("Delete the product?")) {
                return;
            }
            document.getElementById('loading').className = "overlay"
            const data = {
                pid: item.pid,
            }
            const JSONdata = JSON.stringify(data)
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSONdata,
            }
            const response = await fetch('/api/deleteitem', options)
            const result = await response.json()
            document.getElementById('loading').className = "d-disabled overlay"
            alert(`Query: ${result.data}`)
            router.push({
                pathname: '/admin',
            })
        } else {
            alert("You do not have the access!")
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (status === "authenticated" && session.user.role === "admin") {
            if (!event.target.cid.value || !event.target.name.value || !event.target.price.value || !event.target.description.value) { return false }
            if (isNaN(event.target.cid.value) || isNaN(event.target.price.value)) {
                console.log("isNaN")
                return false;
            }
            if (!/^([A-z0-9 ]{1,63})$/.test(event.target.name.value)) {
                console.log("Name not passing check:", event.target.name.value)
                return false;
            }
            if (!/^([A-z0-9,. ]{1,254})$/.test(event.target.description.value)) {
                console.log("description not passing check:", event.target.description.value)
                return false
            }

            //loading
            document.getElementById('loading').className = "overlay"

            const formData = {}
            formData["cid"] = event.target.cid.value
            formData["pid"] = item.pid
            formData["name"] = event.target.name.value
            formData["price"] = event.target.price.value
            formData["description"] = event.target.description.value
            if (!newimage) {
                formData["image"] = item.image
            } else {
                const cloudinaryUpload = new FormData();
                cloudinaryUpload.append('file', newimage);
                cloudinaryUpload.append('upload_preset', 'npes3rxr');
                const data = await fetch('https://api.cloudinary.com/v1_1/da6zpc6dm/image/upload', {
                    method: 'POST',
                    credentials: "same-origin",
                    body: cloudinaryUpload
                }).then(r => r.json());
                formData["image"] = data.secure_url
            }
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }
            const response = await fetch('/api/edititem', options)
            const result = await response.json()
            document.getElementById('loading').className = "d-disabled overlay"
            alert(`Query: ${result.data}`)
            router.push({
                pathname: '/admin',
            })
        } else {
            alert("You do not have the access!")
        }
    }

    function dragOverHandler(e) {
        e.preventDefault();
    }

    function dropHandler(e) {
        e.preventDefault();

        if (e.dataTransfer.items) {
            if (e.dataTransfer.items.length === 1) {
                item = e.dataTransfer.items[0]
                if (item.kind === 'file' && (item.type === 'image/jpeg' || item.type === 'image/png' || item.type === 'image/gif')) {
                    const file = item.getAsFile()
                    let fileURL = URL.createObjectURL(file)
                    document.getElementById('product-image').srcset = ""
                    document.getElementById('product-image').src = fileURL
                    setNewimage(file)
                } else {
                    alert("Wrong file!")
                }
            }
        }
    }

    // Render the page using the data
    return (
        <>
            <Head>
                <title>{'Shopping | Edit | ' + item.name}</title>
                <meta name="description" content="For CUHK IERG4210, studentID: 1155159363" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id='loading' className='d-disabled overlay'>
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
            <Navigation />
            <div className="page">
                <div className="hierarchicalNav">
                    <Link className="nav-link underline" href="/">Home</Link>
                    {">"}
                    <Link className="nav-link underline" href={"/item/" + item.pid}>{item.name}</Link>
                    {">"}
                    <span className="nav-link underline">Edit</span>
                </div>
                <div>
                    <form onSubmit={handleDelete}>
                        <Row>
                            <Button className='m-1 p-1' type='submit' variant='danger'> Delete Product </Button>
                        </Row>
                    </form>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Button className='m-1 p-1' type='submit' variant='primary'> Submit Edited Data </Button>
                        </Row>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#Key</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='wordbreak'>
                                        PID
                                    </td>
                                    <td className='wordbreak'>
                                        <p>{item.pid}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='wordbreak'>
                                        CID
                                    </td>
                                    <td className='wordbreak'>
                                        <input name="cid" type="number" defaultValue={item.cid} required />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='wordbreak'>
                                        Name
                                    </td>
                                    <td className='wordbreak'>
                                        <input name="name" type="text" pattern="[A-z0-9 ]{1,63}" title="name should be digits (0 to 9) or alphabets (a to z), length [1, 63]." defaultValue={item.name} required />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='wordbreak'>
                                        Price
                                    </td>
                                    <td className='wordbreak'>
                                        <input name="price" type="number" defaultValue={item.price} required />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='wordbreak'>
                                        Description
                                    </td>
                                    <td className='wordbreak'>
                                        <input name="description" type="text" pattern="[A-z0-9,. ]{1,254}" title="description should be digits (0 to 9) or alphabets (a to z) or (,.), length [1, 254]." defaultValue={item.description} required />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='wordbreak'>
                                        Image
                                    </td>
                                    <td className='wordbreak'>
                                        <div id="drop_zone" onDrop={dropHandler} onDragOver={dragOverHandler}>
                                            <p>Drag an image to this drop zone.</p>
                                        </div>
                                        <Image id='product-image' src={`${item.image}`} width={200} height={200} alt="product-image"></Image>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </form>
                </div>
            </div>
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
                item: { id: '-1', name: 'Not Found', cate: 'cate-notfound', price: '0', desc: 'Not found', image: '/' }
            }
        }
    }
}

export default Item