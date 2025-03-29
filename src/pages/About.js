const images = Array.from({ length: 29 }, (_, index) => {
    return require(`../assets/about_${index + 1}.avif`);
  });
const About = () => {
    return (
        <div className="flex flex-col gap-4 mx-auto w-[60vw] max-w-[1000px] sm:w-[60vw] md:w-[70vw]">
            
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-5xl m-[5vh]">What is KSEA?</h1>
                <p className="text-2xl">KSEA stands for "Korean-American Scientists and Engineers Association."</p>
                <p className="">We are a community of students & professionals across the country with interest in STEM & Korean culture.</p>
            </div>


            <p className="font-bold underline">At the local scale:</p>
            <p>We are the USC Young Generation (YG) group of KSEA. We serve the Trojan family through a variety of events and newsletters.</p>

            <div className="flex flex-row gap-10">
                <div className="flex flex-col">
                    <p>Events</p>
                    <ul className="list-circle pl-5">
                        <li><span className="">&#8226;</span> Career development</li>
                        <li><span className="">&#8226;</span> Mentorship</li>
                        <li><span className="">&#8226;</span> Networking</li>
                        <li><span className="">&#8226;</span> Volunteer activities</li>
                        <li><span className="">&#8226;</span> And more!</li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <p>Newsletters</p>
                    <ul className="list-circle pl-5">
                        <li><span className="">&#8226;</span> Job openings</li>
                        <li><span className="">&#8226;</span>  Internships</li>
                        <li><span className="t">&#8226;</span> Scholarships</li>
                        <li><span className="">&#8226;</span> Research opportunities</li>
                        <li><span className="">&#8226;</span> Conference invitations</li>
                    </ul>
                </div>
            </div>

            <p className="font-bold underline">At the national scale:</p>

            <p>KSEA was established in 1971 as a non-profit professional organization and has grown to over 5000 registered members with 67 local chapters/branches, 30 affiliated professional societies, and 14 technical groups across the United States. KSEA’s vision is to become a premier professional organization which fosters international cooperation between the U.S. and Korea, cares for its members, and serves the community.</p>

            <p className="mx-auto"><a href="https://www.ksea.org/" target="_blank" rel="noreferrer">https://ksea.org</a></p>

            <p>In addition to working professionals in KSEA, there are several student and young professional-led KSEA chapters across the country called Young Generation (YG) groups. YG groups work within their respective local chapters and/or universities to serve their communities while working with the KSEA YG National Board and other groups to maintain active communication between students around the United States. As of 2021-2022, <span className="font-bold">more than 20 YG groups are active</span>, with 50+ groups documented during KSEA's history. Participating groups in the KSEA network are shown below and also listed in the main KSEA website.</p>

            <p className="mx-auto">USC KSEA is proud to have named <span className="font-bold text-red-500">YG Group of the Year</span> in <span className="underline">both</span> 2020-21 and 2021-22 Academic Years.</p>

            <p>KSEA is also a <span className="font-bold italic">Presidential Volunteer Service Award (PVSA) </span>certified organization, which can recognize students, young adults, and professionals who dedicate time to KSEA-related activities for volunteerism. USC students who actively participate in KSEA activities will be nominated by our executive board for qualifying awards at the end of the school year.</p>
    
            <div className="h-48 w-48 mx-auto my-16">
                <img src={images[0]} alt="USC Logo" className="object-contain h-full w-full " />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4">
                {images.slice(1).map((src, index) => (
                    <div key={index} className="flex justify-center items-center h-32 w-48">
                        <img src={src} alt={`Logo ${index+2}`} className="object-contain" />
                    </div>
                ))}
            </div>

            <div className="mt-5"></div>

        </div>
    );
};

export default About;