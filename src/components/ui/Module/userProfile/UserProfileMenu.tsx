import Wrapper from "@/components/shared/Wrapper";
import ProfileImgSection from "./ProfileImgSection";
import { Separator } from "../../separator";
import { TUserProfile } from "@/types/Global.types";
import Link from "next/link";

const userProfileLinks: TUserProfile[] = [
  {
    label: "My Posts",
    link: "/profile",
  },
  {
    label: "My Follower",
    link: "/profile/my-follower",
  },
  {
    label: "My Following",
    link: "/profile/my-following",
  },

  {
    label: "View Analytics",
    link: "/profile",
  },

  {
    label: "My subscriptin",
    link: "/profile/user-subscription",
  },
];

const UserProfileMenu = () => {
  return (
    <div className="UaerProfileMenuContainer pt-3 ">
      <Wrapper className=" userProfileWrapper   p-6 bg-black100 ">
        <ProfileImgSection />

        <Separator className="my-5 bg-gray-600 " />
        <div className="profileLinks text-gray-300 flex ">
          {userProfileLinks &&
            userProfileLinks?.map((item, ind) => (
              <div
                key={ind}
                className="userProfileLinks flex  items-center space-x-2 xsm:space-x-4 text-xs xsm:text-sm sm:text-base "
              >
                <Link href={`${item?.link}`} className=" pl-2 xsm:pl-4 ">
                  {item?.label}
                </Link>
                <Separator
                  className={` bg-gray-600 ${
                    userProfileLinks?.length - 1 === ind ? "hidden" : ""
                  } `}
                  orientation="vertical"
                />
              </div>
            ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default UserProfileMenu;
