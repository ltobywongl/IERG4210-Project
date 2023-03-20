import Navigation from '@/Fragments/navigation';
import Link from 'next/link'
import Head from 'next/head'

export default function About() {
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
                    <span className="nav-link underline">About</span>
                </div>
                <h2><b>Shopping Site</b></h2>
                <h3>by 1155159363</h3>
                <h3>Built with Next.js</h3>
                <h3>Phase 4</h3>
            </div >
        </>
    )
}