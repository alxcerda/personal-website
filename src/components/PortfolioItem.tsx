import React from "react";

type PortfolioItemProps = {
  title: string;
  url: string;
  description: string;
  image: any;
};

export default function PortfolioItem({
  title,
  url,
  description,
  image,
}: PortfolioItemProps) {
  return (
    <a
      href={url}
      className="hover:bg-gray-50 cursor-pointer px-8 py-3 xs:px-3 my-5 mx-5 flex flex-col fade-in-slow border"
    >
      <img src={image} alt="Portfolio item" className="preview-img" />
      <div className="flex items-center">
        <div className="text-lg"> {title}</div>
      </div>
      <p className="text-accent-medium"> {description} </p>
    </a>
  );
}
