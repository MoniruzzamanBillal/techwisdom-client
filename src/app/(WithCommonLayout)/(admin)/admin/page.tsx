import Wrapper from "@/components/shared/Wrapper";
import { SellChart, Statistics } from "@/components/ui";

const AdminProfile = () => {
  return (
    <div className="adminProfileContainer pt-4">
      <Wrapper className=" profileWrapper    text-white flex flex-col gap-y-6  ">
        <Statistics />
        <SellChart />
      </Wrapper>
    </div>
  );
};

export default AdminProfile;
