'use client'
import Link from "next/link";
import Image from "next/image";
import image5 from "../../public/logo/images/unnamed (2).jpg";
import image6 from "../../public/logo/images/unnamed (6).jpg";
import image7 from "../../public/logo/images/unnamed (7).jpg";
import image8 from "../../public/logo/images/unnamed (3).jpg";
import image9 from "../../public/logo/images/unnamed (11).jpg";

export default function Home() {
  return ( 
    <>
    <div className="max-w-full flex flex-wrap items-center justify-between text-[#EAEAEA] text-center">
        <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4 text-[#EAEAEA] text-center text-l">
    <h1 className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4 text-[#EAEAEA] text-center text-4xl font-bold">Welcome to Graham's of Cheshire</h1>
        <br></br><br></br><p>A bespoke event catering and private dining company located in the heart of Cheshire. As a family-run business, we bring over 20 years of culinary experience to the table, ensuring that every event we cater is a memorable one.</p>
    
    </div>
  <div className="grid gap-4 pt-4 px-4">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div>
            <Image className="h-auto w-auto max-w-full rounded-lg" src={image5} alt="Glazed lemon tart, strawberries, chantilly cream"/>
        </div>
        <div>
            <Image className="h-auto w-auto max-w-full rounded-lg" src={image6} alt="Tuna Ceviche - tiger milk, cracker bread & crispy salmon skin"/>
        </div>
        <div>
            <Image className="h-auto w-auto max-w-full rounded-lg" src={image7} alt="Canapés - roast baby heritage carrot and crispy chicken skin with ricotta and red pepper caviar"/>
        </div>
        <div>
            <Image className="h-auto w-auto max-w-full rounded-lg" src={image8} alt="Canapés - beetroot and gin cured salmon on cracker bread"/>
        </div>


        <div>
            <div className="hidden md:block">
            <Image className="h-auto w-auto max-w-full rounded-lg" src={image9} alt=""/>
            </div>
        </div>
    </div>
</div>
</div>

<div id="upcoming-events-wrapper" className="p-6 flex justify-center items-center">
        <div className="max-w-screen-md w-full">

        <div className="flex items-center justify-between w-full p-5 font-bold rtl:text-right text-[#EAEAEA] border-b-0 rounded-t-xl dark:border-[#EAEAEA] gap-3">
      <span>Upcoming Events</span>
    </div>
          
          {/* Accordion Item 1 */}
          <details className="border border-b-0 rounded-t-xl dark:border-[#EAEAEA]">
            <summary className="p-5 font-medium text-[#EAEAEA] cursor-pointer">
              Street food taster menu @ Bells of Peover, Cheshire
            </summary>
            <div className="p-5 bg-[#8E793E] text-[#EAEAEA]">
              <p>13th November 2024: for bookings, please call: 01565 7222269</p>
              {/* <p>More details about the event can be shared here.</p> */}
            </div>
          </details>

          {/* Accordion Item 2 */}
          <details className="border border-gray-200 border-b-0 dark:border-[#EAEAEA]">
            <summary className="p-5 font-medium text-[#EAEAEA] cursor-pointer">
              More events coming soon!
            </summary>
            {/* <div className="p-5 bg-[#8E793E] text-[#EAEAEA]">
              <p>Figma details go here.</p>
              <p>More about Figma usage.</p>
            </div> */}
          </details>

          {/* Accordion Item 3 */}
          <details className="border border-gray-200 dark:border-[#EAEAEA]">
            <summary className="p-5 font-medium text-[#EAEAEA] cursor-pointer">
              More events coming soon!
            </summary>
            {/* <div className="p-5 bg-[#8E793E] text-[#EAEAEA]">
              <p>Details about Flowbite and Tailwind UI differences.</p>
              <p>Additional resources and recommendations.</p>
            </div> */}
          </details>
          
        </div>
      </div>

{/* <div id="upcoming-events-wrapper" className="p-6 flex justify-center items-center">
  <div id="accordion-color" className="max-w-screen-md w-full" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">

    <div className="flex items-center justify-between w-full p-5 font-bold rtl:text-right text-[#EAEAEA] border-b-0 rounded-t-xl dark:border-[#EAEAEA] gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
      <span>Upcoming Events</span>
    </div>

    <h2 id="accordion-color-heading-1">
      <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-[#EAEAEA] border border-b-0 rounded-t-xl focus:ring-4 dark:border-[#EAEAEA] dark:hover:bg-[#7B7B7C] gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
        <span>Street food taster menu @ Bells of Peover - Cheshire</span>
        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-color-body-1" className="hidden" aria-labelledby="accordion-color-heading-1">
      <div className="p-5 border border-b-0 dark:border-[#EAEAEA] dark:bg-gray-900">
        <p className="mb-2 text-[#EAEAEA] ">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
        <p className="text-[#EAEAEA] ">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
      </div>
    </div>

    <h2 id="accordion-color-heading-2">
      <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-[#EAEAEA] border border-b-0 focus:ring-4 dark:border-[#EAEAEA] dark:hover:bg-[#7B7B7C] gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
        <span>Is there a Figma file available?</span>
        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-color-body-2" className="hidden" aria-labelledby="accordion-color-heading-2">
      <div className="p-5 border border-b-0 dark:border-[#EAEAEA]">
        <p className="mb-2 text-[#EAEAEA] ">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
        <p className="text-[#EAEAEA] ">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
      </div>
    </div>

    <h2 id="accordion-color-heading-3">
      <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-[#EAEAEA] border focus:ring-4 dark:border-[#EAEAEA] dark:hover:bg-[#7B7B7C] gap-3" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
        <span>What are the differences between Flowbite and Tailwind UI?</span>
        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-color-body-3" className="hidden" aria-labelledby="accordion-color-heading-3">
      <div className="p-5 border border-t-0 dark:border-[#EAEAEA]">
        <p className="mb-2 text-[#EAEAEA] ">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
        <p className="mb-2 text-[#EAEAEA] ">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
        <p className="mb-2 text-[#EAEAEA] ">Learn more about these technologies:</p>
        <ul className="ps-5 text-[#EAEAEA] list-disc">
          <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
          <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
        </ul>
      </div>
    </div>

  </div>
</div> */}


{/* TABLE FOR UPCOMING EVENTS */}

{/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Upcoming Events
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">A list of our upcoming events featuring Chef Adrian.</p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div> */}



{/* BELOW IS THE CAROUSEL FOR MOBILE VIEW NOT WORKING CURRENTLY */}

{/* <div id="default-carousel" className="relative w-full" data-carousel="slide"> */}

    {/* <!-- Carousel wrapper --> */}
    
    {/* <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={image5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={image6} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={image7} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={image8} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
             <Image src={image9} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div> */}



    {/* <!-- Slider indicators --> */}

    {/* <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div> */}

    {/* <!-- Slider controls --> */}

    {/* <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div> */}

    
</>
  );
}