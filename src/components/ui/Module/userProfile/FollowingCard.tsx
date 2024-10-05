import Image from "next/image";
import { Button } from "../../button";

const FollowingCard = () => {
  return (
    <div className="FollowingCardContainer my-4 ">
      <div className="FollowingCardWrapper w-[96%]  xsm:w-[92%] sm:w-[85%] md:w-[76%] xmd:w-[70%] xl:w-[62%] xlm:w-[55%] m-auto bg-black50 rounded-md p-2 ">
        <div className="followingContainer flex justify-between items-center  ">
          {/* left side container  */}
          <div className="leftSection  flex justify-between items-center gap-x-2 ">
            <div className="imgSection size-[3rem] xsm:size-[3.4rem] rounded-full overflow-auto ">
              <Image
                src={"https://i.postimg.cc/TPMTptwT/ubaida.jpg"}
                alt="user image "
                height={700}
                width={700}
              />
            </div>
            <p className=" text-base xsm:text-lg sm:text-xl  "> User name </p>
          </div>
          {/* left side container ends  */}

          {/* right side container  */}
          <div className="rightSection  ">
            <Button className=" bg-prime50 hover:bg-prime100 ">Unfollow</Button>
          </div>
          {/* right side container ends  */}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default FollowingCard;
