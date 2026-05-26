import { supabase } from "../lib/supabase";

async function addProfile(profile) {
  const { data, error } = await supabase
    .from("profiles")
    .insert([profile])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export { addProfile };
