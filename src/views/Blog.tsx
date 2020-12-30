import BlogItem from "../components/BlogItem";
import Title from "../components/Title";
import data from "../lib/blogData";

function Blog() {
  return (
    <div className="fade-in-slow w-full">
      <Title title="Blog" description="Articles written on DEV.to" />
      <div className="py-5 flex flex-wrap justify-center">
        {data.map((item) => (
          <BlogItem
            key={item.id}
            title={item.title}
            url={item.url}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
