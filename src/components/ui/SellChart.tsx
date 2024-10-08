"use client";

import { useGetChartRevenue } from "@/hooks/payment.hook";
import { useEffect, useState } from "react";
import TableDataError from "./TableDataError";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SellChart = () => {
  const [barData, setBarData] = useState([]);

  const { data: revenueChartData, isLoading: revenueChartDataLoading } =
    useGetChartRevenue();

  //   console.log(revenueChartData?.data);

  useEffect(() => {
    if (revenueChartData?.data?.length >= 30) {
      const newData = revenueChartData?.data.slice(0, 30);
      setBarData(newData);
    } else {
      setBarData(revenueChartData?.data);
    }
  }, [revenueChartData, revenueChartDataLoading]);

  let content = null;

  // * if data is loading
  if (revenueChartDataLoading) {
    content = (
      <div className="flex justify-center items-center h-[24vh]">
        <div className="rounded-full size-16 bg-prime100 animate-ping"></div>
      </div>
    );
  }

  // * if there is no data
  if (!revenueChartDataLoading && revenueChartData?.data?.length < 1) {
    content = <TableDataError message="No data Found" />;
  }

  // * for data
  if (!revenueChartDataLoading && revenueChartData?.data?.length) {
    content = (
      <div className="chartDataContainer  ">
        {/* chart starts */}
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={barData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="updatedAt" />
            <YAxis />

            <Tooltip
              contentStyle={{
                backgroundColor: "#02B8A6",
                borderColor: "#009B94",
              }}
              itemStyle={{ color: "#020817" }}
              cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
            />
            <Legend />
            <Bar
              dataKey="amount"
              fill="#8884d8"
              activeBar={<Rectangle fill="purple" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
        {/* chart ends */}
      </div>
    );
  }

  return (
    <div className="SellChartContainer">
      <div className="SellChartWrapper rounded-md bg-black100 border border-gray-700 p-6 shadow-md ">
        <h1 className=" mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-medium text-2xl  md:text-3xl   ">
          Revinue Per Day
        </h1>
        {/*  */}
        {content}
        {/*  */}
      </div>
    </div>
  );
};

export default SellChart;
