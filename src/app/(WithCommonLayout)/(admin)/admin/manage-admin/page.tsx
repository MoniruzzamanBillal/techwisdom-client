"use client";
import Wrapper from "@/components/shared/Wrapper";
import {
  AdminDeleteModal,
  TableDataError,
  TableDataLoading,
} from "@/components/ui";
import { Button } from "@/components/ui/button";
import { useDeleteUser, useGetAllAdminUser } from "@/hooks/user.hooks";
import { IUser } from "@/types/Global.types";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const ManageAdmins = () => {
  const {
    data: adminUsersData,
    isPending: adminUserDataLoading,
    refetch: adminUserDataRefetch,
  } = useGetAllAdminUser();

  const { mutateAsync: deleteUser } = useDeleteUser();

  //   console.log(adminUsersData?.data);

  // !  for deleting admin
  const handleDeleteAdmin = async (userId: string) => {
    try {
      const result = await deleteUser(userId);

      if (result?.success) {
        adminUserDataRefetch();
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("Something went wrong while deleting admin !!");
      console.log(error);
    }
  };

  let content = null;

  //  *  if data is loading
  if (adminUserDataLoading) {
    content = (
      <tr>
        <td colSpan={8} className="p-4">
          <TableDataLoading />
        </td>
      </tr>
    );
  }

  // ! if no data
  if (!adminUserDataLoading && adminUsersData?.data?.length < 1) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Nothing Found" />
        </td>
      </tr>
    );
  }

  if (!adminUserDataLoading && adminUsersData?.data?.length) {
    content = adminUsersData?.data?.map((adminData: IUser) => (
      <tr key={adminData._id} className="border-b">
        <td className="p-4 text-center"> {adminData?.name} </td>

        <td className="p-4 text-center"> {adminData?.email} </td>

        <td className="p-4 flex justify-center items-center ">
          <Image
            className="size-[2.8rem] xsm:size-[3.2rem] sm:size-[4rem]"
            src={adminData?.profilePicture}
            alt="user profile image "
            height={700}
            width={700}
          />
        </td>

        <td className="p-4 text-center">
          <Link href={`/update-admin/${adminData?._id}`}>
            <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-green-600 hover:bg-green-700 active:scale-95 duration-500 ">
              Update
            </Button>
          </Link>
        </td>

        <td className="p-4 text-center">
          <AdminDeleteModal
            id={adminData?._id}
            handleDeleteFunction={handleDeleteAdmin}
          />
        </td>
      </tr>
    ));
  }

  return (
    <div className="manageAdminContainer pt-4 ">
      <Wrapper className="   p-6 bg-black100 rounded-md text-white shadow-md ">
        <p className="brand text-xl xsm:text-2xl md:text-3xl font-medium mb-8 xsm:mb-10 md:mb-14  ">
          Manage Admin
        </p>

        {/* create new admin button  */}
        <div className="addPostBtn mb-6  ">
          <Link href={"/admin-register"}>
            <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 active:scale-95 duration-500 ">
              Add new admin
            </Button>
          </Link>
        </div>
        {/* create new admin button  */}

        {/* manage admin table  */}
        <div className="manageUserTable relative w-full overflow-auto mt-4 ">
          <table className="w-full text-sm bg-black20 ">
            <thead className="border-b">
              <tr className="w-full text-sm bg-black100 text-gray-200 ">
                <th className="px-4 font-medium">Name</th>
                <th className="px-4 font-medium">Email </th>
                <th className="px-4 font-medium"> profile image </th>
                <th className="px-4 font-medium"> update </th>
                <th className="px-4 font-medium"> delete </th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
        {/* manage admin table  */}
      </Wrapper>
    </div>
  );
};

export default ManageAdmins;
