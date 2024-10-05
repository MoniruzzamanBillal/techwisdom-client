import Wrapper from "@/components/shared/Wrapper";

const ManageUser = () => {
  return (
    <div className="ManageUserContainer pt-4">
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
                <th className="px-4 font-medium"> Status </th>

                <th className="px-4 font-medium"> Actions </th>
              </tr>
            </thead>
            {/* <tbody>{content}</tbody> */}
          </table>
        </div>
        {/* manage user table ends  */}
      </Wrapper>
    </div>
  );
};

export default ManageUser;
