import React from "react";

const TitleText = ({ imgSrc, title, textStyle, imgStyle }) => {
  return (
    <div className="flex items-start justify-start">
      <img className={`${imgStyle} relative`} src={imgSrc} />
      <h3
        className={`${textStyle} text-primary pt-[54px] absolute left-[43%] md:left-[24%] lg:left-[26%] xl:left-[24%] font-bold font-oswald text-[32px] uppercase`}
      >
        {title}
      </h3>
    </div>
  );
};

export default TitleText;
