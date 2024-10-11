"use client";
import Wrapper from "@/components/shared/Wrapper";
import { MissionVisionCard, TeamCard, WhatWeOffer } from "@/components/ui";
import { TMissionVisionItem } from "@/types/Global.types";

const missionVisionContent: TMissionVisionItem[] = [
  {
    id: 1,
    header: "Our mission",
    content:
      "Our mission is to create a vibrant community where tech enthusiasts can discover, share, and master cutting-edge technology. We aim to provide a platform that offers practical solutions, insightful tutorials, and expert advice, enabling users to enhance their digital skills and make informed tech decisions.",
    img: "https://i.postimg.cc/Z56f9BHQ/mission.png",
  },
  {
    id: 2,
    header: "Our Vision",
    content:
      "We envision a world where technology is not just a tool but a bridge that connects individuals to innovative solutions. Our goal is to be a leading hub for tech expertise, fostering a global community where knowledge is freely shared, helping users navigate the digital landscape confidently and efficiently.",
    img: "https://i.postimg.cc/TPGtndH3/vision.png",
  },
];

const AboutUs = () => {
  return (
    <div className="aboutUsContainer pt-8 bg-black50 min-h-screen ">
      {/* about us sectioin  */}
      <Wrapper>
        <div className="aboutUs py-10 ">
          <h1 className="  mb-7 sm:mb-12 text-center font-semibold text-lg xsm:text-2xl sm:text-3xl md:text-3xl xmd:text-4xl text-gray-50   ">
            About <span className=" text-prime50 ">Us</span>
          </h1>

          <p className=" text-xl text-gray-300 ">
            Welcome to TechWisdom — your go-to platform for all things
            technology. Whether you’re a seasoned developer, a tech enthusiast,
            or someone looking for practical solutions to everyday tech
            challenges, our platform is designed to bring you the latest
            insights, guides, and expert advice from the tech world. We believe
            that technology should empower individuals, and our mission is to
            make that knowledge accessible to everyone.
          </p>
        </div>
        {/* about us sectioin ends  */}
      </Wrapper>

      {/* mission vision items  */}
      <div className="missionVisionSection py-8 bg-black20  ">
        <Wrapper>
          {missionVisionContent &&
            missionVisionContent?.map((element) => (
              <MissionVisionCard key={element?.id} element={element} />
            ))}
        </Wrapper>
      </div>
      {/* mission vision items  */}

      {/* who we are section  */}
      <Wrapper>
        <div className="whoWeAre py-10 ">
          <h1 className="  mb-7 sm:mb-12 text-center font-semibold text-lg xsm:text-2xl sm:text-3xl md:text-3xl xmd:text-4xl text-gray-50   ">
            Who we are
          </h1>

          <p className=" text-xl text-gray-300 ">
            At TechWisdom, we are a team of tech experts, developers, and
            enthusiasts dedicated to building a space where technology lovers
            can thrive. We understand the rapidly evolving nature of technology,
            and we aim to keep our users up-to-date with the latest trends,
            tools, and techniques. From coding tutorials and software reviews to
            troubleshooting common tech issues, we cover a wide range of topics
            to ensure our users have the resources they need at their
            fingertips.
          </p>
        </div>
      </Wrapper>
      {/* who we are section ends */}

      {/* what we offer section starts  */}

      <div className="whatWeOffer py-8 bg-black20 ">
        <Wrapper>
          <h1 className="  mb-7 sm:mb-12 text-center font-semibold text-lg xsm:text-2xl sm:text-3xl md:text-3xl xmd:text-4xl text-gray-50   ">
            What We Offer
          </h1>

          <WhatWeOffer />
        </Wrapper>
      </div>

      {/* what we offer section ends  */}

      {/* team member sectiion  */}
      <div className="teamSection ">
        <TeamCard />
      </div>
      {/* team member sectiion  */}

      {/* why choose us section starts  */}
      <div className="whyChooseUs py-10 ">
        <Wrapper>
          <h1 className=" mb-7 sm:mb-12 text-center font-semibold text-lg xsm:text-2xl sm:text-3xl md:text-3xl xmd:text-4xl text-gray-50   ">
            Why Choose Us?
          </h1>

          <p className=" text-xl text-gray-300 ">
            We are committed to providing quality content that is easy to
            understand, practical, and relevant to today’s technology landscape.
            Our platform is user-friendly, and we continuously innovate to offer
            features that enhance the user experience, such as rich text editing
            for content creation, responsive design for all devices, and secure
            payment integration for premium features.
          </p>
        </Wrapper>
      </div>
      {/* why choose us section ends  */}

      {/*  */}
    </div>
  );
};

export default AboutUs;
