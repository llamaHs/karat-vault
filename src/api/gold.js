// Can't use hook inside api file

async function getGoldPrice(currency) {
  const res = await fetch(`https://api.gold-api.com/price/XAU/${currency}`);

  if (!res.ok) throw new Error("Failed to fetch gold price");

  const data = await res.json();

  return data;
}

export { getGoldPrice };
