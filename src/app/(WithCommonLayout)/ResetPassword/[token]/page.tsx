'use client'

import { TechWisdomForm, TechWisdomInput } from "@/components/form"
import Wrapper from "@/components/shared/Wrapper"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues } from "react-hook-form"
import { z } from "zod"

type IProps = {
    params : {
        token : string
    }
}


const ResetPassword = ({params : { token}} : IProps  )=>{


    console.log("token = " , token )



    // ! for reseting password 

    const handleResetPassword = (data : FieldValues) =>{


        try {

            console.log(data)
            
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error : any ) {

            console.log(error)
            
        }


    }



    return (
        <div className="ResetPasswordContainer w-full min-h-screen  imageCenter  bg-black50 flex items-center justify-center">
        <Wrapper className="ResetPasswordWrapper py-14">
          {/*  */}
          <div className=" w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl border border-gray-700 bg-black100 backdrop-blur  ">
            <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-white  ">
              Reset Password
            </p>
  
            {/*  */}
  
            {/* form starts  */}
            <TechWisdomForm
              onSubmit={handleResetPassword}
              resolver={zodResolver(
                z
                  .object({
                    password: z.string().min(6, {
                      message: "Password must be at least 6 characters",
                    }),
                    confirmPassword: z.string().min(6, {
                      message: "Confirm Password must be at least 6 characters",
                    }),
                  })
                  .refine((data) => data.password === data.confirmPassword, {
                    message: "password don't match ",
                    path: ["confirmPassword"],
                  })
              )}
            >
              <TechWisdomInput
                type="password"
                label="Password :"
                name="password"
                placeholder="Enter your password "
              />
              <TechWisdomInput
                type="password"
                label="Confirm Password :"
                name="confirmPassword"
                placeholder="Confirm your password "
              />
  
              {/* <Button
                disabled={isLoading}
                className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base active:scale-95 duration-500 ${
                  isLoading
                    ? " cursor-not-allowed bg-gray-600 "
                    : "bg-prime50 hover:bg-prime100  "
                } `}
              >
                Reset Password
              </Button> */}
  
              <Button
             
                className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base active:scale-95 duration-500 `}
              >
                Reset Password
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


export default ResetPassword