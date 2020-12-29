type BlogItemProps = {
  title: string;
  url: string;
  description: string;
  image: any;
};

function BlogItem({ title, url, description, image }: BlogItemProps) {
  return (
    <div className="px-8 py-3 xs:px-3 flex flex-col fade-in-slow border">
      <img src={image} className="preview-img" />
      <div className="flex justify-between items-center">
        <div className="text-lg"> {title}</div>
        <a href={url} className="underline">
          View
        </a>
      </div>
      <p className="text-accent-medium"> {description} </p>
    </div>
  );
}

export default BlogItem;
