import PageContent from "../components/PageContent";
import event1 from '../assets/event1.jpg';

const Gallery = () => {
    return (
        <PageContent>
         <div className="flex flex-col gap-4 mx-auto w-[50vw] max-w[600px] sm:w-[40vw] md:w-[50vw] mb-10">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-3xl mt-[5vh]">Our Events</h1>
            </div>
            <p className="mx-auto">Click to learn more about our recent events!</p>

            <div className="grid grid-cols-3">
                <div className="w-full border-2">asdf</div>
                <div className="w-full border-2">asdf</div>
                <div className="w-full border-2">asdf</div>
                <div className="w-full border-2">asdf</div>
                <div className="w-full border-2">asdf</div>
                <div className="w-full border-2">asdf</div>
                <div className="w-full border-2">asdf</div>
                <div className="w-full border-2">asdf</div>
                <div className="w-full border-2">asdf</div>
                <div className="flex flex-col w-full border-2 justfy-center items-center">
                    <div><img src={event1} alt="KSEA Logo" className="w-full mb-5" /></div>
                    <p className="m-5">Fundraiser</p>
                    <p>Description</p>
                </div>
            </div>
        </div>
        </PageContent>
    );
};

export default Gallery;