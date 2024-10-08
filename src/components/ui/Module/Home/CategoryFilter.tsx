/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetCategories } from "@/hooks/category.hook";
import { TResponseCategory } from "@/types/Global.types";
import { useEffect, useState } from "react";
import CategorySkeletonLoading from "../../CategorySkeletonLoading";

type TCategoryFilterProps = {
  type: string;
  setType: (category: string) => void;
};

const CategoryFilter = ({ type, setType }: TCategoryFilterProps) => {
  const { data: allCategory, isPending: categoryDataLoading } =
    useGetCategories();
  const [categoryData, setCategoryData] = useState<TResponseCategory[]>([]);

  useEffect(() => {
    if (allCategory?.data) {
      const initialData = {
        cName: "All",
        _id: "",
      };

      setCategoryData([initialData, ...allCategory?.data]);
    }
  }, [allCategory, categoryDataLoading]);

  let content = null;

  if (categoryDataLoading) {
    content = <CategorySkeletonLoading />;
  }

  if (!categoryDataLoading && categoryData) {
    content = (
      <>
        <ul className="text-sm font-medium text-gray-200">
          {categoryData &&
            categoryData?.map(
              (item: Partial<TResponseCategory>, ind: number) => (
                <li key={ind} className="w-full border-b border-gray-300">
                  <div className="flex items-center ps-3">
                    <input
                      id={item?.cName}
                      type="radio"
                      value={item?._id}
                      onChange={() => setType(item?._id as string)}
                      checked={type === item?._id}
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor={item?.cName}
                      className="w-full py-3 ms-2 text-xs font-medium text-gray-200"
                    >
                      {item?.cName}
                    </label>
                  </div>
                </li>
              )
            )}
        </ul>
      </>
    );
  }

  return (
    <div className="CategoryFilterContainer sticky top-[6rem]">
      <div className="categoryInput bg-black100 shadow-md rounded border border-gray-300 py-2 px-4">
        <p className=" text-xl font-medium mb-3 text-gray-200  ">Category :</p>

        {content}
      </div>
    </div>
  );
};

export default CategoryFilter;
