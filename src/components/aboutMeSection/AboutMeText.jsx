import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-orange mb-6 uppercase tracking-wide">
        Hello, I’m Kaustubh
      </h2>

      <p className="text-lg text-lightGrey leading-relaxed max-w-xl">
        A Computer Engineering graduate (2025) passionate about crafting
        scalable, user-centric web applications using the MERN stack. I’ve
        worked on real-world projects like a QR-based hotel menu, e-learning
        platforms, and a real-time chat app. I'm also exploring data analysis
        with Python, Excel, and Power BI to bring insights to life.
        <br />
        <br />
        I'm driven by clean code, intuitive UX, and continuous learning. Open to
        full-time opportunities, freelance gigs, and collaborative challenges in
        the tech space.
      </p>

      <Link
        to="education"
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        className="mt-8 inline-block bg-orange text-white px-6 py-2 rounded-full font-semibold text-lg shadow-md hover:bg-white hover:text-orange transition-all duration-300 cursor-pointer"
      >
        View Education Details
      </Link>
    </div>
  );
};

export default AboutMeText;
