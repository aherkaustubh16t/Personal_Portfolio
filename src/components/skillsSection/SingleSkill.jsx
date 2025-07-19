import { FaStar, FaRegStar } from "react-icons/fa";

const SingleSkill = ({ imgSvg, text, level, tooltip }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) =>
      i < level ? (
        <FaStar key={i} className="text-yellow-400" />
      ) : (
        <FaRegStar key={i} className="text-gray-600" />
      )
    );

  return (
    <div className="hover:-translate-y-10 transition-all duration-500 relative group">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange hover:text-darkGrey">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>

        {/* Skill level */}
        <div className="flex gap-1">{stars}</div>
      </div>

      {/* Tooltip */}
      <div className="absolute w-[150px] text-sm text-white bg-black px-3 py-2 rounded-lg left-1/2 -translate-x-1/2 top-[115%] opacity-0 group-hover:opacity-100 transition duration-300 z-50 text-center pointer-events-none">
        {tooltip}
      </div>
    </div>
  );
};

export default SingleSkill;
