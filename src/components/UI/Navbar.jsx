import React, { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 bg-white border-b border-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
      <div className="max-w-5xl px-4 py-2 mx-auto">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <div className="flex items-center justify-start">
            <img
              src="/src/assets/Logo.png"
              className="object-contain"
              alt="hero-LA"
            />
            <div className="uppercase leading-5 font-bebas tracking-wider text-[20px] ml-2">
              <h3 className="block text-secondary">LOSANGELES</h3>
              <span className="text-primary">MOUNTAINS</span>
            </div>
          </div>
          {/* nav refs - mobile */}
          <div className="block md:hidden lg:hidden xl:hidden">
            <Menu as="div" className="relative inline-block text-left">
              <button>
                <Menu.Button>
                  <img
                    className="w-8 h-8"
                    src="/src/assets/mobile-menu.svg"
                    alt="mobile-menu"
                  />
                </Menu.Button>
              </button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute -right-4 mt-3 font-semibold origin-top-right bg-gray-100 divide-y rounded-sm shadow-lg w-[320px] opacity-90 font-oswald text-primary ring-1 ring-black/5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#history"
                          className={`group flex w-full items-center rounded-md px-2 py-4 text-lg uppercase`}
                        >
                          01. History
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#climb"
                          className={` group flex w-full items-center rounded-md px-2 pb-4 text-lg uppercase`}
                        >
                          02. Team
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          {/* nav refs - tablet, laptop and desktop */}
          <div className="hidden md:block lg:block xl:block">
            <div className="flex space-x-4 italic font-bold underline text-secondary font-lato">
              <a className="uppercase hover:text-white" href="#history">
                01. History
              </a>
              <a className="uppercase hover:text-white" href="#climb">
                02. Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
