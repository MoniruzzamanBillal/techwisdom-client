"use client";

import Wrapper from "@/components/shared/Wrapper";
import { SubscriptionCard } from "@/components/ui/Module";

const UserScribtion = () => {
  return (
    <div className="userSubscriptionContainer pt-4 ">
      <Wrapper className=" userSubscriptionWrapper p-6 bg-black100 rounded-md text-white shadow-md  ">
        <SubscriptionCard />
      </Wrapper>
    </div>
  );
};

export default UserScribtion;
