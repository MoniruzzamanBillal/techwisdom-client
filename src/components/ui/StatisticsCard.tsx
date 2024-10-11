import CountUp from "react-countup";

const StatisticsCard = ({ number, text }: { number: number; text: string }) => {
  //   const { number, text } = counter;

  return (
    <div className="flex group flex-col items-center justify-center rounded-lg border border-gray-600 bg-black50 shadow-md   p-4 lg:p-8  cursor-pointer relative m-auto w-[94%] xsm:w-full  hover:shadow-lg ">
      {/* top border  */}

      {/* top line  */}
      {/* top line  */}
      <div className="topBorder absolute top-0 left-0 bg-prime100 w-[0rem] h-[6px] group-hover:w-[4rem]   xsm:group-hover:w-[6rem] origin-right  duration-500 group-hover:transition-all  "></div>
      {/* top line  */}
      {/* top line  */}

      {/* top left line  */}
      {/* top left line  */}
      <div className="topBorder absolute top-[1.6rem] xsm:top-[2.6rem] left-[0rem] transform -translate-x-1/2 -translate-y-1/2 rotate-90 bg-prime100 origin-bottom w-[0rem] h-[6px] group-hover:w-[3rem] xsm:group-hover:w-[5rem] duration-500 group-hover:transition-all  "></div>
      {/* top left line  */}
      {/* top left line  */}

      {/* bottom line  */}
      {/* bottom line  */}
      <div className="topBorder absolute bottom-[0rem] right-[0rem] bg-prime100  w-[0rem] h-[6px] group-hover:w-[3.5rem]  xsm:group-hover:w-[6rem]  duration-500 group-hover:transition-all  "></div>
      {/* bottom line  */}
      {/* bottom line  */}

      {/*  */}
      {/*  */}
      {/* bottom right line  */}
      {/* bottom right line  */}
      <div className="topBorder absolute bottom-[0rem] right-[0rem] bg-prime100  w-[6px] h-[0rem] group-hover:h-[3rem] xsm:group-hover:h-[6rem] duration-500 group-hover:transition-all  "></div>
      {/* bottom right line  */}
      {/* bottom right line  */}

      <div className="   group-hover:text-prime50 text-gray-100   pb-2 text-sm xsm:text-lg sm:text-xl md:text-2xl xmd:text-3xl font-semibold     ">
        <CountUp start={0} end={number} duration={3} />
      </div>
      <div className="  text-center  text-gray-100 group-hover:text-prime50 text-sm xsm:text-lg sm:text-xl md:text-xl xmd:text-2xl  font-semibold    ">
        <h4 className="counterTitle  ">{text}</h4>
      </div>
    </div>
  );
};

export default StatisticsCard;
