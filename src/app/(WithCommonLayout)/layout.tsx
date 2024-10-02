import Navbar from "@/components/shared/NavBar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen ">
      <div className="navContainer  pb-20 ">
        <Navbar />
      </div>
      <main className="  ">{children}</main>
    </div>
  );
}
