type TitleProps = {
  title: string;
  description: string;
};

export default function Title({ title, description }: TitleProps) {
  return (
    <div className="title bg-gray-100 w-full mt-20 xs:mt-16 fade-in-translate-slow-top z-0">
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <div className="text-accent-dark title__text--main"> {title} </div>
        <p className="text-accent-dark px-5 text-center xxs:text-xs xxs:px-2">
          {description}
        </p>
      </div>
    </div>
  );
}
