import Contactform from "@/components/Contactform";
import Image from "next/image";
import adiebackground from "./unnamed (1).jpg"
import '../backgroundimages.css';


export default function AboutUs() {
    return (
       <div className="page-wrapper">
            <div className="backgroundImage"></div> {/* Background image inside the content container */}
            <div className="">

            <div className="shade max-w-screen-xl text-center rounded-lg shadow border-[#7B7B7C] p-6">
            <h1 className="text-center text-2xl font-bold">About Us</h1>
                <br></br>
                <p className="text-center">
                Welcome to Grahams of Cheshire - a bespoke event catering and private dining company located in the heart of Cheshire. As a family-run business, we bring over 20 years of culinary experience to the table, ensuring that every event we cater is a memorable one. 
                <br></br>
                <br></br>
                Founded by Adrian, a seasoned expert in the catering industry, Grahams of Cheshire is committed to delivering exceptional food quality tailored to the unique needs of each client. Whether you're hosting an intimate private dinner or a large-scale event, our team provides personalized menus that blend creativity, fresh ingredients, and culinary excellence. 
                <br></br>
                <br></br>
                At Grahams of Cheshire, we believe in making every occasion special, with a focus on meticulous service and extraordinary flavors. Let us help you create an unforgettable experience with food that delights the senses.  
                </p>    


                <div>
                <div className="flex flex-wrap justify-center content-center text-center">
                    <a href="/menus" className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Menus</h5>
                        <p className="font-normal text-[#EAEAEA]">See a sample of our latest menus</p>
                    </a>

                    <a href="/gallery" className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gallery</h5>
                        <p className="font-normal text-[#EAEAEA]">Pictures from our latest events</p>
                    </a>

                    <a href="/reviews" className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#8E793E] dark:border-gray-700 dark:hover:bg-[#AD974F]">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reviews</h5>
                        <p className="font-normal text-[#EAEAEA]">Take a look at our latest reviews</p>
                    </a>
                </div>
                </div>


            </div>
            <div className="pt-10">
                <Contactform />
                </div>
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