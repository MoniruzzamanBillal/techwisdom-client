"use client";

import Wrapper from "@/components/shared/Wrapper";
import { TableDataError, TableDataLoading } from "@/components/ui";
import { useGetPayment } from "@/hooks/payment.hook";
import { IUser } from "@/types/Global.types";
import { format } from "date-fns";

type TPayment = {
  amount: number;
  createdAt: string;
  paymentStatus: "Pending" | "Completed" | "Failed";
  transactionId: string;
  updatedAt: string;
  userId: IUser;
  __v: number;
  _id: string;
};

const PaymentHistory = () => {
  const { data: paymentData, isPending: paymentDataLoading } = useGetPayment();

  console.log(paymentData?.data);

  let content = null;

  // ! if data is loading
  if (paymentDataLoading) {
    content = (
      <tr>
        <td colSpan={8} className="p-4">
          <TableDataLoading />
        </td>
      </tr>
    );
  }

  // ! if no data
  if (!paymentDataLoading && paymentData?.data?.length < 1) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Nothing Found" />
        </td>
      </tr>
    );
  }

  if (!paymentDataLoading && paymentData?.data?.length) {
    content = paymentData?.data?.map((payment: TPayment) => (
      <tr key={payment._id} className="border-b">
        <td className="p-4 text-center"> {payment?.userId?.name} </td>
        <td className="p-4 text-center"> {payment?.userId?.email} </td>
        <td className="p-4 text-center"> {payment?.transactionId} </td>
        <td className="p-4 text-center"> {payment?.amount} </td>
        <td className="p-4 text-center">
          {" "}
          {payment?.createdAt &&
            format(new Date(payment?.createdAt), "dd-MMMM-yyyy")}{" "}
        </td>
      </tr>
    ));
  }

  return (
    <div className="PaymentHistoryContainer pt-4">
      <Wrapper className=" p-6 bg-black100 rounded-md text-white shadow-md ">
        <p className="brand text-xl xsm:text-2xl md:text-3xl font-medium mb-8 xsm:mb-10 md:mb-14  ">
          Payment History
        </p>

        {/* manage payment history table starts  */}
        <div className="manageUserTable relative w-full overflow-auto mt-4 ">
          <table className="w-full text-sm bg-black20 ">
            <thead className="border-b">
              <tr className="w-full text-sm bg-black100 text-gray-200 ">
                <th className="px-4 font-medium">User</th>
                <th className="px-4 font-medium">email</th>
                <th className="px-4 font-medium">transaction id </th>
                <th className="px-4 font-medium"> amount </th>
                <th className="px-4 font-medium"> date </th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
        {/* manage payment history table ends  */}
      </Wrapper>
    </div>
  );
};

export default PaymentHistory;
