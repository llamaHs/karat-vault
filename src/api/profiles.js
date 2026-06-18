import { supabase } from "../lib/supabase";

async function addProfile(profile) {
  const { data, error } = await supabase
    .from("profiles")
    .insert([profile])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

async function getEmailByUsername(username) {
  const { data, error } = await supabase
    .from("profiles")
    .select("email")
    .eq("username", username)
    .single();
  // profile table 에서 usename이 사용자가 입력한 username과 같은 row를 찾아서 email만 가져옴. + array 대신 object 하나만 반환(single)
  // 결과가 하나일 것이 확실한 경우 .single() 사용

  if (error) throw new Error("Invalid username or password.");

  return data.email;
}

async function getProfile() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw new Error(userError.message);
  if (!user) throw new Error("User is not logged in");

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export { addProfile, getEmailByUsername, getProfile };
