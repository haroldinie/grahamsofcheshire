import Link from "next/link"
import Image from "next/image";
import { Collapse } from 'flowbite';
import type { CollapseOptions, CollapseInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import grahamslogo from './transparent-logo.png'

export default function Header() {
    return (

<nav className="border-b-[5px] border-[#8E793E] px-4 py-2 md:px-8 md:py-1">
<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <Image
      src={grahamslogo}
      alt="Grahams of cheshire logo"
      width={120}
      height={120}
    />
    <h2 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden sm:flex">
      Graham's of Cheshire
    </h2>
  </a>

  {/* Toggling with a checkbox */}
  <input
    type="checkbox"
    id="navbar-toggle"
    className="hidden peer"
    aria-hidden="true"
  />
  <label
    htmlFor="navbar-toggle"
    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#EAEAEA] rounded-lg md:hidden hover:bg-[#AD964F] focus:outline-none focus:ring-2 focus:ring-gray-200"
  >
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </label>

  <div
    className="hidden peer-checked:block w-full md:block md:w-auto"
    id="navbar-dropdown"
  >
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li>

        {/* Dropdown menu */}
        <div
          id="dropdownNavbar"
          className="hidden peer-checked:block z-10 font-normal divide-y divide-gray-100 rounded-lg shadow w-44 bg-[#AD964F]"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <a
                href="/about"
                className="block px-4 py-2 hover:bg-[#AD964F] hover:text-[#EAEAEA]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/menus"
                className="block px-4 py-2 hover:bg-[#AD964F] hover:text-[#AD974F]"
              >
                Menus
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="block px-4 py-2 hover:bg-[#AD964F] hover:text-[#AD974F]"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="/reviews"
                className="block px-4 py-2 hover:bg-[#AD964F] hover:text-[#AD974F]"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block px-4 py-2 hover:bg-gray-600 hover:text-[#AD974F]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </li>

      {/* Additional nav links */}
      <li>
        <a
          href="/about"
          className="block py-2 px-3 rounded hover:bg-[#8E793E] md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-[#AD974F] md:dark:hover:bg-transparent"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="/menus"
          className="block py-2 px-3 rounded hover:bg-[#8E793E] md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-[#AD974F] md:dark:hover:bg-transparent"
        >
          Menus
        </a>
      </li>
      <li>
        <a
          href="/gallery"
          className="block py-2 px-3 rounded hover:bg-[#8E793E] md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-[#AD974F] md:dark:hover:bg-transparent"
        >
          Gallery
        </a>
      </li>
      <li>
        <a
          href="/reviews"
          className="block py-2 px-3 rounded hover:bg-[#8E793E] md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-[#AD974F] md:dark:hover:bg-transparent"
        >
          Reviews
        </a>
      </li>
      <li>
        <a
          href="/contact"
          className="block py-2 px-3 rounded hover:bg-[#8E793E] md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-[#AD974F] md:dark:hover:bg-transparent"
        >
          Contact Us
        </a>
      </li>
    </ul>
  </div>
</div>
</nav>
    )
  }