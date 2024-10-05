import Wrapper from "@/components/shared/Wrapper";

import { Separator } from "../../separator";
import { TUserProfile } from "@/types/Global.types";
import Link from "next/link";

import ProfileImgSection from "../userProfile/ProfileImgSection";

const adminProfileLinks: TUserProfile[] = [
  {
    label: "Statistics ",
    link: "/admin",
  },

  {
    label: "Manage post",
    link: "/admin/manage-post",
  },
  {
    label: "Manage User",
    link: "/admin/manage-user",
  },
  {
    label: "Payment History",
    link: "/admin/payment-history",
  },
];

const AdminProfileMenu = () => {
  return (
    <div className="AdminProfileMenuContainer pt-3 ">
      <Wrapper className=" adminProfileWrapper   p-6 bg-black100 ">
        <ProfileImgSection />

        <Separator className="my-5 bg-gray-600 " />
        <div className="profileLinks text-gray-300 flex ">
          {adminProfileLinks &&
            adminProfileLinks?.map((item, ind) => (
              <div
                key={ind}
                className="userProfileLinks flex  items-center space-x-2 xsm:space-x-4 text-xs xsm:text-sm sm:text-base "
              >
                <Link href={`${item?.link}`} className=" pl-2 xsm:pl-4 ">
                  {item?.label}
                </Link>
                <Separator
                  className={` bg-gray-600 ${
                    adminProfileLinks?.length - 1 === ind ? "hidden" : ""
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

export default AdminProfileMenu;
