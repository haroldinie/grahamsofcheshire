import "../reviewsbackgroundimage.css";
import { supabaseServer } from "@/supabaseServer";

export default async function Reviews() {

  const { data: reviews, error } = await supabaseServer
  .from('reviews')
  .select('*');

if (error) {
  console.error('Error fetching reviews:', error);
  return <p>Failed to load reviews.</p>;
}

return (
  
  <div className="page-wrapper">
    <div className="backgroundImage"> </div>
    
    <div className="flex justify-between flex-wrap p-4 gap-4">
      {reviews?.map((review, index) => (
        <div key={index} className="shade block max-w-sm p-6 rounded-lg shadow border-[#7B7B7C]">
          <h5 className="mb-2 md:text-l font-semibold tracking-tight text-[#EAEAEA]">
            {review.review_body}
          </h5>
        </div>
      ))}
    </div>
  </div>
    );
    }

    // <>
    //   <div className="page-wrapper">
    //     <div className="backgroundImage"> </div>
        
    //       <div className="flex justify-between flex-wrap p-4 gap-4">
    //         {/* inserting container above makes a change */}
    //         <div className="shade block max-w-sm p-6 rounded-lg shadow border-[#7B7B7C]">
    //           <h5 className="mb-2 md:text-l font-semibold tracking-tight text-[#EAEAEA]">
    //             "Adie did a fantastic job catering for our parents' golden wedding anniversary dinner. Great communication beforehand, finessing the menu to our specifications and arrived with plenty of time and also plenty of amazing leftovers...including a sublime jus to go with the perfect beef wellingtons. Declared by all to be an amazing meal!"
    //           </h5>
    //         </div>
    //         <div className="shade block max-w-sm p-6 rounded-lg shadow border-[#7B7B7C]">
    //           <h5 className="mb-2 md:text-l font-semibold tracking-tight text-[#EAEAEA]">
    //             "At last we have Adie back in the fold head chef at The Bells of Peover with his creatively executed delicious new menu. Friends and family were invited for a new menu tester night on Thursday, I had the tasty prawns and succulent lamb 😋 but don’t take my word for it get yourselves down there the food is just devine amazing presentation great ambiance."
    //           </h5>
    //         </div>

    //         <div className="shade block max-w-sm p-6 rounded-lg shadow border-[#7B7B7C]">
    //           <h5 className="mb-2 md:text-l font-semibold tracking-tight text-[#EAEAEA]">
    //             "Fantastic evening. Great customer service from the staff and even spoke with the chef who was very friendly. We shared the breads over drinks and then had the home made pies (both steak and ale, and cheese and onion) for mains, and they were absolutely stunning.  Great experience will be back."
    //           </h5>
    //         </div>

    //         <div className="shade block max-w-sm p-6 rounded-lg shadow border-[#7B7B7C]">
    //           <h5 className="mb-2 md:text-l font-semibold tracking-tight text-[#EAEAEA]">
    //             "5 stars, the triumphant return of Chef Adrian Munt! We returned to The Bells this week with family, and we’re delighted with our experience. After a few months of The Bells not being up to its usual standard, our meal and experience on Thursday evening was brilliant."
    //           </h5>
    //         </div>

    //         <div className="shade block max-w-sm p-6 rounded-lg shadow border-[#7B7B7C]">
    //           <h5 className="mb-2 md:text-l font-semibold tracking-tight text-[#EAEAEA]">
    //             "Came in a big group of friends and opted for the trio of meat. Head chef has nailed it. The absolute without doubt best plate of food I’ve ever eaten. Head chef is called Adie and came and chatted with us too. Can't describe the level of deservedness for recognition of food excellence. Desserts were also top tier"
    //           </h5>
    //         </div>

    //         <div className="shade block max-w-sm p-6 rounded-lg shadow border-[#7B7B7C]">
    //           <h5 className="mb-2 md:text-l font-semibold tracking-tight text-[#EAEAEA]">
    //             "Had the trio roast and it was absolutely sensational. Best roast dinner I’ve ever had and I highly recommend getting the cauliflower cheese as well! Elite level cuisine."
    //           </h5>
    //         </div>


    //         <div className="shade block max-w-sm p-6 rounded-lg shadow border-[#7B7B7C]">
    //           <h5 className="mb-2 md:text-l font-semibold tracking-tight text-[#EAEAEA]">
    //             "This really is a masterpiece by The Bells of Peover's talented head chef, Adie Munt. I am not usually a big fan of ordering pork when dining out, but this dish changed that for sure. Pork tenderloin, expertly paired with a rich and flavourful black pudding suet pudding and a pancetta jus on the side, is accompanied by a luscious whole grain mash that offers a comforting texture, and crisp and vibrant tender stem broccoli."
    //           </h5>
    //         </div>

    //         <div className="shade block max-w-sm p-6 rounded-lg shadow border-[#7B7B7C]">
    //           <h5 className="mb-2 md:text-l font-semibold tracking-tight text-[#EAEAEA]">
    //             "What can I say, I've been a fan of Chef Adie's creations for a long time now and that's why I didn't think twice when it came to choosing who I'd like to cater for our wedding. The food speaks for itself and I cannot thank you enough for delivering on the quality, as you always do, but esecially on our wedding day!"
    //           </h5>
    //         </div>

    //     </div>
    //   </div>

      {/* <div className="grid mb-8 mt-8 border border-[#7B7B7C] rounded-lg shadow-sm dark:border-[#7B7B7C] md:mb-12 md:grid-cols-2">
if want to add a border around the outside just add "border" above

<figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:border-[#7B7B7C]">
<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-[#EAEAEA]">
<h3 className="text-lg font-semibold text-[#EAEAEA] dark:text[#EAEAEA]">Very easy this was to integrate</h3>
<p className="my-4">If you care for your time, I hands down would go with this."</p>
</blockquote>
        <figcaption className="flex items-center justify-center ">
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-[#EAEAEA] ">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>


    <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 md:rounded-se-lg dark:border-[#7B7B7C]">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-[#EAEAEA]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-[#EAEAEA]">Solid foundation for any project</h3>
            <p className="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <div className="space-y-0.5 font-medium dark:text-[#EAEAEA] text-left rtl:text-right ms-3">
                <div>Roberta Casas</div>
                <div className="text-sm text-gray-500 dark:text-[#EAEAEA]">Lead designer at Dropbox</div>
            </div>
        </figcaption>    
    </figure>


    <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:border-[#7B7B7C]">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-[#EAEAEA]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-[#EAEAEA]">Mindblowing workflow</h3>
            <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <div className="space-y-0.5 font-medium dark:text-[#EAEAEA] text-left rtl:text-right ms-3">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-[#EAEAEA]">Software Engineer at Facebook</div>
            </div>
        </figcaption>    
    </figure>


    <figure className="flex flex-col items-center justify-center p-8 text-center border-gray-200 rounded-b-lg md:rounded-se-lg dark:border-[#7B7B7C]">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-[#EAEAEA]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-[#EAEAEA]">Efficient Collaborating</h3>
            <p className="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <div className="space-y-0.5 font-medium dark:text-[#EAEAEA] text-left rtl:text-right ms-3">
                <div>Joseph McFall</div>
                <div className="text-sm text-gray-500 dark:text-[#EAEAEA]">CTO at Google</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col border items-center justify-center p-8 text-center border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:border-[#7B7B7C]">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-[#EAEAEA]">
            <h3 className="text-lg font-semibold text-[#EAEAEA] dark:text[#EAEAEA]">Very easy this was to integrate</h3>
            <p className="my-4">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-[#EAEAEA] ">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>


    <figure className="flex flex-col border items-center justify-center p-8 text-center border-b border-gray-200 md:rounded-se-lg dark:border-[#7B7B7C]">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-[#EAEAEA]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-[#EAEAEA]">Solid foundation for any project</h3>
            <p className="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <div className="space-y-0.5 font-medium dark:text-[#EAEAEA] text-left rtl:text-right ms-3">
                <div>Roberta Casas</div>
                <div className="text-sm text-gray-500 dark:text-[#EAEAEA]">Lead designer at Dropbox</div>
            </div>
        </figcaption>    
    </figure>


    <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:border-[#7B7B7C]">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-[#EAEAEA]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-[#EAEAEA]">Mindblowing workflow</h3>
            <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <div className="space-y-0.5 font-medium dark:text-[#EAEAEA] text-left rtl:text-right ms-3">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-[#EAEAEA]">Software Engineer at Facebook</div>
            </div>
        </figcaption>    
    </figure>


    <figure className="flex flex-col items-center justify-center p-8 text-center border-gray-200 rounded-b-lg md:rounded-se-lg dark:border-[#7B7B7C]">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-[#EAEAEA]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-[#EAEAEA]">Efficient Collaborating</h3>
            <p className="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <div className="space-y-0.5 font-medium dark:text-[#EAEAEA] text-left rtl:text-right ms-3">
                <div>Joseph McFall</div>
                <div className="text-sm text-gray-500 dark:text-[#EAEAEA]">CTO at Google</div>
            </div>
        </figcaption>    
    </figure>
</div> */}
    
