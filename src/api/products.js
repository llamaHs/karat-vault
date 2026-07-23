import { supabase } from "../lib/supabase";

async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw new Error(error.message);

  return data;
}

async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

async function createProduct(product) {
  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

// save image to Supabase bucket
async function uploadProductImage(file) {
  const extension = file.name.split(".").pop();

  const fileName = `${crypto.randomUUID()}.${extension}`;

  const { error } = await supabase.storage
    .from("product-images")
    .upload(fileName, file);

  if (error) throw new Error(error.message);

  const { data } = supabase.storage
    .from("product-images")
    .getPublicUrl(fileName);

  return data.publicUrl;
}

export { getProducts, getProduct, createProduct, uploadProductImage };
