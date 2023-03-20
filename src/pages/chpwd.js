import Navigation from '@/Fragments/navigation';
import Link from 'next/link'
import Head from 'next/head'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

export default function Chpwd() {
    const { data: session, status } = useSession()
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === "authenticated") {
            if (typeof e.target.oldPassword.value === 'string' && typeof e.target.password.value === 'string' && typeof e.target.confirmPassword.value === 'string') {
                let credentials = {
                    email: session.user.name,
                    password: e.target.oldPassword.value
                }
                const res = await fetch(`http://localhost/api/login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
                console.log(user)
                if (res.ok && user?.name === session?.user?.name) {
                    const pwdRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/
                    if (pwdRegEx.test(e.target.password.value)) {
                        if (e.target.confirmPassword.value === e.target.password.value) {
                            if (e.target.password.value !== e.target.oldPassword.value) {
                                //Change pwd
                                document.getElementById('submitButton').disabled = true;
                                credentials.id = user.id
                                credentials.newPassword = e.target.password.value
                                const res = await fetch(`http://localhost/api/chpwd`, {
                                    method: 'POST',
                                    body: JSON.stringify(credentials),
                                    headers: { "Content-Type": "application/json" }
                                })
                                const result = await res.json()
                                alert(result.msg)
                                router.push("/");
                                return true;
                            } else {
                                alert("New password cannot be the same as old password!")
                                return false
                            }
                        } else {
                            alert("New password and confirm password mismatch!")
                            return false
                        }
                    } else {
                        alert("New password not meeting requirement!")
                        return false
                    }
                } else {
                    alert("Wrong old password!")
                }
            } else {
                alert("Input format error!")
                return false
            }
        } else {
            alert("Login first!")
            return false
        }
    }

    return (
        <>
            <Head>
                <title>Shopping | About</title>
                <meta name="description" content="For CUHK IERG4210, studentID: 1155159363" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <div className="page body">
                <div className="hierarchicalNav">
                    <Link className="nav-link underline" href="/">Home</Link>
                    {">"}
                    <span className="nav-link underline">Change Password</span>
                </div>
                <h1 className='h1'><b>Change Password</b></h1>
                <form onSubmit={handleSubmit}>
                    <div className="inputDiv">
                        <label className="inputLabel" htmlFor="password">Old Password</label>
                        <input type="password" id="oldPassword" name="oldPassword" required />
                    </div>

                    <div className="inputDiv">
                        <label className="inputLabel" htmlFor="password">New Password (8-32 characters, at least one uppercase letter, lowercase letter, number and special character)</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <div className="inputDiv">
                        <label className="inputLabel" htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" />
                    </div>

                    <div>
                        <button type="submit" id='submitButton' className='submitButton'>
                            <span>Continue</span>
                        </button>
                    </div>
                </form>
            </div >
        </>
    )
}

Chpwd.auth = {
    role: "user"
}