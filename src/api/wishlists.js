import { supabase } from "../lib/supabase";

async function getMyWishlists() {
  const { data, error } = await supabase
    .from("wishlists")
    .select("*, products(*)");

  if (error) throw new Error(error.message);

  return data;
}

async function addWishlist(productId) {
  const { data, error } = await supabase
    .from("wishlists")
    .insert({ productId })
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

async function deleteWishlist(productId) {
  const { data, error } = await supabase
    .from("wishlists")
    .delete()
    .eq("productId", productId)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export { getMyWishlists, addWishlist, deleteWishlist };
