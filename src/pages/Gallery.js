import PageContent from "../components/PageContent";
import Events from "../components/Events";
import { useState, useEffect } from "react";



const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openImage = (index) => {
        setSelectedIndex(index);
    };

    const closeImage = () => {
        setSelectedIndex(null);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev === 0 ? Events.length - 1 : prev - 1));
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev === Events.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
    const handleKeyDown = (e) => {
        if (selectedIndex === null) return;

        if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev === 0 ? Events.length - 1 : prev - 1));
        } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev === Events.length - 1 ? 0 : prev + 1));
        } else if (e.key === "Escape") {
        setSelectedIndex(null);
        }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
    }, [selectedIndex]);

    return (
        <PageContent>
         <div className="flex flex-col gap-4 mx-auto w-[50vw] max-w[600px] sm:w-[40vw] md:w-[50vw] mb-10">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-3xl mt-[5vh]">Our Events</h1>
            </div>
            <p className="mx-auto">Click to learn more about our recent events!</p>

            {/* Need masonry patterns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {Events.map((item, index) => (
                    <div key={index} className="mb-4 border-2">
                        <div><img src={item.image} alt={item.name} className="w-full mb-5 cursor-pointer" onClick={ () => openImage(index)} /></div>
                        <p className="m-5 text-sm">{item.name}</p>
                        <p className="m-5 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>

            {selectedIndex !== null && Events[selectedIndex] && (
                <div className="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center z-50" onClick={closeImage}>
                    <div className="relative max-w-5xl w-full">
                        <img src={Events[selectedIndex].image} alt={Events[selectedIndex].name} className="max-w-full max-h-screen object-contain mx-auto" />
                        <div className="p-4 text-white text-center">
                            <p>{Events[selectedIndex].description}</p>
                        </div>

                        <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                        ‹ </button>
                        <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
                        >
                        › </button>
                    </div>
                </div>
            )}

        </div>
        </PageContent>
    );
};

export default Gallery;