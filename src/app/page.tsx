import supabase from "../supabaseClient";
import Image from "next/image";
import image5 from "../../public/logo/images/unnamed (2).jpg";
import image6 from "../../public/logo/images/unnamed (6).jpg";
import image7 from "../../public/logo/images/unnamed (7).jpg";
import image8 from "../../public/logo/images/unnamed (3).jpg";
import image9 from "../../public/logo/images/unnamed (11).webp";
import UpcomingEvents from "@/components/UpcomingEvents";

// type EventType = {
//   title: string;
//   description: string;
// };

export default async function Home() {
  const { data: events, error } = await supabase
    .from("upcoming_events")
    .select("*");

  if (error) {
    console.error("Error fetching upcoming events:", error);
    return <p>Error fetching upcoming events</p>;
  }

  return (
    <>
      <div className="max-w-full flex flex-wrap items-center justify-between text-[#EAEAEA] text-center">
        <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4 text-[#EAEAEA] text-center text-l">
          <h1 className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4 text-[#EAEAEA] text-center text-4xl font-bold">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
            Welcome to Graham's of Cheshire
          </h1>
          <br />
          <br />
          <p>
            A bespoke event catering and private dining company located in the
            heart of Cheshire. As a family-run business, we bring over 20 years
            of culinary experience to the table, ensuring that every event we
            cater is a memorable one.
          </p>
        </div>
        <div className="grid gap-4 pt-4 px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <Image
                className="h-auto w-auto max-w-full rounded-lg"
                src={image5}
                alt="Glazed lemon tart, strawberries, chantilly cream"
              />
            </div>
            <div>
              <Image
                className="h-auto w-auto max-w-full rounded-lg"
                src={image6}
                alt="Tuna Ceviche - tiger milk, cracker bread & crispy salmon skin"
              />
            </div>
            <div>
              <Image
                className="h-auto w-auto max-w-full rounded-lg"
                src={image7}
                alt="Canapés - roast baby heritage carrot and crispy chicken skin with ricotta and red pepper caviar"
              />
            </div>
            <div>
              <Image
                className="h-auto w-auto max-w-full rounded-lg"
                src={image8}
                alt="Canapés - beetroot and gin cured salmon on cracker bread"
              />
            </div>
            <div className="hidden md:block">
              <Image
                className="h-auto w-auto max-w-full rounded-lg"
                src={image9}
                alt="Canapes - beetroot and gin cured salmon on cracker bread"
                loading="eager"
                width={400}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      <UpcomingEvents events={events || []} />
    </>
  );
}
