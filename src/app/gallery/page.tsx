import Image from "next/image"
import image1 from "../../../public/logo/images/unnamed (2).jpg"
import image2 from "../../../public/logo/images/unnamed (3).jpg"
import image3 from "../../../public/logo/images/unnamed (4).jpg"
import image5 from "../../../public/logo/images/unnamed (5).jpg"
import image6 from "../../../public/logo/images/unnamed (6).jpg"
import image7 from "../../../public/logo/images/unnamed (7).jpg"
import image8 from "../../../public/logo/images/unnamed (8).jpg"
import image9 from "../../../public/logo/images/unnamed (9).jpg"
import image10 from "../../../public/logo/images/unnamed (10).jpg"
import image11 from "../../../public/logo/images/unnamed (11).jpg"


export default function Gallery() {
    return (
        <>
        <h1>Gallery</h1>


        
        <div>
        

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <Image className="h-auto w-auto max-w-full rounded-lg" src={image1} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={image2} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={image3} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={image5} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={image6} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={image7} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={image8} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={image9} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={image10} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={image11} alt=""/>
        </div>
        {/* <div>
            <Image className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div> */}
    </div>
</div>

        </div>
        </>
    )
}