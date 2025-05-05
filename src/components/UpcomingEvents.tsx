import React from "react";

type EventType = {
  title: string;
  description: string;
  date: string;
};

type UpcomingEventsProps = {
  events: EventType[];
};

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  const now = new Date();
const filteredEvents = events.filter((event) => new Date(event.date) > now);

return (
  <div
    id="upcoming-events-wrapper"
    className="p-6 flex justify-center items-center"
  >
    <div className="max-w-screen-md w-full">
      <div className="flex items-center justify-between w-full p-5 font-bold rtl:text-right text-[#EAEAEA] border-b-0 rounded-t-xl dark:border-[#EAEAEA] gap-3">
        <h2 className="text-xl font-bold">Upcoming Events</h2>
      </div>

      {filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => (
          <details
            key={index}
            className={`border ${
              index === 0 ? "rounded-t-xl" : ""
            } border-[#EAEAEA]`}
          >
            <summary className="p-5 font-medium text-[#EAEAEA] cursor-pointer">
              {event.title}
            </summary>
            <div className="p-5 border-t-2 border-[#8E793E] text-[#EAEAEA]">
              <p>- {event.description}</p>
            </div>
          </details>
        ))
      ) : (
        
        <summary className="p-5 font-medium text-[#EAEAEA]">
        <p className="text-[#EAEAEA] p-5 italic">
          More events coming soon, please check back later.
        </p>
        </summary>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
