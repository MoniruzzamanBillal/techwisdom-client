import {
  followUser,
  getAllUsers,
  getSpecificUser,
  unfollowUser,
} from "@/services/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

type TFollowRequest = {
  followerId: string;
  followedUserId: string;
};

//   ! for following a user
export const useFollowPerson = () => {
  return useMutation({
    mutationKey: ["follow-user"],
    mutationFn: async (payload: TFollowRequest) => await followUser(payload),
    onSuccess: () => {
      toast.success("User followed successfully !!!");
    },
  });
};

//   ! for unfollowing a user
export const useUnfollowPerson = () => {
  return useMutation({
    mutationKey: ["unfollow-user"],
    mutationFn: async (payload: TFollowRequest) => await unfollowUser(payload),
    onSuccess: () => {
      toast.success("User unfollowed successfully !!!");
    },
  });
};

// ! for getting single user
export const useSpecificUser = (id: string) => {
  return useQuery({
    queryKey: ["get-specific-user", id],
    queryFn: async ({ queryKey }) => {
      const userId = queryKey[1];

      return await getSpecificUser(userId);
    },
  });
};

// ! for getting all user
export const useGetAllUser = () => {
  return useQuery({
    queryKey: ["get-all-user"],
    queryFn: async () => {
      return await getAllUsers();
    },
  });
};
