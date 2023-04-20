import React from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "m5g9pmc5",
  dataset: "production",
  useCdn: false,
});

const Post = ({ blog }) => {
  const builder = imageUrlBuilder(client);
  console.log(blog.heading);

  const urlFor = (source) => builder.image(source);

  // console.log(urlFor(blog.heading.bgImage));

  const arr = blog.heading.subTitle;
  console.log(blog.heading.bgImage);

  // const imageProps = useNextSanityImage(client, blog.heading.bgImage);

  return (
    <div>
      <picture>
        <img src={urlFor(blog.heading.bgImage).url()} alt="sdxsdhgchsdgch" />
      </picture>
      {blog.heading.title}
      {arr.map((item) => {
        return <h1>{item}</h1>;
      })}
      {/* <Image {...imageProps} sizes="(max-width: 800px) 100vw, 800px"  /> */}
      djshvdshgv
      shavshgas ashgxavshs  sahgasvgh
      {blog.blogs.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <p>{item.matter}</p>
            <picture>
              <img src={item.imgUrl} alt="sdvshgv" />
            </picture>
          </div>
        );
      })}
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

  const query = `*[_type == "features" && slug.current == '${slug}'][0] {...,heading->} {...,blogs[]->}`;
  // const query = `*[_type == "features"]    `;
  const blog = await client.fetch(query);
  // const profileQuery = `*[_type == "profile"][0]`;
  // const profile = await client.fetch(profileQuery);

  console.log("rohit siva sai", blog);
  return {
    props: {
      blog,
    },
  };
};
