import ItemList from "../components/ItemList";
import PageTitle from "../components/PageTitle";
import SearchFilter from "../components/SearchFilter";

function Buy() {
  return (
    <>
      <PageTitle
        img="./background-title-2-1.png"
        heading="Bid on Pieces"
        subHeading="Explore fine gold and jewelry listings available for competitive bidding now."
      />
      <SearchFilter />
      <ItemList />
    </>
  );
}

export default Buy;
