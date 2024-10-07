/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Wrapper from "@/components/shared/Wrapper";
import {
  ManageUserModal,
  TableDataError,
  TableDataLoading,
} from "@/components/ui";
import {
  useBlockUser,
  useDeleteUser,
  useGetAllUser,
  useUnblockUser,
} from "@/hooks/user.hooks";
import { IUser } from "@/types/Global.types";
import { UserRole } from "@/utils/Constants";
import { toast } from "sonner";

const ManageUser = () => {
  const {
    data: allUserData,
    isPending: allUserDataLoading,
    refetch: allUserDataRefetch,
  } = useGetAllUser();

  const { mutateAsync: blockUser } = useBlockUser();
  const { mutateAsync: unblockUser } = useUnblockUser();
  const { mutateAsync: deleteUser } = useDeleteUser();

  // console.log(allUserData?.data);

  // ! for block user
  const handleBlockUser = async (userId: string) => {
    try {
      const result = await blockUser(userId);

      if (result?.success) {
        allUserDataRefetch();
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong while blocking user !! ");
    }
  };

  // ! for unblock user
  const handleUnblockUser = async (userId: string) => {
    try {
      const result = await unblockUser(userId);

      console.log(result);

      if (result?.success) {
        allUserDataRefetch();
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong while unblocking user !! ");
    }
  };

  // ! for deleting user
  const handleDeleteUser = async (userId: string) => {
    try {
      const result = await deleteUser(userId);

      if (result?.success) {
        allUserDataRefetch();
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong while deleting user !! ");
    }
  };

  let content = null;

  //  *  if data is loading
  if (allUserDataLoading) {
    content = (
      <tr>
        <td colSpan={8} className="p-4">
          <TableDataLoading />
        </td>
      </tr>
    );
  }

  // ! if no data
  if (!allUserDataLoading && allUserData?.data?.length < 1) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Nothing Found" />
        </td>
      </tr>
    );
  }

  if (!allUserDataLoading && allUserData?.data?.length) {
    content = allUserData?.data?.map((userData: IUser) => (
      <tr key={userData._id} className="border-b">
        <td className="p-4 text-center"> {userData?.name} </td>

        <td className="p-4 text-center">{userData?.email}</td>
        <td
          className={`p-4 text-center font-semibold ${
            userData?.userRole === UserRole.admin
              ? " text-red-600 "
              : "text-green-600"
          }  `}
        >
          {userData?.userRole}
        </td>

        {userData?.userRole === UserRole.admin ? (
          <td> </td>
        ) : (
          <td className="p-4 text-center">{userData?.status}</td>
        )}

        {userData?.userRole === UserRole.admin ? (
          <td> </td>
        ) : (
          <td className="p-4 text-center">
            {userData?.isVerified === false ? "No" : "Yes"}
          </td>
        )}

        {userData?.userRole === UserRole.admin ? (
          <td> </td>
        ) : (
          <td className="p-4 text-center">
            <ManageUserModal
              userId={userData?._id}
              handleBlockUser={handleBlockUser}
              handleUnblockUser={handleUnblockUser}
              handleDeleteUser={handleDeleteUser}
              status={userData?.status as string}
            />
          </td>
        )}
      </tr>
    ));
  }

  return (
    <div className="ManageUserContainer pt-4 ">
      <Wrapper className=" p-6 bg-black100 rounded-md text-white shadow-md ">
        <p className="brand text-xl xsm:text-2xl md:text-3xl font-medium mb-8 xsm:mb-10 md:mb-14  ">
          Manage User
        </p>

        {/* manage user table starts  */}
        <div className="manageUserTable relative w-full overflow-auto mt-4 ">
          <table className="w-full text-sm bg-black20 ">
            <thead className="border-b">
              <tr className="w-full text-sm bg-black100 text-gray-200 ">
                <th className="px-4 font-medium">Name</th>
                <th className="px-4 font-medium">Email </th>
                <th className="px-4 font-medium">Role </th>
                <th className="px-4 font-medium"> Status </th>
                <th className="px-4 font-medium"> Verified </th>

                <th className="px-4 font-medium"> Actions </th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
        {/* manage user table ends  */}
      </Wrapper>
    </div>
  );
};

export default ManageUser;
