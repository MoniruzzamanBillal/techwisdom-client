"use client";

import { usePayment } from "@/hooks/payment.hook";
import { toast } from "sonner";
import FormSubmitLoading from "../../FormSubmitLoading";

const SubscriptionCard = ({ userId }: { userId: string }) => {
  const { mutateAsync: handlePay, isPending: paymentLoading } = usePayment();

  // ! for subscribing
  const handleSubscribe = async () => {
    try {
      const payload = {
        userId,
        amount: "40",
      };

      const result = await handlePay(payload);

      console.log(result);

      if (result?.success) {
        const paymentUrl = result?.data?.payment_url;
        console.log(paymentUrl);

        window.location.href = paymentUrl;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong while subscribing !!!");
    }
  };

  return (
    <div className="SubscriptionCardContainer">
      {paymentLoading && <FormSubmitLoading />}

      <div className="   flex justify-center  px-8  text-zinc-800 mt-10 ">
        <div className="flex flex-col items-center bg-gradient-to-br from-blue-100 via-gray-100 to-purple-100 p-8 rounded-lg shadow-lg relative border-8 border-orange-200   ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-20 h-20 absolute -top-11 -left-11 fill-red-400"
          >
            <path
              fill-rule="evenodd"
              d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p className="mono text-sm absolute -top-4 bg-red-400 text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded">
            Premium Access
          </p>
          <div>
            <div className="flex gap-4 justify-center">
              <div className="flex flex-col items-center my-8">
                <p className="font-extrabold text-4xl">$40</p>
                <p className="text-sm opacity-60">/month</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-4 h-4 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <b>Access to premium content or services</b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-4 h-4 ml-1 fill-orange-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </p>
            <p className="flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-4 h-4 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <b>Priority support</b>
            </p>
            <p className="flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-4 h-4 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <b>Unlimited access or usage</b>
            </p>

            <p className="flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-4 h-4 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Premium Support
            </p>
            <div className="flex justify-center mt-8">
              <button
                onClick={handleSubscribe}
                className="px-4 py-2 border-violet-400 border-4 bg-violet-100 hover:bg-violet-200 rounded-xl"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
