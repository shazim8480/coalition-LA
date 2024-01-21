import React, { useState } from "react";
import MountainTwoView from "../Climb/MountainTwoView";
import MountainOneView from "../Climb/MountainOneView";
// import { renderMountainView } from "../Climb/mountainView-mobile";

const AccordionItem = ({
  title,
  content,
  isMountainTwoSelected,
  setIsMountainTwoSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const renderMountainView = (item) => {
    if (item === "MOUNTAIN 2") {
      setIsMountainTwoSelected(true);
    } else if (item === "MOUNTAIN 1") {
      setIsMountainTwoSelected(false);
    } else {
      setIsMountainTwoSelected(false);
    }
  };

  return (
    <div className="font-bold bg-primary text-mountainGray font-oswald">
      <button
        type="button"
        onClick={toggleOpen}
        className={`flex justify-between items-center p-2 text-left w-full ${
          isOpen ? "bg-secondary" : "bg-primary"
        }`}
      >
        <span className="pl-2 font-bold">{title}</span>
        <span className={isOpen ? "hidden pr-2" : "block pr-2"}>+</span>
        <span className={isOpen ? "block pr-2" : "hidden pr-2"}>-</span>
      </button>
      {isOpen &&
        content.map((item, index) => {
          return (
            <div className="justify-start" key={index}>
              <button
                onClick={() => renderMountainView(item)}
                className="w-full px-4 py-2 transition delay-75 hover:bg-mountainGray hover:text-primary hover:underline"
              >
                {item}
              </button>
            </div>
          );
        })}
    </div>
  );
};

const Accordion = ({
  items,
  isMountainTwoSelected,
  setIsMountainTwoSelected,
}) => {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
          isMountainTwoSelected={isMountainTwoSelected}
          setIsMountainTwoSelected={setIsMountainTwoSelected}
        />
      ))}
      {isMountainTwoSelected ? <MountainTwoView /> : <MountainOneView />}
    </div>
  );
};

export default Accordion;
