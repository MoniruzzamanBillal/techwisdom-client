import Wrapper from "@/components/shared/Wrapper";
import { BlogCard } from "@/components/ui";
import { CategoryFilter, SortFilter } from "@/components/ui/Module";
import { useUserContext } from "@/context/user.provider";

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

        <div className="searchFilterSection mb-4 ">
          <SortFilter />
        </div>

        {/* search sort section ends  */}

        {/* main body part starts  */}
        <div className="mainBody   flex flex-col xl:flex-row justify-between  gap-x-6 gap-y-8 ">
          {/* left side filter section starts  */}
          <div className="filterSection w-[100%] xl:w-[16%]  ">
            <CategoryFilter options={options} />
          </div>
          {/* left side filter section ends  */}

          {/* right section starts  */}
          <div className="contentSection   w-[84%] ">
            {/*  */}
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            {/*  */}
          </div>
          {/* right section ends  */}
        </div>
        {/* main body part ends  */}

        {/*  */}
      </Wrapper>
    </div>
  );
};

export default Home;
