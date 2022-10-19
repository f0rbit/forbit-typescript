import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "public/icon.png";
import Link from "next/link";
import links from "src/assets/pages";
import Image from "next/image";

function NavLink(name: string, large: boolean, dest: string) {
  return (
    <div key={name}>
      <Link href={dest}>
        <a
          className={
            "block rounded-md px-3 py-2 " +
            (large ? "text-base" : "text-sm") +
            " border-2 border-neutral-900 font-semibold text-white hover:border-neutral-700 hover:bg-neutral-800 hover:text-white hover:shadow-md"
          }
          href={dest}
        >
          {name}
        </a>
      </Link>
    </div>
  );
}
type NavProps = {
  noicon: boolean;
};

function NavBar({ noicon }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="w-screen bg-neutral-900">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex w-full items-center justify-center">
              {" "}
              <div className="flex-shrink-0">
                {noicon ? (
                  <></>
                ) : (
                  <div className="w-9 flex justify-center align-middle">
                    <Image src={logo} width={64} height={64} alt="icon" />
                  </div>
                )}
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {links.map((l: any) => NavLink(l.title, false, l.dest))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-neutral-800 p-2 text-neutral-500 hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
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
                    xmlns="http://www.w3.org/2000/svg"
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
              </button>
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
          {() => (
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {links.map((l: any) => NavLink(l.title, true, l.dest))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
