import Image from "next/image";
import { Inter } from "next/font/google";
// import  SanityClient  from "next-sanity-client";
import { createClient } from "@sanity/client";
import Link from "next/link";
import Homepage from "@/components/home/homepage";
import Capability from "@/components/home/capability";
import Global from "@/components/home/global";
import Workflow from "@/components/home/workflow";
import Dependable from "@/components/home/dependable";
import Guided from "@/components/home/guided";
import Premium from "@/components/home/premium";
import Scrollview from "@/components/home/scrollview";
import Robotics from "@/components/home/robotics";
import Digital from "@/components/home/digital";
import Getstarted from "@/components/home/getstarted";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({ features }) {
  return (
    <main className="bg-white  overflow-hidden ">
      <Homepage />
      <Capability />
      <Global />
      <Workflow />
      <Dependable/>
      <Guided/>
      <Premium/>
      <Scrollview/>
      <Robotics/>
      <Digital/>
      <Getstarted/>
    </main>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "m5g9pmc5",
    dataset: "production",
    useCdn: false,
  });

  // const query = '*[_type == "blog"]';
  // const blogs = await client.fetch(query);
  // return {
  //   props: {
  //     blogs,
  //   },
  // };

  const query = '*[_type == "features"]';
  const features = await client.fetch(query);
  // const profileQuery = `*[_type == "profile"][0]`;
  // const profile = await client.fetch(profileQuery);
  console.log(features);

  return {
    props: {
      features,
    },
  };
}
