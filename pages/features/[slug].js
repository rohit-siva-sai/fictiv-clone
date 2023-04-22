import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "@/components/navbar";
import Heading from "@/components/capabilities/heading";
import Blogs from "@/components/capabilities/blogs";
import Services from "@/components/capabilities/services";
import CaseStudy from "@/components/capabilities/caseStudy";
import Promise from "@/components/capabilities/promise";
import Resources from "@/components/capabilities/resources";

const client = createClient({
  projectId: "m5g9pmc5",
  dataset: "production",
  useCdn: false,
});

const Post = ({ blog, features }) => {
  const heading = blog.heading;
  const blogs = blog.blogs;
  const services = blog.services;
  const caseStudy = blog.caseStudy
  const promise = blog.promise
  const resources = blog.resources

  // useEffect(()=>{
  //   setHeading(blog.heading)
  //   console.log(heading);

  //   setBlogs(blog.blogs)
  // })

  console.log(heading, "rohit siva sai");

  const builder = imageUrlBuilder(client);
  // console.log(blog.heading);

  console.log("aoooooo", features);

  const urlFor = (source) => builder.image(source);

  const arr = blog.heading.subTitle;
  console.log(blog.heading.bgImage);

  // const imageProps = useNextSanityImage(client, blog.heading.bgImage);

  return (
    <div className="overflow-hidden" >
      <Navbar features={features} />
      <div
        style={{
          backgroundImage: `url(${urlFor(heading.bgImage).url()})`,
        }}
        className="group  flex  items-center bg-cover w-full h-[530px]  md:h-[460px] bg-right  md:bg-center bg-no-repeat "
      >
        <Heading
          title={heading.title}
          subTitle={heading.subTitle}
          bgImage={heading.bgImage}
        />
      </div>
      <Blogs blogs={blogs} />
      <Services services={services} />
      <CaseStudy caseStudy={caseStudy} />
      <Promise promise={promise} />
      <Resources resources={resources}  /> 
      {/* <Image {...imageProps} sizes="(max-width: 800px) 100vw, 800px"  /> */}
      {/* djshvdshgv shavshgas ashgxavshs sahgasvgh */}
      {/* {blog.blogs.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <p>{item.matter}</p>
            <picture>
              <img src={item.imgUrl} alt="sdvshgv" />
            </picture>
          </div>
        );
      })} */}
    </div>
  );
};

export default Post;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  console.log(slug);
  console.log();

  // const query = `*[_type == "blog"  && Slug.current == '${slug}']`;
  // const query = `*[_type == "blog"  && slug.current == '${slug}']`;
  // const blog = await client.fetch(query);
  // console.log(blog);
  // return {
  //   props: {
  //     blog,
  //   },
  // };
  const query2 = `*[_type == "features"]`;
  const features = await client.fetch(query2);

  const query = `*[_type == "features" && slug.current == '${slug}'][0] {...,heading->} {...,blogs[]->} {...,services[]->} {...,caseStudy->}
  {...,promise->} {...,resources[]->}`;
  // const query = `*[_type == "features"]    `;
  const blog = await client.fetch(query);

  // const profileQuery = `*[_type == "profile"][0]`;
  // const profile = await client.fetch(profileQuery);

  // console.log("rohit siva sai", blog);
  return {
    props: {
      blog,
      features,
    },
  };
};
