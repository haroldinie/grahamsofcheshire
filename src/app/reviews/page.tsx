import Image from "next/image"


export default function Reviews() {
    return (
        <>


<div className="grid mb-8 mt-8 border border-[#7B7B7C] rounded-lg shadow-sm dark:border-[#7B7B7C] md:mb-12 md:grid-cols-2">
{/* if want to add a border around the outside just add "border" above */}

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
</div>
</>
    )
}