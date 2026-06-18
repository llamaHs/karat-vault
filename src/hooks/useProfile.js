import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProfile, getProfile } from "../api/profiles";

function useAddProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProfile,
    // onSuccess -> global level
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profiles"],
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

export { useAddProfile, useProfile };
