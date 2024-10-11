"use client";

import { useGetRevenue } from "@/hooks/payment.hook";
import { useGetSubscriberNumber, useGetUserNumber } from "@/hooks/user.hooks";
import StatisticsCard from "./StatisticsCard";

const Statistics = () => {
  const { data: revenueData, isLoading: revenueDataLoading } = useGetRevenue();
  const { data: userNumber, isLoading: userNumberDataLoading } =
    useGetUserNumber();
  const { data: subscriberNumber, isLoading: subscriberNumberDataLoading } =
    useGetSubscriberNumber();

  //   console.log(revenueData?.data);
  //   console.log(userNumber?.data);
  //   console.log(subscriberNumber?.data);

  let content = null;

  //   * if data is loading
  if (
    revenueDataLoading ||
    userNumberDataLoading ||
    subscriberNumberDataLoading
  ) {
    content = (
      <div className="flex justify-center items-center h-[24vh]">
        <div className="rounded-full size-16 bg-prime100 animate-ping"></div>
      </div>
    );
  }
  
  
  else {
    content = (
      <div className="statisticsCardContent grid xsm:grid-cols-2 lg:grid-cols-3 md:gap-x-3 gap-x-2  gap-y-4">
        <StatisticsCard number={revenueData?.data} text={"Total Revenue"} />
        <StatisticsCard number={userNumber?.data} text={"Total User "} />
        <StatisticsCard
          number={subscriberNumber?.data}
          text="Total Subscribed User"
        />
      </div>
    );
  }

  return (
    <div className="statisticsPageContainer">
      <div className="StatisticsWrapper rounded-md border border-gray-700 bg-black100 borderborder-gray-600 p-6 shadow-md  ">
        <h1 className=" mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-medium text-2xl  md:text-3xl   ">
          Statistics
        </h1>
        <div className="cardContainer">{content}</div>
      </div>
    </div>
  );
};

export default Statistics;
