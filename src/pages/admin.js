import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import Navigation from '@/Fragments/navigation';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import { useSession } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

function Admin({ items }) {
    const { data: session, status } = useSession()
    const router = useRouter()
    if (items === undefined) return

    const handleNewProd = async (event) => {
        event.preventDefault()
        if (status === "authenticated" && session.user.role === "admin") {
            if (!confirm("Add a new product?")) {
                return;
            }
            const options = {
                method: 'POST'
            }
            const response = await fetch('/api/newitem', options)
            const result = await response.json()
            alert(`Query: ${result.data}`)
            router.reload()
        } else {
            alert("You do not have the access!")
        }
    }

    return (
        <>
            <Head>
                <title>Shopping | Admin</title>
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
                        <span className="nav-link underline">Admin</span>
                    </div>
                    <h1 className='h1'><b>Admin Panel</b></h1>
                    <Button variant='primary' onClick={handleNewProd}>Create New Product</Button>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>#PID</th>
                                <th>CID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>description</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, i) => {
                                    return (
                                        <tr key={"detail " + i}>
                                            <td className='wordbreak'>
                                                <Link className="nav-link underline" href={"/item/edit/" + item.pid}>Edit</Link>
                                            </td>
                                            <td className='wordbreak'>
                                                {item.pid}
                                            </td>
                                            <td className='wordbreak'>
                                                {item.cid}
                                            </td>
                                            <td className='wordbreak'>
                                                {item.name}
                                            </td>
                                            <td className='wordbreak'>
                                                {item.price}
                                            </td>
                                            <td className='wordbreak'>
                                                {item.description}
                                            </td>
                                            <td className='wordbreak'>
                                                <Image src={`${item.image}`} width={100} alt="logo"></Image>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </main >
        </>
    )
}

export async function getServerSideProps() {
    try {
        const response = await axios.get(`/api/getproducts`)
        return {
            props: {
                items: response.data
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

Admin.auth = {
    role: "admin"
}

export default Admin