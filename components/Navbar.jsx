import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";

function navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="shadow-sm sticky bg-white top-0 w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <Image
                  src="/../public/assets/profilePicture.jpg"
                  alt="My profile piccture"
                  width="50"
                  height="50"
                  class="rounded-full"
                />
              </div>
              <div className=" hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <button
                    onClick={() => router.push("/")}
                    activeClass="home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-[#312f2f] hover:shadow-lg hover:shadow-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => router.push("/CV")}
                    activeClass="cv"
                    to="cv"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text--[#312f2f] hover:shadow-lg hover:shadow-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                  >
                    Curriculum vitae
                  </button>
                  <button
                    onClick={() => router.push("/Projects")}
                    activeClass="projects"
                    to="projects"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-[#312f2f] hover:shadow-lg hover:shadow-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => router.push("/Stage")}
                    activeClass="stage"
                    to="stage"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-[#312f2f] hover:shadow-lg hover:shadow-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                  >
                    Stage
                  </button>
                  <button
                    onClick={() => router.push("/Contact")}
                    activeClass="contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer bg-blue-600 text-white hover:shadow-lg hover:shadow-[#312f2f] hover:scale-105 px-3 py-2 hover:bg-[#ff9f1c] rounded-md text-sm font-medium capitalize"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-offset-2 focus-ring-blue-800 focus:ring-white capitalize"
                aria-controls="mobile-menu"
                aria-expanded="false"
              ></button>
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http:www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http:www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden id=mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col"
              >
                <button
                  onClick={() => router.push("/")}
                  activeClass="Home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={50}
                  className="cursor-pointer hover:bg-blue-600 text-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                >
                  Home
                </button>
                <button
                  onClick={() => router.push("/CV")}
                  activeClass="cv"
                  to="cv"
                  smooth={true}
                  offset={50}
                  duration={50}
                  className="cursor-pointer hover:bg-blue-600 text-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                >
                  Curriculum vitae
                </button>
                <button
                  onClick={() => router.push("/Projects")}
                  activeClass="projects"
                  to="projects"
                  smooth={true}
                  offset={50}
                  duration={50}
                  className="cursor-pointer hover:bg-blue-600 text-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                >
                  Projects
                </button>
                <button
                  onClick={() => router.push("/Stage")}
                  activeClass="stage"
                  to="stage"
                  smooth={true}
                  offset={50}
                  duration={50}
                  className="cursor-pointer hover:bg-blue-600 text-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                >
                  Stage
                </button>
                <button
                  onClick={() => router.push("/Contact")}
                  activeClass="contact"
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={50}
                  className="cursor-pointer hover:bg-blue-600 text-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}

export default navbar;
