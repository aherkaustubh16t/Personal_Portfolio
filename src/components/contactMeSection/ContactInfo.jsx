import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Email - mailto link */}
      <a 
        href="mailto:aherkaustubhramesh16@gmail.com" 
        className="hover:text-orange"
      >
        <SingleInfo text="aherkaustubhramesh16@gmail.com" Image={HiOutlineMail} />
      </a>

      {/* Phone - tel link */}
      <a href="tel:+917249734437" className="hover:text-orange">
        <SingleInfo text="+91 7249734437" Image={FiPhone} />
      </a>

      {/* Location - Google Maps link */}
      <a
        href="https://maps.app.goo.gl/GPaSH2cMgYUa6jq7A"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange"
      >
        <SingleInfo text="Loni" Image={IoLocationOutline} />
      </a>
    </div>
  );
};

export default ContactInfo;
