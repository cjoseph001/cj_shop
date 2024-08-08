import { useContext } from "react";
import Product from "../../product";
import { GlobalContext } from "../../global-state";

export default function HomePage() {
  const {
    data,
    filteredData,
    setFilteredData,
    loading,
    handleSearch,
    searchQuery,
    setSearchQuery,
    isSearching,
    resetSearch,
  } = useContext(GlobalContext);

  return (
    <div className="data">
      {loading ? (
        <h1>Loading Data... Please Wait... </h1>
      ) : (
        <div className="home-page">
          <h2 className="home-title">Home</h2>
          <div className="search">
            {isSearching && (
              <button className="reset-button" onClick={resetSearch}>
                Back
              </button>
            )}

            <input
              type="text"
              className="search-input"
              placeholder="Search items here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={() => {
                handleSearch(searchQuery);
              }}
              className="search-button"
              disabled={searchQuery.trim() === ""}
            >
              Search
            </button>
          </div>
          <p style={{ marginBottom: "1.5rem" }}>
            Data is fetched from <i>https://fakestoreapi.com/products</i>
          </p>

          {filteredData && filteredData.length > 0 ? (
            <div className="products">
              {filteredData.map((item) => (
                <Product key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div>
              <h1 className="no-product">No Products found</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
