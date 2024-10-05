import AdminProfileMenu from "@/components/ui/Module/AdminProfile/AdminProfileMenu";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layoutContainer bg-black50 min-h-screen ">
      <div className="layoutSidebar   ">
        <AdminProfileMenu />
      </div>

      <div className="childContainer">{children}</div>
    </div>
  );
};

export default layout;
