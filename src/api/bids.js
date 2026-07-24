import { supabase } from "../lib/supabase";

async function placeBid(productId, bidAmount) {
  const { error } = await supabase.rpc("place_bid", {
    p_product_id: productId,
    p_bid_amount: bidAmount,
  });

  if (error) throw new Error(error.message);
}

export { placeBid };
