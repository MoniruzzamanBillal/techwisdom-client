import Wrapper from "@/components/shared/Wrapper";
import { FollowingCard } from "@/components/ui/Module";

const MyFollowing = () => {
  return (
    <div className="myFollowingContainer pt-4   ">
      <Wrapper className=" p-6 bg-black100 rounded-md text-white shadow-md   ">
        <p className="brand text-3xl font-medium mb-14  "> My followings </p>

        <div className="myFollowerContainer    ">
          <FollowingCard />
          <FollowingCard />
          <FollowingCard />
          <FollowingCard />
        </div>
      </Wrapper>
    </div>
  );
};

export default MyFollowing;
