"use client";
import Contactform from "@/components/Contactform";
import "../menus.css";
export default function Menus() {
  return (
    <>
      <div className="page-wrapper">
        <div className="backgroundImage"></div>
        <div className="">
          <div className="shade max-w-screen-xl text-center rounded-lg shadow border-[#7B7B7C] p-6">
            <h1 className="text-center text-5xl font-bold">Menus </h1>
            <br></br>
            <p className="text-center pb-10">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
              At Graham's of Cheshire, our curated menus are crafted to suit all
              occasions, from grand weddings to intimate private dining
              experiences. Each menu reflects our commitment to bespoke,
              high-end catering, ensuring that every dish is tailored to your
              tastes and preferences. <br></br>
              <br></br>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
              Whether you're looking for a formal sit-down meal, an
              elegant sharing-style feast, or a unique taster menu, our culinary
              creations offer a refined, personalized touch to make your event
              truly unforgettable. Explore our menus and let us help you create
              an extraordinary dining experience
            </p>

            <div>
              <div className="flex flex-wrap justify-center content-center text-center">
                <a
                  href="/menus/private-dining-menu.pdf"
                  className="block max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Private Dining Menu
                  </h5>
                  <p className="font-normal text-[#EAEAEA]">
                    A sample of our private dining menu, please see gallery for
                    examples
                  </p>
                </a>

                <a
                  href="/menus/wedding-breakfast-menu.pdf"
                  className="block max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Wedding Breakfast Menu
                  </h5>
                  <p className="font-normal text-[#EAEAEA]">
                    A sample of our wedding breakfast menu, please see gallery
                    for examples
                  </p>
                </a>

                <a
                  href="/menus/canape-menu.pdf"
                  className="block max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Canape Menu
                  </h5>
                  <p className="font-normal text-[#EAEAEA]">
                    A sample of our canape menu, please see gallery for examples
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="sm:pt-20 sm:mt-20">
            <Contactform />
          </div>
        </div>
      </div>
    </>
  );
}
