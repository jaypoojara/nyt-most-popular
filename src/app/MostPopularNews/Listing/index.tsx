import Card from "../../../components/ui/card";
import Wrapper from "../../../components/ui/wrapper";

const Listing = () => {
  /**
   * TODO: need to make api call
   */
  return (
    <Wrapper className="flex flex-wrap gap-8">
      {Array(10)
        .fill(0)
        .map(() => (
          <Card
            title="Hello world is best title"
            id="100000009918397"
            // adxkeyword key should be used
            keywords={"Government Employees;Workplace Environment;United States".split(
              ";"
            )}
            abstract="abstract abstract"
            byline="byline"
            media={{
              url: "https://picsum.photos/id/237/400/300",
              altText: "Sunset in the mountains",
            }}
          />
        ))}
    </Wrapper>
  );
};

export default Listing;
