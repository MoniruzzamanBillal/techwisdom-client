/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import dynamic from "next/dynamic";

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
import { useGetSinglePost, useUpdatePost } from "@/hooks/post.hook";
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

type IProps = {
  params: {
    postId: string;
  };
};

const UpdatePost = ({ params: { postId } }: IProps) => {
  const router = useRouter();
  const { data: allCategory, isPending: categoryDataLoading } =
    useGetCategories();
  const {
    data: postDetail,
    isLoading: postDataLoading,
    isPending: postDataPending,
  } = useGetSinglePost(postId);

  const { mutateAsync: updatePostMutation, isPending: postUpdating } =
    useUpdatePost();

  const { user } = useUserContext();
  const [categoryData, setCategoryData] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [titleImg, setTitleImg] = useState<File | null>(null);
  const [premiumContent, setPremiumContent] = useState("false");
  const [fileName, setFileName] = useState("");

  //   console.log(postDetail?.data);

  // ! for setting up category option
  useEffect(() => {
    if (allCategory?.data) {
      const result = allCategory?.data?.map((item: TResponseCategory) => ({
        label: item?.cName,
        value: item?._id,
      }));

      setCategoryData(result);
    }
  }, [allCategory, categoryDataLoading]);

  //   ! for setting the defaul value in state
  useEffect(() => {
    if (postDetail?.data) {
      setTitle(postDetail.data.title || "");
      setValue(postDetail.data.content || "");
      setSelectedCategories(postDetail.data.category?._id || "");
      setPremiumContent(postDetail.data.isPremium ? "true" : "false");
    }
  }, [postDetail]);

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

  //   ! for updating post data
  const handleUpdatePost = async () => {
    if (!title.trim() || !value.trim() || !selectedCategories.trim()) {
      toast.error("All input fields are required", { duration: 1200 });
      return;
    }

    if (!titleImg) {
      toast.error("Select an image  ", { duration: 1200 });
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

    console.log(blogData);
    console.log(titleImg);

    try {
      //

      const result = await updatePostMutation({ formdata, id: postId });

      if (result?.data) {
        toast.success("Post updated successfully !!! ");

        setTimeout(() => {
          router.push("/");
        }, 200);
      }
    } catch (error: any) {
      toast.error("something went wrong while updating post !! ");
      console.log(error);
    }
  };

  let content = null;

  // * if category data is loading
  if (categoryDataLoading || postDataLoading || postDataPending) {
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
  }

  // * if category data is not  loading
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
              value={categoryData.find(
                (option: any) => option?.value === selectedCategories
              )}
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
              onClick={() => handleUpdatePost()}
              className="  text-gray-50 bg-prime50 hover:bg-prime100 active:scale-95 hover:scale-105 hover:shadow-md py-2 px-5 rounded font-medium   "
            >
              Update
            </Button>
          </div>
          {/* submit button ends */}
        </div>
      </>
    );
  }

  //   console.log(postId);

  return (
    <div className="cratePostContainer py-3 bg-black50   ">
      {postUpdating && <FormSubmitLoading />}
      <Wrapper className="createPostWrapper  flex justify-center items-center  ">
        {/* add post form  */}
        <div className="    w-[95%] xsm:w-[90%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-prime100/20  backdrop-blur  ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-white  ">
            Update Post
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

export default UpdatePost;
