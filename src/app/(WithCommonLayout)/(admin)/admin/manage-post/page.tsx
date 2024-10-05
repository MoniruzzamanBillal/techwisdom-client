import Wrapper from "@/components/shared/Wrapper";

const ManagePost = () => {
  return (
    <div className="managePostContainer pt-4">
      <Wrapper className=" p-6 bg-black100 rounded-md text-white shadow-md ">
        <p className="brand text-xl xsm:text-2xl md:text-3xl font-medium mb-8 xsm:mb-10 md:mb-14  ">
          Manage post
        </p>

        {/* manage posts table starts  */}
        <div className="manageUserTable relative w-full overflow-auto mt-4 ">
          <table className="w-full text-sm bg-black20 ">
            <thead className="border-b">
              <tr className="w-full text-sm bg-black100 text-gray-200 ">
                <th className="px-4 font-medium">Author</th>
                <th className="px-4 font-medium">Category </th>
                <th className="px-4 font-medium"> Premium </th>
                <th className="px-4 font-medium"> Action </th>
              </tr>
            </thead>
            {/* <tbody>{content}</tbody> */}
          </table>
        </div>
        {/* manage posts table ends  */}
      </Wrapper>
    </div>
  );
};

export default ManagePost;
