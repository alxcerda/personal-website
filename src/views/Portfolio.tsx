import PortfolioItem from "../components/PortfolioItem";
import data from "../lib/portfolioData";

function Portfolio() {
  return (
    <div className="px-14 pt-14 xs:px-4 md:pt-3 fade-in-slow">
      <div className="py-5 flex flex-wrap justify-center">
        {data.map((item) => (
          <PortfolioItem
            title={item.title}
            url={item.url}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
