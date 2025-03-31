import Logo from "../assets/kseaLogoBig.avif";
import PageContent from "../components/PageContent";
import banner from '../assets/below-navbar.gif';

const Home = () => {
    return (
        <PageContent>
            <div className="flex flex-col mb-[10vh]">
                <div className="h-[85vh]">Some Media/Pic</div>
                <img src={banner} alt="banner" className="w-full h-6 object-cover" />
            </div>


            <div className="flex flex-col gap-6 mx-auto w-[60vw] max-w-[900px] sm:w-[60vw] md:w-[70vw] mb-10 items-center justify-center">
                <img src={Logo} alt="KSEA logo" className="w-[20vw] mx-auto mb-3"/>

                <p className="text-center">We are the USC chapter of the Korean-American Scientists and Engineers Association (KSEA).</p>

                <p className="text-center">Our purpose is to promote career development, mentorship, networking, and volunteer service within the Korean and American STEM communities at USC.</p>

            </div>
        </PageContent>
    );
};

export default Home;