import React, { useState } from "react";
import Accordion from "../UI/Accordion";
import MountainOneView from "./MountainOneView";
import MountainTwoView from "./MountainTwoView";

const MountainSchedule = () => {
  const [isMountainTwoSelected, setIsMountainTwoSelected] = useState(false);

  const items = [
    { title: "SELECT MOUNTAIN", content: ["MOUNTAIN 1", "MOUNTAIN 2"] },
  ];

  return (
    <>
      <div className="bg-primary">
        {/* mobile view > accordion */}
        <div className="block md:hidden lg:hidden xl:hidden">
          <Accordion
            isMountainTwoSelected={isMountainTwoSelected}
            setIsMountainTwoSelected={setIsMountainTwoSelected}
            items={items}
          />
        </div>
        {/* tablet, laptop and desktop view */}
        <div className="hidden md:block lg:block xl:block md:px-4 lg:px-4 xl:px-4 md:mx-auto lg:mx-auto xl:mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
          <div className="flex items-center justify-start">
            <button
              onClick={() => setIsMountainTwoSelected(false)}
              className="py-2 px-5 transition delay-75 hover:bg-mountainGray hover:text-primary hover:underline font-oswald font-semibold text-[20px] text-mountainGray uppercase"
            >
              MOUNTAIN 1
            </button>
            <button
              onClick={() => setIsMountainTwoSelected(true)}
              className="py-2 px-5 transition delay-75 hover:bg-mountainGray hover:text-primary hover:underline font-oswald font-semibold text-[20px] text-mountainGray uppercase"
            >
              MOUNTAIN 2
            </button>
          </div>
        </div>
      </div>
      {/* dynamically render mountain views - mobile */}
      {/* <div className="block md:hidden lg:hidden xl:hidden">
        {renderMountainView()}
      </div> */}
      {/* dynamically render mountain views - tablet, laptop and desktop */}
      <div className="hidden md:block lg:block xl:block">
        {isMountainTwoSelected ? <MountainTwoView /> : <MountainOneView />}
      </div>
    </>
  );
};

export default MountainSchedule;
