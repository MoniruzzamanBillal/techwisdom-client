

'use client'
import Wrapper from "@/components/shared/Wrapper"

 

type IProps = {
    params : {
        email : string 
    }
}


const EmailResetConfirmation = ({params : {email }} : IProps )=>{
    return (

        <div className="EmailResetConfirmationContainer w-full min-h-screen  imageCenter bg-black50 flex items-center justify-center ">
        <Wrapper className="EmailResetConfirmationWrapper ">
          <div className="contentContainer w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl  bg-black100 backdrop-blur  border border-gray-600 ">
            <p className="  text-xl xsm:text-2xl sm:text-3xl text-center font-medium CormorantFont text-white  ">
              An Password change link has been sent to{" "}
              <span className="text-prime50 font-bold">{email}</span>
            </p>
            <p className=" mt-5 text-center font-medium text-red-600  ">
              Link will be expired within 5 minutes
            </p>
          </div>
        </Wrapper>
      </div>
        
    )
}


export default EmailResetConfirmation