/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Wrapper from "@/components/shared/Wrapper";
import { TableDataError, TableDataLoading } from "@/components/ui";
import { useGetActivityLog } from "@/hooks/auth.hook";
import { IUser } from "@/types/Global.types";
import { UserRole } from "@/utils/Constants";
import Image from "next/image";
import { format } from "date-fns";

const ActivityLog = () => {
  const { data: activityLogData, isPending: activityLogLoading } =
    useGetActivityLog();

  // console.log(activityLogData?.data);

  let content = null;

  //  *  if data is loading
  if (activityLogLoading) {
    content = (
      <tr>
        <td colSpan={8} className="p-4">
          <TableDataLoading />
        </td>
      </tr>
    );
  }

  // ! if no data
  if (!activityLogLoading && activityLogData?.data?.length < 1) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Nothing Found" />
        </td>
      </tr>
    );
  }

  if (!activityLogLoading && activityLogData?.data?.length) {
    content = activityLogData?.data?.map((activityLogData: Partial<IUser>) => (
      <tr key={activityLogData._id} className="border-b">
        <td className="p-4 text-center"> {activityLogData?.name} </td>

        <td className="p-4 text-center">{activityLogData?.email}</td>
        <td className="p-4 text-center flex justify-center items-center ">
          {activityLogData?.profilePicture && (
            <Image
              className="size-[2.8rem] xsm:size-[3.2rem] sm:size-[4rem]"
              src={activityLogData?.profilePicture}
              alt="user profile image "
              height={700}
              width={700}
            />
          )}
        </td>

        <td
          className={`p-4 text-center font-semibold ${
            activityLogData?.userRole === UserRole.admin
              ? " text-red-600 "
              : "text-green-600"
          }  `}
        >
          {activityLogData?.userRole}
        </td>

        <td className="p-4 text-center">
          {activityLogData?.createdAt &&
            format(
              new Date(activityLogData?.createdAt as string),
              "dd-MMM-yyyy :  HH:mm "
            )}
        </td>
      </tr>
    ));
  }

  return (
    <div className="activityLogContainer pt-4 ">
      <Wrapper className=" p-6 border border-gray-700 bg-black100 rounded-md text-white shadow-md ">
        <p className="brand text-xl xsm:text-2xl md:text-3xl font-medium mb-8 xsm:mb-10 md:mb-14  ">
          Activity log
        </p>

        {/* activity log table starts  */}
        <div className="activityLogTable relative w-full overflow-auto mt-4 ">
          <table className="w-full text-sm bg-black20 ">
            <thead className="border-b">
              <tr className="w-full text-sm bg-black100 text-gray-200 ">
                <th className="px-4 font-medium">Name</th>
                <th className="px-4 font-medium">Email </th>
                <th className="px-4 font-medium">Profile Image </th>
                <th className="px-4 font-medium">Role </th>
                <th className="px-4 font-medium  ">Logged in time </th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
        {/* activity log table ends  */}
      </Wrapper>
    </div>
  );
};

export default ActivityLog;
