"use client";

const CategoryFilter = ({ options }) => {
  return (
    <div className="CategoryFilterContainer sticky top-[6rem]">
      <div className="categoryInput bg-black100 shadow-md rounded border border-gray-300 py-2 px-4">
        <p className=" text-xl font-medium mb-2 text-gray-200  ">Category :</p>
        <ul className="text-sm font-medium text-gray-200">
          {options &&
            options?.map((item, ind) => (
              <li key={ind} className="w-full border-b border-gray-300">
                <div className="flex items-center ps-3">
                  <input
                    id={item?.name}
                    type="radio"
                    value={item?.value}
                    // onChange={() => setType(item.value)}
                    // checked={type === item.value}
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor={item?.name}
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-200"
                  >
                    {item?.name}
                  </label>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
