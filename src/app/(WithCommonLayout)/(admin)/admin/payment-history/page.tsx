import Wrapper from "@/components/shared/Wrapper";

const PaymentHistory = () => {
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
                <th className="px-4 font-medium">transaction id </th>
                <th className="px-4 font-medium"> amount </th>
                <th className="px-4 font-medium"> date </th>
              </tr>
            </thead>
            {/* <tbody>{content}</tbody> */}
          </table>
        </div>
        {/* manage payment history table ends  */}
      </Wrapper>
    </div>
  );
};

export default PaymentHistory;
