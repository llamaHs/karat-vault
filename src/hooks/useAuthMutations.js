import { useMutation } from "@tanstack/react-query";
import { loginWithUsername, signupWithEmail } from "../api/auth";

function useSignup() {
  return useMutation({
    mutationFn: signupWithEmail,
  });
}

function useLogin() {
  return useMutation({
    mutationFn: loginWithUsername,
  });
}

export { useSignup, useLogin };
