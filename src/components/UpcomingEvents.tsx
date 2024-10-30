import supabase from "@/supabaseClient";

export default async function UpcomingEvents() {
  // Fetch title and description for upcoming events
  const { data: upcomingEvents, error } = await supabase
    .from('upcoming_events')
    .select('title, description');

  if (error) {
    console.error('Error fetching upcoming events:', error);
    return <p>Failed to load upcoming events.</p>;
  }

    return (
        <div id="upcoming-events-wrapper" className="p-6 flex justify-center items-center">
        <div className="max-w-screen-md w-full">
          <div className="flex items-center justify-between w-full p-5 font-bold rtl:text-right text-[#EAEAEA] border-b-0 rounded-t-xl dark:border-[#EAEAEA] gap-3">
            <span>Upcoming Events</span>
          </div>
  
          {/* Dynamically generate accordion items */}
          {upcomingEvents?.map((event, index) => (
            <details key={index} className={`border ${index === 0 ? 'rounded-t-xl' : ''} dark:border-[#EAEAEA]`}>
              <summary className="p-5 font-medium text-[#EAEAEA] cursor-pointer">
                {event.title}
              </summary>
              <div className="p-5 bg-[#8E793E] text-[#EAEAEA]">
                <p>{event.description}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

    )
            }