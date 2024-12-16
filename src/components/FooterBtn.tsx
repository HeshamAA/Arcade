

const FooterBtn = ({ text }: { text: string }) => {
  return (
    <button className=" px-3 py-2 rounded block text-blue-200 outline-0 border-0 transition-all duration-300 hover:text-violet-300 hover:bg-blue-200 ">
      {text}
    </button>
  );
};

export default FooterBtn;
