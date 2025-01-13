import { useIsFetching } from "@tanstack/react-query";
import { useMemo } from "react";
import { useGetMostPopular } from "../../../api/mostPopular/mostPopular.query";
import { QUERY_KEYS } from "../../../api/queryKeys";
import Card from "../../../components/ui/card";
import Loading from "../../../components/ui/loading";
import NoDataFound from "../../../components/ui/no-data-found";
import Wrapper from "../../../components/ui/wrapper";

const Listing = () => {
  const isFetching = useIsFetching({
    queryKey: [QUERY_KEYS.MOST_POPULAR],
  });
  const { data } = useGetMostPopular();
  const renderCardList = useMemo(() => {
    if (!data?.results?.length) {
      return [];
    }
    const { results } = data;
    return results.map((item) => {
      const { abstract, byline, id, media, title, url } = item;
      const firstMedia = media?.[0];
      const imageData = firstMedia?.["media-metadata"]?.[1] || {};

      return {
        abstract,
        title,
        byline,
        id: id.toString(),
        media: imageData,
        url,
      };
    });
  }, [data]);

  if (isFetching > 0) {
    return <Loading />;
  }

  return (
    <Wrapper className="flex flex-wrap gap-8" data-testid="list">
      {renderCardList ? (
        renderCardList.map(({ title, byline, id, abstract, url, media }) => (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            key={`most-popular-card-list-${id}`}
          >
            <Card
              title={title}
              abstract={abstract}
              byline={byline}
              media={{
                ...media,
                altText: title,
              }}
            />
          </a>
        ))
      ) : (
        <NoDataFound />
      )}
    </Wrapper>
  );
};

export default Listing;
