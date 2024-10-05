/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import dynamic from "next/dynamic";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Wrapper from "@/components/shared/Wrapper";
import { ChangeEvent, useEffect, useState } from "react";
import Select, { ActionMeta, StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useGetCategories } from "@/hooks/category.hook";
import { TResponseCategory } from "@/types/Global.types";
import { Skeleton } from "@/components/ui/skeleton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useUserContext } from "@/context/user.provider";
import { useCreatePost } from "@/hooks/post.hook";
import { FormSubmitLoading } from "@/components/ui";
import { useRouter } from "next/navigation";
const animatedComponents = makeAnimated();

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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

const CreatePost = () => {
  const router = useRouter();
  const { user, token } = useUserContext();
  const { data: allCategory, isPending: categoryDataLoading } =
    useGetCategories();
  const [categoryData, setCategoryData] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [titleImg, setTitleImg] = useState<File | null>(null);
  const [premiumContent, setPremiumContent] = useState("false");

  const { mutateAsync: createPost, isPending: postCreatiionPending } =
    useCreatePost();

  const [fileName, setFileName] = useState("");

  // console.log(allCategory?.data);

  useEffect(() => {
    if (allCategory?.data) {
      const result = allCategory?.data?.map((item: TResponseCategory) => ({
        label: item?.cName,
        value: item?._id,
      }));

      setCategoryData(result);
    }
  }, [allCategory, categoryDataLoading]);

  const handleSelectChange = (
    newValue: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    actionMeta: ActionMeta<unknown>
  ) => {
    if (newValue) {
      setSelectedCategories(newValue.value);
    } else {
      setSelectedCategories("");
    }
  };

  // *  function for changing title image
  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imgFile = e.target.files[0];

      setFileName(imgFile?.name);

      setTitleImg(imgFile);
    } else {
      toast.error("Select a valid image !!");
      return;
    }
  };

  // ! for creation of a post
  const handleSubmit = async () => {
    if (
      !title.trim() ||
      !value.trim() ||
      !selectedCategories.trim() ||
      !titleImg
    ) {
      toast.error("All input fields are required", { duration: 1400 });
      return;
    }

    const isPremium = premiumContent === "false" ? false : true;

    const blogData = {
      title,
      content: value,
      category: selectedCategories,
      isPremium,
      authorId: user?._id,
    };

    const formdata = new FormData();

    formdata.append("data", JSON.stringify(blogData));
    formdata.append("file", titleImg);

    const reqToken = `Bearer ${token}`;

    try {
      const result = await createPost({ formdata, token: reqToken });

      console.log(result);

      if (result?.success) {
        setTimeout(() => {
          router.push("/");
        }, 300);
      }
    } catch (error) {
      toast.error("Somethng went wrong while creating post ", {
        duration: 1400,
      });
      console.log(error);
    }
  };

  let content = null;

  // * if category data is loading
  if (categoryDataLoading) {
    content = (
      <>
        <div className="loadingContainer flex flex-col gap-y-3 ">
          <Skeleton className=" h-[3rem] w-full " />
          <Skeleton className=" h-[3rem] w-full " />
          <Skeleton className=" h-[3rem] w-full " />
          <Skeleton className=" h-[10rem] w-full " />
          <Skeleton className=" h-[2rem] w-[5rem] " />
        </div>
      </>
    );
  } else if (!categoryDataLoading && categoryData?.length) {
    content = (
      <>
        <div className="createPostForm">
          {/* category container  */}

          <div className="premiumContentContainer  mb-5 text-gray-50 flex  items-center gap-x-4 ">
            <h1>premium content : </h1>

            <div className="inputContainer   ">
              <RadioGroup
                className=" flex items-center gap-x-6 text-2xl "
                value={premiumContent}
                onValueChange={setPremiumContent}
              >
                <div className="flex items-center space-x-2 text-2xl ">
                  <RadioGroupItem
                    className={`size-6 border border-gray-200 ${
                      premiumContent === "true" ? "bg-prime50" : ""
                    }`}
                    value="true"
                    id="r2"
                  />
                  <Label className=" text-xl " htmlFor="r2">
                    True
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className={` border border-gray-200 size-6 ${
                      premiumContent === "false" ? "bg-prime50" : ""
                    }`}
                    value="false"
                    id="r3"
                  />
                  <Label className=" text-xl " htmlFor="r3">
                    False
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="titleContainer   mb-3      ">
            <Select
              components={animatedComponents}
              options={categoryData}
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
              // ref={quillRef}
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
        </div>
      </>
    );
  }

  return (
    <div className="cratePostContainer py-3 bg-black50   ">
      {postCreatiionPending && <FormSubmitLoading />}
      <Wrapper className="createPostWrapper  flex justify-center items-center  ">
        {/* add post form  */}
        <div className="    w-[95%] xsm:w-[90%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-prime100/20  backdrop-blur  ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-white  ">
            Create post
          </p>

          {/*  */}

          {content}

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
