const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-5 px-10 fixed top-0 z-1000">
      <h2 className=" text-white text-2xl">I-Nexus</h2>
      <div className="w-8 flex flex-col gap-1">
        <span className="bg-white w-full h-1"></span>
        <span className="bg-white w-full h-1"></span>
        <span className="bg-white w-full h-1"></span>
      </div>
    </div>
  );
};

export default Navbar;
