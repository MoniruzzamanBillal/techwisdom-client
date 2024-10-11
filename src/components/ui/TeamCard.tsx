import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Link from "next/link";


type TMember = {
  name: string;
  designation: string;
  image: string;
  description: string;
};

const teamMembers: TMember[] = [
    {
      name: "Omar Khalid",
      designation: "Chief Executive Officer (CEO)",
      image: "https://i.postimg.cc/6Qstxm5v/img6.jpg",
      description:
        "Omar leads Tech Wisdom with over 15 years of tech industry experience, focusing on strategic planning and partnerships to drive the platform's mission of empowering tech enthusiasts forward.",
    },
  
    {
      name: "Yusuf Ali",
      designation: "Chief Technology Officer (CTO)",
      image: "https://i.postimg.cc/52QbGV1J/img5.jpg",
      description:
        "Yusuf oversees Tech Wisdom's technological advancements, ensuring the platform remains secure, scalable, and innovative. He leads the development team in creating new features and optimizing platform performance.",
    },
  
    {
      name: "Bilal Ahmed",
      designation: "Chief Operating Officer (COO)",
      image: "https://i.postimg.cc/Gh2cFD5H/img3.png",
      description:
        "Bilal manages daily operations at Tech Wisdom, optimizing processes to ensure smooth content creation, user engagement, and platform efficiency.",
    },
  
    {
      name: "Zain Malik",
      designation: "Chief Marketing Officer (CMO)",
      image: "https://i.postimg.cc/DyM7Bz95/img4.jpg",
      description:
        "Zain drives Tech Wisdom's marketing initiatives, developing campaigns that enhance brand visibility and engage tech enthusiasts through strategic content and digital marketing.",
    },
  
    {
      name: "Faisal Khan",
      designation: "Head of Community Engagement",
      image: "https://i.postimg.cc/j2qRknq3/img1.jpg",
      description:
        "Faisal ensures a positive user experience at Tech Wisdom, managing community support and interactions to foster a collaborative and engaging environment.",
    },
  
    {
      name: "Hasan Raza",
      designation: "Head of Content Management",
      image: "https://i.postimg.cc/3r98019s/img2.jpg",
      description:
        "Hasan oversees content curation and quality at Tech Wisdom, coordinating with tech experts and contributors to deliver insightful and valuable resources for users.",
    },
  ];
  
const TeamCard = () => {
  return (
    <div className="TeamMemberContainer  ">
      <div className="bg-black100 py-10     ">
        <Wrapper>
          <div className=" max-w-screen-xl  m-auto  ">
            {/* text - start  */}
            <div className="mb-10 md:mb-16">
              <h1 className=" mb-2 sm:mb-4 text-center font-semibold text-lg xsm:text-2xl sm:text-3xl md:text-3xl xmd:text-4xl text-prime50  ">
                Meet Our Team
              </h1>
            </div>
            {/* text - end  */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {/* person - start  */}
              {teamMembers &&
                teamMembers?.map((member: TMember, ind: number) => (
                  <div
                    key={ind}
                    className=" h-[23.5rem] xsm:h-[22.5rem] md:h-[24rem] lg:h-[27rem] flex flex-col items-center rounded-lg bg-black20 border border-gray-500 p-4 lg:p-8  w-[95%] xsm:w-[75%] sm:w-full m-auto shadow-lg "
                  >
                    <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                      <Image
                        src={member?.image}
                        loading="lazy"
                        alt="Photo by Radu Florin"
                        className="h-full w-full object-cover object-center"
                        height={700}
                        width={700}
                      />
                    </div>

                    <div>
                      <div className="text-center font-bold text-indigo-500 md:text-lg">
                        {member?.name}
                      </div>
                      <p className="mb-3 text-center text-sm text-gray-100 md:mb-4 md:text-base">
                        {member?.designation}
                      </p>
                      <p className=" text-center   text-gray-300 md:mb-4 text-sm">
                        {member?.description}
                      </p>

                      {/* social - start  */}
                      <div className=" mt-6 flex justify-center">
                        <div className="flex gap-5">
                          {/* facebook icon  */}
                          <Link
                            href={"https://www.facebook.com/boss.mesut/"}
                            target="_blank"
                            className=" text-2xl  hover:text-blue-700 text-gray-100 "
                          >
                            <FaFacebook />
                          </Link>

                          {/* linkedin icon  */}
                          <Link
                            href={"https://bd.linkedin.com/"}
                            target="_blank"
                            className=" text-2xl text-gray-100 hover:text-blue-800"
                          >
                            <FaLinkedin />
                          </Link>
                          {/* github icon  */}
                          <Link
                            href={"https://github.com/MoniruzzamanBillal"}
                            target="_blank"
                            className=" text-2xl text-gray-100  hover:text-blue-800"
                          >
                            <FaGithub />
                          </Link>
                        </div>
                      </div>
                      {/* social - end  */}
                    </div>
                  </div>
                ))}

              {/* person - end  */}
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default TeamCard;
