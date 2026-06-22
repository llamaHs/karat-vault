import { supabase } from "../lib/supabase";

async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw new Error(error.message);

  return data;
}

export { getProducts };
