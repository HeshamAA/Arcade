const Loader = () => {
  return (
    <div
      id="loader-path"
      className="min-h-screen w-screen bg-[rgba(0,0,0,0.8)] fixed z-[1000] overflow-hidden"
    >
      <div className="loader absolute-center"></div>
    </div>
  );
};

export default Loader;
