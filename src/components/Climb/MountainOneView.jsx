import React from "react";

const MountainOneView = () => {
  const mountainOneData = [
    {
      date: "17 Nov 2016",
      text: "Vestibulum viverra",
    },
    {
      date: "13 Dec 2016",
      text: "Vestibulum viverra",
    },
    {
      date: " ",
      text: " ",
    },
    {
      date: "28 Dec 2016",
      text: "Vestibulum viverra",
    },
    {
      date: " ",
      text: " ",
    },
    {
      date: "9 Feb 2017",
      text: "Vestibulum viverra",
    },
  ];

  return (
    <section className="h-full bg-[url('/src/assets/mountain-1-view.png')] bg-no-repeat">
      <div className="px-4 py-32 mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
        {/* schedule component */}
        <div className="px-8 py-3 bg-white opacity-70 w-[350px]">
          <h4 className="font-oswald font-semibold text-primary text-[32px] uppercase pb-2">
            Schedule
          </h4>
          {mountainOneData.map((scheduleItem, index) => {
            return (
              <div
                className="flex font-lato font-light text-[14px] items-start justify-between"
                key={index}
              >
                <p className="pt-[2px] pb-3">{scheduleItem.date}</p>
                <p className="pb-3">{scheduleItem.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MountainOneView;
