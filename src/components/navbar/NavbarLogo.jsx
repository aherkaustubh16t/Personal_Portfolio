const NavbarLogo = () => {
  return (
    <div>
      {/* Full name on medium and larger screens */}
      <h1 className="text-white text-4xl font-['Playfair_Display'] font-extrabold  tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 drop-shadow-[0_3px_6px_rgba(255,255,255,0.25)] sm:hidden md:block">
        Kaustubh Aher
      </h1>

      {/* Fancy KA for small screens */}
      <h1 className="text-4xl font-['Playfair_Display'] font-extrabold italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 drop-shadow-[0_3px_6px_rgba(255,255,255,0.25)] md:hidden sm:block">
        KA
      </h1>
    </div>
  );
};

export default NavbarLogo;
