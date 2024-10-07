"use client";
import { format } from "date-fns";
import { useGetSubscriber } from "@/hooks/payment.hook";
import FormSubmitLoading from "../../FormSubmitLoading";

const subscription = {
  planName: "Standard Plan",
  amount: "$20/month",
  features: ["Unlimited access", "Priority support", "Ad-free experience"],
};

const SubscriptionDetail = ({ userId }: { userId: string }) => {
  const { data: userSubscriberData, isLoading: userSubscriberDataLoading } =
    useGetSubscriber(userId);

  // console.log(userSubscriberData?.data);

  return (
    <div className="SubscriptionDetailContainer  ">
      {userSubscriberDataLoading && <FormSubmitLoading />}

      <div className="SubscriptionDetailWrapper">
        <h1 className=" text-center mb-10 ">You are already subscribed </h1>

        <div className="subscriptionDetail bg-black50 p-6 rounded-md w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] m-auto shadow-md ">
          <h2 className=" font-semibold text-gray-200 text-center mb-12 ">
            Subscription Details
          </h2>

          {/* Plan Details */}
          <div className="mb-4">
            <h3 className=" font-semibold text-gray-200 text-xl ">Plan:</h3>
            <p className="text-gray-300 text-lg  ">{subscription.planName}</p>
          </div>

          {/* Status */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-200 text-xl ">Status:</h3>
            <p className="text-gray-300 text-lg">
              {userSubscriberData?.data?.status}
            </p>
          </div>

          {/* Start Date */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-200 text-xl">Start Date:</h3>
            <p className="text-gray-300 text-lg">
              {userSubscriberData?.data?.startDate &&
                format(
                  new Date(userSubscriberData?.data?.startDate),
                  "dd-MMMM-yyyy"
                )}
            </p>
          </div>

          {/* Renewal Date */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-200 text-xl">
              Renewal Date:
            </h3>
            <p className="text-gray-300 text-lg">
              {userSubscriberData?.data?.endDate &&
                format(
                  new Date(userSubscriberData?.data?.endDate),
                  "dd-MMMM-yyyy"
                )}
            </p>
          </div>

          {/* Billing Amount */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-200 text-xl">
              Billing Amount:
            </h3>
            <p className="text-gray-300 text-lg">{subscription.amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetail;
