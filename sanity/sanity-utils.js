import { createClient, groq } from "next-sanity";
// import { Project } from "@/types/Project";
import clientConfig from './config/client.config'
// import { Page } from "@/types/Page";

export async function getPosts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
      _id,
    //   _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      publishedAt,
      body
    }`,
  );
}

export async function getPost( slug ) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
      //   _createdAt,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        publishedAt,
        body
      }`,
    { slug }
  );
}
