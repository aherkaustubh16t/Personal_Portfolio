stuimport { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Email - plain text (not clickable) */}
      <SingleInfo text="aherkaustubhramesh16@gmail.com" Image={HiOutlineMail} />

      {/* Phone - tel link */}
      <a href="tel:+917249734437" className="hover:text-orange">
        <SingleInfo text="+91 7249734437" Image={FiPhone} />
      </a>

      {/* Location - Google Maps link */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Loni"
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
