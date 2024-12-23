import { useEffect, useRef } from "react";
import { useHoverDirty } from "react-use";

type Element = HTMLDivElement | null;
type TFeatureCardProps = {
  srcIndex: number;
  hasVideo?: boolean;
  title: string;
  description: string;
};
const FeatureCard = ({
  srcIndex,
  hasVideo = true,
  title,
  description,
}: TFeatureCardProps) => {
  const cardRef = useRef<Element>(null);
  const isHovered = useHoverDirty(cardRef);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current && isHovered) {
      videoRef.current.play();
    } else if (videoRef.current && !isHovered) {
      videoRef.current.pause();
    }
  }, [isHovered]);

  return (
    <div
      style={{ border: "1px solid hsla(0, 0%, 100%, 0.2)" }}
      className="size-full cursor-pointer rounded-md relative"
      ref={cardRef}
      onTouchStart={() => {
        videoRef.current?.play();
      }}
      onTouchEnd={() => {
        videoRef.current?.pause();
      }}
    >
      {hasVideo ? (
        <video
          ref={videoRef}
          src={`videos/feature-${srcIndex}.mp4`}
          autoPlay={isHovered}
          muted
          loop
          className="object-cover object-center rounded-md size-full block"
        ></video>
      ) : (
        <div className="size-full bg-violet-300"></div>
      )}
      <div className="absolute top-10 left-10 text-blue-75 max-w-[250px]">
        <div className={`bento-title special-font ${hasVideo ? "" : "text-blue-200"}`}>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
