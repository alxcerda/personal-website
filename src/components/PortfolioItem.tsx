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
    <div className="px-8 py-3 xs:px-3 flex flex-col fade-in-slow border">
      <img src={image} alt="Portfolio item" className="preview-img" />
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
