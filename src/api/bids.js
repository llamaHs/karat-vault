import { supabase } from "../lib/supabase";

async function placeBid(productId, bidAmount) {
  const { error } = await supabase.rpc("place_bid", {
    p_product_id: productId,
    p_bid_amount: bidAmount,
  });

  if (error) throw new Error(error.message);
}

async function getMyBids() {
  const { data, error } = await supabase.from("bids").select("*, products(*)");

  if (error) throw new Error(error.message);

  const highestBids = new Map();

  data.forEach((bid) => {
    const existingBid = highestBids.get(bid.productId);

    if (!existingBid || bid.amount > existingBid.amount) {
      highestBids.set(bid.productId, bid);
    }
  });

  return [...highestBids.values()];
}

export { placeBid, getMyBids };
