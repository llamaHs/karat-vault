import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProfile } from "../api/profiles";

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

export { useAddProfile };
