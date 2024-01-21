import React from "react";
import TitleText from "../UI/TitleText";

const History = () => {
  return (
    <section
      id="history"
      className="h-[700px]  bg-[url('/src/assets/history-bg.png')] bg-no-repeat"
    >
      <div className="px-4 pt-16 mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
        {/* history img and title */}
        <TitleText imgSrc={"/src/assets/01..png"} title={"History"} />
        {/* history description text */}
        <div className="pt-2 text-left">
          <p className="text-primary font-light font-lato text-[16px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            distinctio cum quam eius, eveniet ea nulla accusamus doloribus
            labore cumque enim veritatis minus magnam! Voluptatibus maiores
            totam rerum tempora, atque maxime nemo a vitae fuga illum porro
            corporis dolore modi! Facere accusamus quasi ducimus laborum unde
            dolore autem nobis eos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
