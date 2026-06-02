import { supabase } from "../lib/supabase";
import { getEmailByUsername } from "./profiles";

async function signupWithEmail({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  if (!data.user) throw new Error("Signup failed. Please try again.");

  return data.user;
}

async function loginWithUsername({ username, password }) {
  const email = await getEmailByUsername(username);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Invalid username or password");

  return data;
}

export { signupWithEmail, loginWithUsername };
