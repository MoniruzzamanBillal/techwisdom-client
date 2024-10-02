import { ReactNode } from "react";

type TWrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: TWrapperProps) => {
  return (
    <div
      className={`WrapperContainer  w-[95%] sm:w-[93%] xl:w-[90%] xlg:w-[85%] m-auto ${
        className || ""
      } `}
    >
      {children}
    </div>
  );
};

export default Wrapper;
