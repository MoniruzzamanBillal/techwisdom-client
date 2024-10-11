import { TMissionVisionItem } from "@/types/Global.types";
import Image from "next/image";


type TCardProps = {
    element: TMissionVisionItem;
  };
  
  const MissionVisionCard = ({ element }: TCardProps) => {
    return (
      <div className="MissionVisionCardContainer my-2 ">
        <div className="cardContainer  flex flex-col md:flex-row justify-between items-center  gap-y-4 md:gap-y-0 ">
          {/* left sectioin starts  */}
          <div
            className={`leftSide   m-auto w-[75%] md:w-[50%] flex flex-col gap-y-4 items-center ${
              element?.id === 1 ? "order-1" : "order-2"
            } `}
          >
            <h1 className="  font-semibold text-xl xsm:text-2xl sm:text-3xl md:text-3xl xmd:text-4xl  text-prime50 ">
              {element?.header}
            </h1>
            <p className=" text-gray-300 text-sm xsm:text-base lg:text-lg ">
              {element?.content}
            </p>
          </div>
          {/* left sectioin ends  */}
  
          {/* right section starts  */}
          <div
            className={` rightSide m-auto  w-[75%] md:w-[50%] ${
              element?.id === 1 ? "order-2" : "order-1"
            } `}
          >
            <div className="imgContainer w-[80%]  m-auto ">
              <Image  src={element?.img} className=" w-full h-full  "  alt="card img"
              height={700}
              width={700} />
            </div>
          </div>
          {/* right section ends  */}
  
          {/*  */}
        </div>
      </div>
    );
  };
  
  export default MissionVisionCard;
  