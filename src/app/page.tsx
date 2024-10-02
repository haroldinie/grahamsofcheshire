import Link from "next/link";
import Image from "next/image";
import image10 from "../../public/logo/images/canapehome.jpg";
import image5 from "../../public/logo/images/unnamed (5).jpg";
import image6 from "../../public/logo/images/unnamed (6).jpg";
import image7 from "../../public/logo/images/unnamed (7).jpg";
import image8 from "../../public/logo/images/unnamed (8).jpg";
import image9 from "../../public/logo/images/unnamed (9).jpg";


export default function Home() {
  return ( 
    <>

  <div className="grid gap-4 pt-4 px-4">
    <div className="grid grid-cols-5 gap-4">
        <div>
            <Image className="h-auto w-auto max-w-full rounded-lg" src={image5} alt=""/>
        </div>
        <div>
            <Image className="h-auto w-auto max-w-full rounded-lg" src={image6} alt=""/>
        </div>
        <div>
            <Image className="h-auto w-auto max-w-full rounded-lg" src={image7} alt=""/>
        </div>
        <div>
            <Image className="h-auto w-auto max-w-full rounded-lg" src={image8} alt=""/>
        </div>
        <div>
            <Image className="h-auto w-auto max-w-full rounded-lg" src={image9} alt=""/>
        </div>
    </div>
    
</div>
</>
  );
}