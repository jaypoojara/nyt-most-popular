import { Image } from "../../../types/common";

type Props = {
  title: string;
  abstract: string;
  media: Image;
  byline: string;
};

const Card = ({ title, abstract, media, byline }: Props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden border cursor-pointer">
      <img
        className="w-full"
        src={media.url}
        alt={media.altText}
        {...(media?.width ? { width: media.width } : {})}
        {...(media?.height ? { height: media.height } : {})}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-4">{abstract}</p>
        <p className="text-sm text-gray-500">{byline}</p>
      </div>
    </div>
  );
};

export default Card;
