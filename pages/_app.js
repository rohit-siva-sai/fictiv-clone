import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { createClient } from "@sanity/client";
import { useState } from 'react';


export default function App({ Component, pageProps }) {

  const [features,setFeatures] = useState({})

  const getFeatures = (features)=>{
         setFeatures(features)
  }
 
  
  return (
    <>
    <Navbar features={features} />
    <Component {...pageProps} getFeatures={getFeatures} />
    <Footer/>
    </>
  )
}

