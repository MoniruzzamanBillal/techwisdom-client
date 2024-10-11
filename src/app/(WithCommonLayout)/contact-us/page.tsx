import Wrapper from "@/components/shared/Wrapper";
import { MdAddIcCall, MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { MapContainer } from "@/components/ui";

const ContactUs = () => {
  return (
    <div className="ContactUsContainer  bg-black50 py-10 min-h-screen ">
      <div className="ContactUsWrapper">
        <Wrapper>
          <h1 className="  mb-7 sm:mb-12 text-center font-semibold text-lg xsm:text-2xl sm:text-3xl md:text-3xl xmd:text-4xl text-gray-50   ">
            Contact Us
          </h1>

          <p className=" text-xl text-gray-300 ">
            We’d love to hear from you! Whether you have questions, feedback, or
            need support, our team is here to assist you. Get in touch with us
            using any of the options below, and we’ll respond as soon as
            possible.
          </p>

          <p className="text-xl font-bold mb-5  mt-10 text-gray-50 ">
            {" "}
            Reach Out to Us :{" "}
          </p>

          <div className="contactUsContainer flex flex-col gap-y-10  ">
            {/* email section  */}
            <div className="emailSection  pl-4 flex flex-col gap-y-2 text-gray-200 ">
              <p className="  font-medium ">1. Email Us</p>
              <p>
                For general inquiries, support, or feedback, please email us at:
              </p>
              <div className="email flex items-center gap-x-2 ">
                <MdEmail className=" text-lg " />
                <p>support@techtipshub.com</p>
              </div>
            </div>

            {/* call us section  */}
            <div className="callSection  pl-4 flex flex-col gap-y-2 text-gray-200 ">
              <p className="  font-medium "> 2. Call Us </p>
              <p>
                For immediate assistance, you can call our customer service
                team:
              </p>
              <div className="email flex items-center gap-x-2 ">
                <MdAddIcCall className=" text-lg " />
                <p>+1 (123) 456-7890</p>
              </div>
            </div>

            {/* office section  */}
            <div className="officeSection  pl-4 flex flex-col gap-y-2 text-gray-200 ">
              <p className="  font-medium "> 3. Office Address</p>
              <p>Visit us at our office:</p>
              <div className="email flex items-center gap-x-2 ">
                <FaBuilding className=" text-lg " />
                <p>Tech Tips & Tricks Hub</p>
              </div>
              <p className=" text-sm ">123 Tech Street, Suite 456</p>

              <p className=" text-sm ">Tech City, TX 78901</p>
            </div>
          </div>

          {/* map section starts  */}
          <div className=" mt-6 mapSection  m-auto">
            <MapContainer />
          </div>
          {/* map section ends */}
        </Wrapper>
      </div>
    </div>
  );
};

export default ContactUs;
