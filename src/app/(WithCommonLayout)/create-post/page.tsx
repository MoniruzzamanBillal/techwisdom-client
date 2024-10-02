"use client";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Wrapper from "@/components/shared/Wrapper";
import axios from "axios";
import { useRef, useState } from "react";
import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
const animatedComponents = makeAnimated();

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
  ],
};

const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#6b7280 ",
    borderColor: "#02b8a6",
    boxShadow: "none",
    color: "red",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#d1d5db", // Change this to your desired color
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: "",
    color: "#070f2b",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#d1d5db  ",
    "&:hover": {
      borderColor: "transparent",
    },
  }),
};

const categoryOptions = [
  { label: "GPS", value: "gps" },
  { label: "Child Seat", value: "childSeat" },
  { label: "Sunroof", value: "sunroof" },
];

const CreatePost = () => {
  const quillRef = useRef(null);
  const [selectedCategories, setSelectedCategories] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [titleImg, setTitleImg] = useState(null);

  const [fileName, setFileName] = useState("");

  const handleSelectChange = (selectedOptions: {
    label: string;
    value: string;
  }) => {
    setSelectedCategories(selectedOptions?.value);
  };

  // *  function for changing title image
  const handleImage = async (e) => {
    const imgFile = e.target.files[0];

    // console.log(imgFile);
    setFileName(imgFile?.name);

    const formData = new FormData();
    formData.append("image", imgFile);

    const imageResponse = await axios.post(
      "https://api.imgbb.com/1/upload?key=00fc9e4302335a502d2035bb196a9314",
      formData
    );

    setTitleImg(imageResponse?.data?.data?.display_url);
  };

  const handleSubmit = () => {
    if (
      !title.trim() ||
      !titleImg.trim() ||
      !value.trim() ||
      !selectedCategories.trim()
    ) {
      toast.error("All input fields are required", { duration: 1400 });
    }

    const blogData = {
      title,
      titleImg,
      description: value,

      category: selectedCategories,
    };

    console.log(blogData);
  };

  return (
    <div className="cratePostContainer py-3 bg-black50   ">
      <Wrapper className="createPostWrapper  flex justify-center items-center  ">
        {/* add post form  */}
        <div className="    w-[95%] xsm:w-[90%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-prime100/20  backdrop-blur  ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-white  ">
            Create post
          </p>

          {/*  */}

          {/* category container  */}

          <div className="titleContainer   mb-3      ">
            <Select
              components={animatedComponents}
              options={categoryOptions}
              className="   text-xl   "
              classNamePrefix="custom   "
              styles={customStyles}
              onChange={handleSelectChange}
              placeholder="Choose a category"
            />
          </div>

          {/* category container ends  */}

          {/* title starts  */}
          <div className="titleContainer   mb-3  ">
            <input
              className=" block w-full py-2 px-3 text-2xl border-none outline-none rounded-md  bg-[#6b7280]  text-white  "
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          {/* title ends  */}

          {/* title image container  */}
          <div className="titleImage  py-4 mb-3   border-2 border-gray-300 border-dotted ">
            <div className="labelCOntainer  text-center  ">
              <label
                htmlFor="file_input"
                className="  bg-rose-500 hover:bg-rose-600 font-medium text-gray-50 text-sm py-3 px-4 rounded-md cursor-pointer "
              >
                {fileName ? fileName : "  Upload title image"}
              </label>
            </div>

            <input
              onChange={(e) => handleImage(e)}
              className=" hidden  w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  "
              id="file_input"
              type="file"
            />
          </div>
          {/* title image container ends */}

          {/* text editor  */}
          <div className="textEditor   h-[22rem] ">
            <ReactQuill
              ref={quillRef}
              theme="snow"
              value={value}
              onChange={setValue}
              className="  h-full w-full font-medium text-white "
              modules={modules}
            />
          </div>
          {/* text editor ends  */}

          {/* submit button  */}
          <div className="submit   text-center  mt-16 ">
            <Button
              onClick={() => handleSubmit()}
              className="  text-gray-50 bg-prime50 hover:bg-prime100 active:scale-95 hover:scale-105 hover:shadow-md py-2 px-5 rounded font-medium   "
            >
              Submit
            </Button>
          </div>
          {/* submit button ends */}

          {/*  */}
        </div>
        {/* add post form ends  */}
      </Wrapper>

      <style jsx global>{`
        .ql-container {
          color: white; /* Editor text color */
        }
        .ql-toolbar {
          background-color: white; /* Toolbar background color */
        }
      `}</style>
    </div>
  );
};

export default CreatePost;
