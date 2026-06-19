import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProfile, getProfile, updateProfile } from "../api/profiles";

function useAddProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProfile,
    // onSuccess -> global level
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });
}

function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
}

function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });
}

export { useAddProfile, useProfile, useUpdateProfile };
