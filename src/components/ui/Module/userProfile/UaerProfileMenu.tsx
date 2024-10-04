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
    label: "My Following",
    link: "/profile/my-following",
  },
  {
    label: "View Analytics",
    link: "/profile",
  },

  {
    label: "Payment",
    link: "/profile",
  },
];

const UaerProfileMenu = () => {
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
                className="userProfileLinks flex  items-center space-x-4 "
              >
                <Link href={`${item?.link}`} className=" pl-4 ">
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

export default UaerProfileMenu;
