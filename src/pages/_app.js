import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import { useState } from 'react'
import { itemListContext } from '@/lib/context'
import { SessionProvider } from "next-auth/react"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [itemList, setItemList] = useState({})

  return (
    <SessionProvider session={session}>
      <itemListContext.Provider value={{ itemList, setItemList }}>
        {Component.auth?.role === 'admin' ? (
          <AdminAuth>
            <Component {...pageProps} />
          </AdminAuth>
        ) : 
        Component.auth?.role === 'user'? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </itemListContext.Provider>
    </SessionProvider>
  )
}

//For all logged in user
function Auth({ children }) {
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}

function AdminAuth({ children }) {
  const { data: session, status } = useSession({ required: true })
  const router = useRouter()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (session.user.role === 'admin') {
    return children
  }

  router.push("/");
  return null;
}