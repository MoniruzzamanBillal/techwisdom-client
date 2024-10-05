import Wrapper from "@/components/shared/Wrapper";
import { FollowingCard } from "@/components/ui/Module";

export default function MyFollower() {
  return (
    <div className="MyFollowerContainer pt-4 ">
      <Wrapper className=" p-6 bg-black100 rounded-md text-white shadow-md ">
        <p className="brand text-xl xsm:text-2xl md:text-3xl font-medium mb-8 xsm:mb-10 md:mb-14  ">
          {" "}
          My followers{" "}
        </p>

        <div className="myFollowerContainer    ">
          <FollowingCard />
          <FollowingCard />
          <FollowingCard />
          <FollowingCard />
        </div>
      </Wrapper>
    </div>
  );
}
