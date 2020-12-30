import shortid from "shortid";

type TitleProps = {
  title: string;
  description: string;
};

function Title({ title, description }: TitleProps) {
  function getRandomKey() {
    return shortid.generate();
  }

  return (
    <div
      key={getRandomKey()}
      className="title  w-full mt-20 xs:mt-16 fade-in-translate-slow-bottom"
    >
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <div className="text-accent-dark title__text--main"> {title} </div>
        <p className="text-accent-dark px-5 text-center xxs:text-xs xxs:px-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Title;
