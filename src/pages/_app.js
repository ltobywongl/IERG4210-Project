import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import { useState } from 'react'
import { itemListContext } from '@/lib/context'

export default function App({ Component, pageProps }) {
  const [itemList, setItemList] = useState({})

  return (
    <itemListContext.Provider value={{ itemList, setItemList }}>
      <Component {...pageProps} />
    </itemListContext.Provider>
  )
}
