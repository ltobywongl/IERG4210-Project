import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Link from 'next/link'
import CartList from "./cartlist";
import { useSession, signIn, signOut } from "next-auth/react"
import { Niconne } from '@next/font/google';

export default function Navigation({ allowCart }) {
    const { data: session, status } = useSession()
    if (allowCart === undefined) allowCart = true;
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"> Menu </Navbar.Toggle>
                <Navbar.Brand>ShoppingWeb!</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" style={{ flex: "10" }}>
                        <Link className="nav-link" href="/">Home</Link>
                        <Link className="nav-link" href="/about">About</Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <Link className="dropdown-item" href="/cate/1">Personal Care & Health</Link>
                            <Link className="dropdown-item" href="/cate/2">Food & Beverages</Link>
                            <Link className="dropdown-item" href="/cate/3">Houseware</Link>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            {
                                status === "authenticated" ?
                                    <>
                                        <NavDropdown title={session.user.name} id="collasible-nav-dropdown">
                                            <Link className="dropdown-item" href="/chpwd">Change Password</Link>
                                            <Link className="dropdown-item" href="/history">Order History</Link>
                                        </NavDropdown>
                                    </> : null
                            }
                            {
                                status === "authenticated" ? <span className='nav-link click' onClick={() => signOut()}>Sign out</span> : <span className='nav-link click' onClick={() => signIn('Email')}>Sign in</span>
                            }
                            {
                                session?.user?.role === 'admin' ? <Link className="nav-link" href="/admin">Admin</Link> : null
                            }
                            {
                                (allowCart) ?
                                    <Navbar.Text className="hover-display nav-link">
                                        Shopping List
                                        <div className="hover-menu dropdown-menu">
                                            <CartList />
                                        </div>
                                    </Navbar.Text>
                                    : null
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}