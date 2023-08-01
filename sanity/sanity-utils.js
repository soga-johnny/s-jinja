import { createClient, groq } from "next-sanity";
import clientConfig from './config/client.config'

export async function getPosts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]| order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      // "image": image.asset->url,
      publishedAt,
      body
    }`,
  );
}

export async function getPost( slug ) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        "image": image.asset->url,

        publishedAt,
        body
      }`,
    { slug }
  );
}
