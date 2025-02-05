import { client } from "@/sanity/client";



export async function getData(query:string) {
  // const query = `*[_type == 'product']`;
  return await client.fetch(query);  
}

export async function getSingleProduct(title: string | string[] | undefined) {
  if (!title) {
    throw new Error("Title is required");
  }

  // Ensure `title` is a string (handle array case)
  const titleString = Array.isArray(title) ? title[0] : title;

  // Properly format the query with escaped quotes
  const query = `*[_type == "product" && title == "${titleString}"][0]`;

  try {
    const product = await client.fetch(query);
    return product;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw new Error("Failed to fetch product");
  }
}

export function makeDescriptionShort(desc:string,length:number){
  const trimmed = desc.substring(0,length);
  return trimmed + "...";
}