"use client"
// import { useState } from "react";

export default function Menus() {

  // const [showPDF, setshowPDF] = useState(false)
  
      return (
        <>

        

<section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Menus</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">At Graham's of Cheshire, our curated menus are crafted to suit all occasions, from grand weddings to intimate private dining experiences. Each menu reflects our commitment to bespoke, high-end catering, ensuring that every dish is tailored to your tastes and preferences. Whether you're looking for a formal sit-down meal, an elegant sharing-style feast, or a unique taster menu, our culinary creations offer a refined, personalized touch to make your event truly unforgettable. Explore our menus and let us help you create an extraordinary dining experience.</p>

        <div className="max-w-screen-xl flex flex-wrap flex-row gap-4 items-center justify-between mx-auto p-4 text-center">

<a href="/menus/private-dining-menu.pdf" target="_blank" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-[#EAEAEA]">Private Dining Menu</h5>
<p className="font-normal text-[#EAEAEA]">A sample of our private dining menu, please see gallery page for examples</p>
</a>

<a href="/menus/wedding-breakfast-menu.pdf" target="_blank" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-[#EAEAEA]">Wedding Breakfast Menu</h5>
<p className="font-normal text-[#EAEAEA]">A sample of our wedding breakfast menu, please see gallery for examples</p> 
</a>

<a href="/menus/canape-menu.pdf" target="_blank" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-[#EAEAEA]">Canape Menu</h5>
<p className="font-normal text-[#EAEAEA]">A sample of our canape menu, please see gallery for examples </p>
</a>
</div>

    </div>
</section>



        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-[#EAEAEA] text-center">
          <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4 text-[#EAEAEA] text-center">
  <p className="pb-8">At Graham's of Cheshire, our curated menus are crafted to suit all occasions, from grand weddings to intimate private dining experiences. Each menu reflects our commitment to bespoke, high-end catering, ensuring that every dish is tailored to your tastes and preferences. Whether you're looking for a formal sit-down meal, an elegant sharing-style feast, or a unique taster menu, our culinary creations offer a refined, personalized touch to make your event truly unforgettable. Explore our menus and let us help you create an extraordinary dining experience.</p>
  </div>
  
  <div className="max-w-screen-xl flex flex-wrap flex-row gap-4 items-center justify-between mx-auto p-4 text-center">

    <a href="/menus/private-dining-menu.pdf" target="_blank" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#EAEAEA]">Private Dining Menu</h5>
    <p className="font-normal text-[#EAEAEA]">A sample of our private dining menu, please see gallery page for examples</p>
    </a>

  <a href="/menus/wedding-breakfast-menu.pdf" target="_blank" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#EAEAEA]">Wedding Breakfast Menu</h5>
  <p className="font-normal text-[#EAEAEA]">A sample of our wedding breakfast menu, please see gallery for examples</p> 
  </a>
  
    <a href="/menus/canape-menu.pdf" target="_blank" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#EAEAEA]">Canape Menu</h5>
  <p className="font-normal text-[#EAEAEA]">A sample of our canape menu, please see gallery for examples </p>
  </a>
  </div>
  </div>
  </>
      );
    }