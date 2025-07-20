// components/SocialLinks/SocialLinks.jsx
import HireMeButton from "../HireMeButton";
import SocialIcons from "./SocialIcons";

const SocialLinks = ({ showHireMe = true }) => {
  return (
    <section className="w-full flex md:flex-row-reverse sm:flex-col-reverse items-center justify-center md:gap-20 sm:gap-5">
      <SocialIcons />
      {showHireMe && (
        <div className="mt-4 sm:mt-0">
          <HireMeButton className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3" />
        </div>
      )}
    </section>
  );
};

export default SocialLinks;
