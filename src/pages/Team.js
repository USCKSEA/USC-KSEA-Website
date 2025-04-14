import PageContent from "../components/PageContent";
import Members from "../components/Members";
import React from 'react';
import image1 from "../assets/team/banquet.JPG";
import image2 from "../assets/team/group.JPG";
import image3 from "../assets/team/skitrip.jpeg";
import { useEffect, useState } from 'react';


const images = [image1, image2, image3];

const Team = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    const prevSlide = () => 
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    const nextSlide = () => 
        setCurrentIndex((currentIndex + 1) % images.length);
    return (
        <PageContent>
        <div className="flex flex-col gap-4 mx-auto w-[60vw] max-w-[800px] sm:w-[60vw] md:w-[70vw] mb-10">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-5xl m-[5vh]">Meet Our Team</h1>
            </div>
            
            {/* Image Slide h-[50vh]*/}
    <div className="relative h-[50vh] w-full border-2 overflow-hidden">
    {images.map((img, index) => (
        <img
        key={index}
        src={img}
        alt={`Slide ${index}`}
        className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-1000 
            ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
        `}
        />
    ))}

    <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-700 text-white z-20">
        ‹
    </button>
    
    <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-700 text-white z-20">
        ›
    </button>
    </div>

            <p>The <span className="font-bold">Executive Board ("E-Board")</span> functions as the governing body of the USC KSEA YG Group. Each Spring Semester, the three new presidents (two Co-Presidents and one Vice President) are selected to lead the E-Board for the following school year. The presidents lead the E-Board through internal management and represent the group through external communications with our community.</p>

            <div>
                <p>The E-Board consists of four different positions, as outlined below:</p>
                <ul className="pl-5">
                    <li>&#8226; Networking Directors</li>
                    <li>&#8226; Events Directors</li>
                    <li>&#8226; Public Relations and Marketing Directors</li>
                    <li>&#8226; Finance Directors</li>
                </ul>
            </div>

            <p>
            The E-Board members support the activities of our group by working with the presidents and fellow members. New E-Board members are typically chosen from aspiring general members in the <span className="font-bold">beginning of each Fall semester</span> and sometimes during the Spring semester. Applications for E-Board positions can be found on this website as well as the USC KSEA weekly newsletter.
            </p>


            {/* Team members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5 mt-[8vh]">
                {Members.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-full relative mb-1" style={{ paddingTop: '100%' }}>
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="absolute top-0 left-0 w-full h-full object-cover "
                                />
                            </div>
                            <p className="font-bold">{item.name} | {item.role}</p>
                            <p className="text-gray-800">{item.description}</p>
                        </div>
                    );
                })}

            </div>
        </div>
        </PageContent>
    );
};

export default Team;