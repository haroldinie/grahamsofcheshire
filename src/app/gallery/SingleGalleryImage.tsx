"use client";
import React, { useState } from "react";
import Image from "next/image";

type SingleImageComponentProps = {
    src: string; // Change this to string since it's coming from Supabase
    overlayText: string;
    id: string;
};

export const SingleImageComponent: React.FC<SingleImageComponentProps> = ({ src, overlayText, id }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="relative h-auto w-auto flex justify-center content-center">
            {hovered && (
                <div className="absolute h-full w-full z-20 flex justify-center items-center text-center p-4 pointer-events-none hidden sm:flex">
                    {overlayText}
                </div>
            )}
            <a href={`#${id}`} className={hovered ? "blur-sm brightness-50 hidden sm:flex" : ""}>
                <Image
                    className="h-auto w-auto max-w-full rounded-lg"
                    src={src}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    alt={overlayText}
                    layout="intrinsic"
                    width={500}
                    height={500} // You can adjust the width and height based on your design
                    // You can adjust the width and height based on your design
                />
            </a>
        </div>
    );
};

// "use client"
// import React, { useState } from "react"
// import Image, { StaticImageData } from "next/image";

// type SingleImageComponentProps = {
//     src: StaticImageData;
//     overlayText: string;
//     id: string;
// };


// export const SingleImageComponent : React.FC<SingleImageComponentProps> = ({src, overlayText, id}) => {

//     const [hovered, setHovered] = useState(false);

//     const handleMouseLeave = () => {
//         setHovered(false);
//     }

    // return (
//         <div className="relative h-auto w-auto flex justify-center content-center">
//             {hovered && (
//                 <div className="absolute h-full w-full z-20 flex justify-center items-center text-center p-4 pointer-events-none hidden sm:flex">
//                     {overlayText}
//                 </div>
//             )}
//             <a href={`#${id}`} className={hovered ? "blur-sm brightness-50 hidden sm:flex" : ""}>
//                 <Image
//                     className="h-auto w-auto max-w-full rounded-lg"
//                     src={src}
//                     onMouseEnter={() => setHovered(true)}
//                     onMouseLeave={handleMouseLeave}
//                     alt={overlayText}
//                 />
//             </a>
//         </div>
//     );
// };