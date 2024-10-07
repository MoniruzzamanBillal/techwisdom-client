import {
  blockUser,
  deleteUser,
  followUser,
  getAllAdminUsers,
  getAllUsers,
  getSpecificUser,
  unblockUser,
  unfollowUser,
} from "@/services/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

// ! for getting all admin user
export const useGetAllAdminUser = () => {
  return useQuery({
    queryKey: ["get-all-admin-user"],
    queryFn: async () => {
      return await getAllAdminUsers();
    },
  });
};

// ! for blocking a user
export const useBlockUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["block-user"],
    mutationFn: async (id: string) => await blockUser(id),
    onSuccess: () => {
      toast.success("User blocked successfully !!!");
      queryClient.invalidateQueries({ queryKey: ["get-all-user"] });
    },
  });
};

// ! for unblocking a user
export const useUnblockUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["unblock-user"],
    mutationFn: async (id: string) => await unblockUser(id),
    onSuccess: () => {
      toast.success("User unblocked successfully !!!");
      queryClient.invalidateQueries({ queryKey: ["get-all-user"] });
    },
  });
};

// ! for deleting a user
export const useDeleteUser = () => {
  return useMutation({
    mutationKey: ["delete-user"],
    mutationFn: async (id: string) => await deleteUser(id),
    onSuccess: () => {
      toast.success("User deleted successfully !!!");
    },
  });
};
