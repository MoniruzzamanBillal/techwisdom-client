import { UserProfileMenu } from "@/components/ui/Module";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layoutContainer py-6 bg-black50 min-h-screen ">
      <div className="layoutSidebar  ">
        <UserProfileMenu />
      </div>

      <div className="childContainer">{children}</div>
    </div>
  );
};

export default layout;
