import Contactform from "@/components/Contactform";
import Image from "next/image";
import adiebackground from "./unnamed (1).jpg"
import '../backgroundimages.css';


export default function AboutUs() {
    return (
       <div className="page-wrapper">
            <div className="backgroundImage"></div> {/* Background image inside the content container */}
            
            <div className="container text-center">
                <h1>About Us</h1>
                <p>
                    At Graham's of Cheshire, we believe that exceptional events begin with extraordinary food. Led by our Executive Chef Adrian Munt with a passion for culinary excellence, we offer bespoke catering services that elevate any occasion. From intimate gatherings to grand celebrations, we tailor every menu to reflect your vision and taste, ensuring that every dish is a masterpiece.
                    <br />
                    <br />
                    With a focus on fresh, locally sourced ingredients and impeccable presentation, we provide a high-class dining experience that delights the senses. Whether you're hosting a wedding, corporate event, or private dinner, Graham's of Cheshire brings professionalism, creativity, and a personal touch to your table.
                    <br />
                    <br />
                    Our commitment to quality and attention to detail sets us apart, making your event as memorable as it is delicious.
                </p>


                <div>
                <div className="max-w-screen-sm flex justify-between content-center">
                    <a href="/menus" className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Menus</h5>
                        <p className="font-normal text-[#EAEAEA]">See our latest menus</p>
                    </a>

                    <a href="/gallery" className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gallery</h5>
                        <p className="font-normal text-[#EAEAEA]">Pictures from our latest events</p>
                    </a>

                    <a href="/contact" className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact Us</h5>
                        <p className="font-normal text-[#EAEAEA]">Get in touch with any questions</p>
                    </a>
                </div>
                </div>


                <Contactform />
            </div>
        </div>
    );
}
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-[#EAEAEA] container">
//             <div className="backgroundImage">
//         {/* <Image className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none" src={adiebackground} alt="image description"/> */}
//         <h1>About Us</h1>
//             <p>At Graham's of Cheshire, we believe that exceptional events begin with extraordinary food. Led by our Executive Chef Adrian Munt with a passion for culinary excellence, we offer bespoke catering services that elevate any occasion. From intimate gatherings to grand celebrations, we tailor every menu to reflect your vision and taste, ensuring that every dish is a masterpiece.

//         With a focus on fresh, locally sourced ingredients and impeccable presentation, we provide a high-class dining experience that delights the senses. Whether you're hosting a wedding, corporate event, or private dinner, Graham's of Cheshire brings professionalism, creativity, and a personal touch to your table.
        
//         Our commitment to quality and attention to detail sets us apart, making your event as memorable as it is delicious.</p>
        


        
//         <div className="max-w-screen-sm flex flex wrap justify-between">
//         <a href="/menus" className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">

// <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Menus</h5>
// <p className="font-normal text-[#EAEAEA]">See a collection of our latest menus</p>
// </a>

// <a href="/gallery" className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">

// <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gallery</h5>
// <p className="font-normal text-[#EAEAEA]">Pictures from our latest events</p>
// </a>

// <a href="/contact" className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">

// <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact Us</h5>
// <p className="font-normal text-[#EAEAEA]">Get in touch with any questions</p>
// </a>
// </div>

// <Contactform/>

        
//         </div>
//         </div>
//     )
// }