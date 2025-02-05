//Functions to fetch data from sanity
import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"


export interface ProductImageType {
    asset:{
      _ref:string
    }
    _type?:"image"
  }

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2025-01-27',
  token: process.env.SANITY_API_TOKEN
})

const builder = imageUrlBuilder(client);

export function urlFor(source:ProductImageType){
    return builder.image(source).url();
}