import Image, { StaticImageData } from "next/image";
import { SingleImageComponent } from "./SingleGalleryImage";
import image1 from "../../../public/logo/images/unnamed (2).jpg";
import image2 from "../../../public/logo/images/unnamed (3).jpg";
import image3 from "../../../public/logo/images/unnamed (4).jpg";
import image5 from "../../../public/logo/images/unnamed (5).jpg";
import image6 from "../../../public/logo/images/unnamed (6).jpg";
import image7 from "../../../public/logo/images/unnamed (7).jpg";
import image8 from "../../../public/logo/images/unnamed (8).jpg";
import image9 from "../../../public/logo/images/unnamed (9).jpg";
import image10 from "../../../public/logo/images/unnamed (10).jpg";
import image11 from "../../../public/logo/images/unnamed (11).jpg";
import image12 from "../../../public/logo/images/image0.jpg";
import image13 from "../../../public/logo/images/image3.jpg";
import "../gallery.css";

type ImageType = {
    src: StaticImageData;
    id: string;
    overlayText: string;
};

const images: ImageType[] = [
    { src: image1, id: "image", overlayText: "Glazed lemon tart, strawberries, chantilly cream" },
    { src: image2, id: "image1", overlayText: "Private dining event - fillet of beef wellington, asparagus, broad beans, red wine jus" },
    { src: image3, id: "image2", overlayText: "Private dining event - pan seared scallops, pea mousse, chive oil, chicken crumb, micro parsley" },
    { src: image5, id: "image3", overlayText: "Guest appearance at the Cheshire Show" },
    { src: image6, id: "image4", overlayText: "Tuna Ceviche - tiger milk, cracker bread & crispy salmon skin" },
    { src: image7, id: "image5", overlayText: "Canapés - roast baby heritage carrot and crispy chicken skin with ricotta and red pepper caviar" },
    { src: image8, id: "image6", overlayText: "Tatton Park venison, dauphiniose potato, broccoli puree, pickled blackberries, tender stem broccoli" },
    { src: image9, id: "image7", overlayText: "pan friend chicken breast, confit garlic mashed potato, buttered savoy cabbage, wild mushroom sauce" },
    { src: image10, id: "image8", overlayText: "roast lamb rump, dauphinoise potato, parsnip puree, roasted beetroot, tender stem broccoli, parsnip crisps, lamb jus" },
    { src: image11, id: "image9", overlayText: "Canapés - beetroot and gin cured salmon on cracker bread" },
    { src: image12, id: "image10", overlayText: "Guest Appearance at Academy West at Cheshire College South & West - cashew cheese tartlet, beetroot & balsamic caviar" },
    { src: image13, id: "image11", overlayText: "Guest Appearance at Academy West at Cheshire College South & West - roast lamb rump, served with parlsey root, dauphinoise potato, lamb jus" },
];

export default function Gallery() {
    return (
        <>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 px-4">
                    {images.map(({ src, id, overlayText }) => (
                        <SingleImageComponent
                            key={id}
                            src={src}
                            overlayText={overlayText}
                            id={id}
                        />
                    ))}
                </div>

                {/* Lightbox targets are outside the grid */}
                {images.map(({ src, id }) => (
                    <div className="lightbox-target" id={id} key={id}>
                        <Image className="h-auto w-auto max-w-full rounded-lg" src={src} alt="" />
                        <a className="lightbox-close" href="#"></a>
                    </div>
                ))}
            </div>
        </>
    )
}

