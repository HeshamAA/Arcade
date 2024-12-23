import Tilt from "react-parallax-tilt";
const Photo = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <span className="w-16 h-16 bg-blue-200 rounded inline-flex mb-4 items-center justify-end relative cursor-pointer group ">
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={2000}
        className="w-full h-full"
      >
        <img
          src={imgSrc}
          className={`absolute top-0 left-0 object-cover object-center h-full opacity-0 border border-[black] rounded transition-all ease-in-out duration-500 group-hover:scale-[4] group-hover:opacity-100`}
        ></img>
      </Tilt>
    </span>
  );
};

export default Photo;
