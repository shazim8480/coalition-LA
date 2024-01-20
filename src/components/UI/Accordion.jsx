import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

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
            <div
              key={index}
              className="px-4 py-2 transition delay-75 hover:bg-mountainGray hover:text-primary hover:underline"
            >
              {item}
            </div>
          );
        })}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
