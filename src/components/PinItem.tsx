

type TPinItemsProps = {
  numberOfPin: number;
  title: string;
  text: string;
};
const PinItem = ({ numberOfPin, title, text }: TPinItemsProps) => {
  return (
    <div className="flex items-start gap-7 opacity-40" id={`pin-${numberOfPin}`}>
      <div className="flex flex-col items-center">
        <div>{numberOfPin}</div>
        <div
          className={`h-[60px] w-2 rounded bg-[#cccccc]  outline-0  border-[black] opacity-0 pin-${numberOfPin}-parent`}
          
        >
          <div
            className="h-[0px] w-2 rounded bg-[black]  outline-0 border-[black]"
            id={`scroller-${numberOfPin}`}
          ></div>
        </div>
      </div>

      <div className="flex flex-col max-w-[500px]">
        <div className="font-[600]">{title}</div>
        <div className={`pin-${numberOfPin}-parent opacity-0   font-robert-regular`}>{text}</div>
      </div>
    </div>
  );
};

export default PinItem;
