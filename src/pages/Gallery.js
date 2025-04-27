import PageContent from "../components/PageContent";
import Events from "../components/Events";

const Gallery = () => {
    return (
        <PageContent>
         <div className="flex flex-col gap-4 mx-auto w-[50vw] max-w[600px] sm:w-[40vw] md:w-[50vw] mb-10">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-3xl mt-[5vh]">Our Events</h1>
            </div>
            <p className="mx-auto">Click to learn more about our recent events!</p>

            {/* Need masonry pattern */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {Events.map((item, index) => (
                    <div key={index} className="mb-4 border-2">
                        <div><img src={item.image} alt={item.name} className="w-full mb-5" /></div>
                        <p className="m-5 text-sm">{item.name}</p>
                        <p className="m-5 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </PageContent>
    );
};

export default Gallery;