import React from "react";
import TitleText from "../UI/TitleText";
import MountainSchedule from "./MountainSchedule";
import ScheduleView from "./MountainOneView";

const Climb = () => {
  return (
    <div id="climb">
      <section className="px-4 py-16 mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
        <div className="md:flex lg:flex xl:flex md:items-start lg:items-start xl:items-start md:justify-evenly lg:justify-evenly xl:justify-evenly">
          {/* climb img and title */}
          <TitleText
            textStyle={
              "md:pt-[6px] lg:pt-[13px] xl:pt-[30px] left-[50%] md:left-[133px] lg:left-[223px] xl:left-[335px]"
            }
            imgSrc={"/src/assets/02..png"}
            title={"Climb"}
          />
          {/* climb description text */}
          <div className="pt-4 text-left md:pt-0">
            <p className="text-primary font-light font-lato text-[16px] md:ml-[115px] lg:ml-[120px] ml- xl:ml-32">
              Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
              gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
              dignissim tortor nec congue.
            </p>
          </div>
        </div>
      </section>
      <MountainSchedule />
    </div>
  );
};

export default Climb;
