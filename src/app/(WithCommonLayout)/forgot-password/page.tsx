'use client'


import { TechWisdomForm, TechWisdomInput } from "@/components/form"
import Wrapper from "@/components/shared/Wrapper"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues } from "react-hook-form"
import { z } from "zod"



const ForgotPassword = ()=>{



// ! for handling reset password 
const handleSentEmail =async (data : FieldValues) =>{


    try{

        console.log(data)

    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(error : any ){
        console.log(error)
    }

}


    return(
        <div
        className={
          "ForgotPasswordContainer w-full min-h-screen  imageCenter flex items-center justify-center bg-black50 "
        }
      >
        <Wrapper className="ForgotPasswordWrapper py-14  ">
          {/*  */}
          <div className=" w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl border border-gray-700 bg-black100 backdrop-blur  ">
            <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-white  ">
              Reset Password
            </p>
  
            {/*  */}
  
            {/* form starts  */}
            <TechWisdomForm
              onSubmit={handleSentEmail}
              resolver={zodResolver(
                z.object({
                  email: z.string().min(1, "Email is required"),
                })
              )}
            >
              <TechWisdomInput
                type="email"
                label="Email :"
                name="email"
                placeholder="Enter your email"
              />
  
              {/* <Button
                disabled={isLoading}
                className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base  active:scale-95 duration-500  ${
                  isLoading
                    ? " cursor-not-allowed bg-gray-600 "
                    : "bg-prime50 hover:bg-prime100  "
                } `}
              >
                Next
              </Button> */}
              <Button
                // disabled={isLoading}
                className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base  active:scale-95 duration-500   `}
              >
                Next
              </Button>



            </TechWisdomForm>
            {/* form ends */}
  
            {/*  */}
          </div>
          {/*  */}
        </Wrapper>
      </div>
    )
}

export default ForgotPassword