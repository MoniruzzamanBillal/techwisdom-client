"use client";

import Wrapper from "@/components/shared/Wrapper";
import { SubscriptionCard, SubscriptionDetail } from "@/components/ui/Module";
import { useUserContext } from "@/context/user.provider";

const UserScribtion = () => {
  const { user } = useUserContext();

  let content = null;

  // ! if user is not verified , show card
  if (!user?.isVerified) {
    content = <SubscriptionCard userId={user?._id as string} />;
  }

  // ! if user is verified then show detail
  if (user?.isVerified) {
    content = <SubscriptionDetail userId={user?._id as string} />;
  }

  return (
    <div className="userSubscriptionContainer pt-4 ">
      <Wrapper className=" userSubscriptionWrapper p-6 bg-black100 rounded-md text-white shadow-md  ">
        {content}
      </Wrapper>
    </div>
  );
};

export default UserScribtion;
