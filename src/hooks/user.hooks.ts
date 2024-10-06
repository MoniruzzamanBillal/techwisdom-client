import { followUser, unfollowUser } from "@/services/user";
import { useMutation } from "@tanstack/react-query";
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
