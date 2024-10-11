import { Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger, } from "./accordion";


type TItemProps = {
    question: string;
    answer: string;
    value: string;
  };
  



  const whatWeOfferItem : TItemProps[] = [
    {
      question: "Expert Advice",
      answer:
        "Get tips and tricks from tech professionals and enthusiasts.",
      value: "item-1",
    },
  
    {
      question: "Tutorials & Guides",
      answer:
        " Learn through comprehensive tutorials on programming, software, apps, and gadgets.",
      value: "item-2",
    },
    {
      question: "Community Engagement",
      answer:
        "Connect with other tech lovers through our platform, share your own knowledge, and grow your skills.",
      value: "item-3",
    },
    {
      question: "Premium Content",
      answer:
        "Access exclusive, in-depth tech guides and tutorials with our subscription service.",
      value: "item-4",
    },
    {
      question: "User Interaction",
      answer:
        " Upvote, comment, and follow others to build your tech network and stay updated with the latest content.",
      value: "item-5",
    },
  ];
  


const WhatWeOffer = () => {
 return (
    <div className="whatWeOfferContainer py-10  ">
      <div className="whatWeOfferWrapper  w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
      

        <Accordion
          type="single"
          collapsible
          className="  w-[96%] xsm:w-[90%] sm:w-[80%] md:w-[70%] xmd:w-[60%] lg:w-[50%] m-auto text-base sm:text-lg   "
        >
          {whatWeOfferItem &&
            whatWeOfferItem?.map((item: TItemProps) => (
              <AccordionItem  key={item?.value} value={item?.value}>
                <AccordionTrigger className=" text-gray-50 " > {item?.question} </AccordionTrigger>
                <AccordionContent className=" text-gray-300 " > {item?.answer}</AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>

        {/*  */}
      </div>
    </div>
 );
};

export default WhatWeOffer;