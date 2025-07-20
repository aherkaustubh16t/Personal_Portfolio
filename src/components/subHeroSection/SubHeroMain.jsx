import Marquee from "react-fast-marquee";
import {
  FaBolt,
  FaUsers,
  FaSearch,
  FaLightbulb,
  FaBrain,
  FaCogs,
  FaLaptopCode,
} from "react-icons/fa";

const qualities = [
  { label: "Fast Learner", icon: <FaBolt /> },
  { label: "Team Player", icon: <FaUsers /> },
  { label: "Detail Oriented", icon: <FaSearch /> },
  { label: "Creative Thinker", icon: <FaLightbulb /> },
  { label: "Problem Solver", icon: <FaBrain /> },
  { label: "Adaptable", icon: <FaCogs /> },
  { label: "Tech Enthusiast", icon: <FaLaptopCode /> },
];

const SubHeroMain = () => {
  return (
    <div className="w-full border-y border-lightGrey bg-brown text-lightGrey py-3 overflow-hidden cursor-default">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {qualities.map((item, index) => (
          <div
            key={index}
            className="bg-black border border-orange/30 rounded-xl shadow-inner text-center mx-3 min-w-[160px] p-3 px-6 flex flex-row gap-2 items-center justify-center transition duration-300 ease-in-out"
          >
            <span className="text-orange text-2xl mb-2">{item.icon}</span>
            <p className="text-white text-xs sm:text-sm md:text-base uppercase tracking-wide font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SubHeroMain;
