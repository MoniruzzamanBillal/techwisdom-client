import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


type TProps = {
  searchTerm : string 
  sort : string 
  setSearchTerm : ( searchTerm : string ) => void
  setSortBy : ( sort : string ) => void

}

const SortFilter = ({searchTerm ,setSearchTerm ,sort ,setSortBy} : TProps) => {
  return (
    <div className="SortFilterContainer">
      <div className="sortSearch  bg-black100 shadow-md rounded border border-gray-300 py-2 px-4 flex justify-between items-center text-gray-100 ">
        {/* search section   */}
        <div className="searchSection bg-black100 border border-gray-300  w-[60%] m-auto py-1 px-3 rounded-full flex justify-center items-center    ">
          <Input
            type="text"
            placeholder="Looking for...."
            className=" border-none outline-none bg-black100 active:ring-0 active:border-none "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* search section ends  */}

        {/* sort input section starts  */}
        <div className="sortSection  flex  justify-between items-center gap-x-1 ">
          <p className="text-gray-200 "> sort by : </p>

          {/* input section  */}
          <Select
          value={sort}
          onValueChange={(value) => setSortBy(value)}
          >
            <SelectTrigger className="w-[14rem]  outline-none border-gray-400 ring-0 focus:ring-0  text-gray-200 bg-black100  ">
              <SelectValue placeholder="sort by popularity" />
            </SelectTrigger>
            <SelectContent className=" bg-black100 ">
              <SelectItem className="text-gray-50" value="-upvotes">
                High Pupularity
              </SelectItem>
              <SelectItem className="text-gray-50" value="upvotes">
                 Low Pupularity
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* sort input section ends  */}
      </div>
    </div>
  );
};

export default SortFilter;
