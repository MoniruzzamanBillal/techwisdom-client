import Wrapper from "@/components/shared/Wrapper";
import SortFilter from "@/components/ui/Module/Home/SortFilter";

const options = [
  {
    name: "All",
    value: "",
  },
  { name: "Sedan", value: "Sedan" },
  { name: "SUV", value: "SUV" },
  { name: "Coupe", value: "Coupe" },
  { name: "Compact", value: "Compact" },
  { name: "Minivan", value: "Minivan" },
];

const Home = () => {
  return (
    <div className="HomePageContainer pt-4 bg-black50 min-h-screen ">
      <Wrapper className="homePageWrapper  ">
        {/* search sort section starts  */}

        <div className="searchFilterSection mb-8 ">
          <SortFilter />
        </div>

        {/* search sort section ends  */}

        {/* main body part starts  */}
        <div className="mainBody  ">
          {/* left side filter section starts  */}
          <div className="filterSection  w-[16%] ">
            {/* category input starts  */}

            <div className="categoryInput bg-black100 shadow-md rounded border border-gray-300 py-2 px-4">
              <p className=" text-xl font-medium mb-2 text-gray-200  ">
                Category :
              </p>
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
            {/* * car type input ends   */}
          </div>
          {/* left side filter section ends  */}
        </div>
        {/* main body part ends  */}

        {/*  */}
      </Wrapper>
    </div>
  );
};

export default Home;
