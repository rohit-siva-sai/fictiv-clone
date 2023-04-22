import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { createClient } from "@sanity/client";


export default function App({ Component, pageProps }) {
  // console.log(features);
  
  return (
    <>
    {/* <Navbar features={features} /> */}
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

// export async function getServerSideProps(context) {
//   const client = createClient({
//     projectId: "m5g9pmc5",
//     dataset: "production",
//     useCdn: false,
//   });

//   // const query = '*[_type == "blog"]';
//   // const blogs = await client.fetch(query);
//   // return {
//   //   props: {
//   //     blogs,
//   //   },
//   // };

//   const query = '*[_type == "features"]';
//   const features = await client.fetch(query);
//   // const profileQuery = `*[_type == "profile"][0]`;
//   // const profile = await client.fetch(profileQuery);
//   console.log(features);

//   return {
//     props: {
//       features,
//     },
//   };
// }
