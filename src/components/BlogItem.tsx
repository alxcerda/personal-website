import React from "react";
type BlogItemProps = {
  title: string;
  url: string;
  image: any;
};

export default function BlogItem({ title, url, image }: BlogItemProps) {
  return (
    <a
      href={url}
      className="hover:bg-gray-50 cursor-pointer px-8 py-3 xs:px-3 my-5 mx-5 flex flex-col fade-in-slow border blog-item"
    >
      <img src={image} alt="Blog item" className="blog-item-img" />
      <div className="flex justify-between items-center pt-2">
        <div className="text-lg"> {title}</div>
      </div>
    </a>
  );
}
