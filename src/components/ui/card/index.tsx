import { Image } from "../../../types/common";

type Props = {
  title: string;
  abstract: string;
  media: Image;
  byline: string;
  keywords: string[];
  id: string;
};

const Card = ({ title, abstract, media, keywords, id }: Props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden border cursor-pointer">
      <img className="w-full" src={media.url} alt={media.altText} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{abstract}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {keywords.map((keywordItem, index) => (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            key={`keyword-${id}-${index}`}
          >
            #{keywordItem}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
