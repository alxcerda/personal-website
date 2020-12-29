import BlogItem from "../components/BlogItem";
import data from "../lib/blogData";

function Blog() {
  return (
    <div className="px-14 pt-14 xs:px-4 md:pt-3 fade-in-slow">
      <div className="py-5 flex flex-wrap justify-center">
        {data.map((item) => (
          <BlogItem title={item.title} url={item.url} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
