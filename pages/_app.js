import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { createClient } from "@sanity/client";


export default function App({ Component, pageProps }) {
 
  
  return (
    <>
    {/* <Navbar features={features} /> */}
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

