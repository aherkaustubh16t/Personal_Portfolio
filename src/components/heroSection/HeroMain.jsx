import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div id="hero" className=" pt-32 pb-16 cursor-default">
      <div className="flex flex-col-reverse md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroPic />
        <HeroText />
      </div>
    </div>
  );
}; 

export default HeroMain;
