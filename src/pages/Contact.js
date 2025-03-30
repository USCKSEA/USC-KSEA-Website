import Like from '../assets/like.jpg';
import Email from '../assets/email.jpg';
import facebook from '../assets/icon-fb.avif';
import linkedin from '../assets/icon-li.avif';
import instagram from '../assets/icon-ig.avif';
import discord from '../assets/icon-dc.avif';

const Qna = () => {
    return (
        <div className="flex flex-col gap-4 mx-auto w-[60vw] max-w-[1000px] sm:w-[60vw] md:w-[70vw] mb-10">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-5xl m-[5vh]">Questions?</h1>
            </div>

            <div className="flex flex-row w-full mb-5">
                <div className="flex flex-col justify-center items-center w-1/2 border-2 p-4">
                    <img src={Email} alt="like" className="w-12" />
                    <p>Email</p>
                    <a href="mailto:uscksea@usc.edu" className="hover:underline">uscksea@usc.edu</a>
                </div>

                <div className="flex flex-col justify-center items-center w-1/2 border-2 p-4">
                    <img src={Like} alt="like" className="w-8" />
                    <p>Connect</p>
                    <div className="flex flex-row gap-1">
                        <a href="https://www.facebook.com/uscksea/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook icon" className="w-5 h-5"/></a>
                        <a href="https://www.linkedin.com/groups/13824382/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin icon" className="w-5 h-5"/></a>
                        <a href="https://www.instagram.com/usc.ksea/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram icon" className="w-5 h-5"/></a>
                        <a href="/" target="_blank" rel="noopener noreferrer"><img src={discord} alt="discord icon" className="w-5 h-5"/></a>
                    </div>
                </div>
            </div>

            <div>
                <p className="text-[#9e2136] font-bold">Q: Why should I join KSEA?</p>
                <p>A: There are lots of reasons why you should join KSEA, but here are a few main reasons:</p>
                <ul className="list-circle pl-5">
                    <li>&#8226; Make new friends!</li>
                    <li>&#8226; Get lots of free food!</li>
                    <li>&#8226; Receive help with finding a job or an internship</li>
                    <li>&#8226; Expand your network on a local and national level</li>
                    <li>&#8226; Obtain tips on getting into med school, grad school, dental school, pharmacy school, etc..</li>
                </ul>
            </div>
            <div>
                <p className="text-[#9e2136] font-bold">Q: Do I have to be a STEM major?</p>
                <p>A: No, any major can join KSEA! </p>
            </div>
            <div>
                <p className="text-[#9e2136] font-bold">Q: How much does membership cost?</p>
                <p>A: To be part of us (USC KSEA YG Group/Student Chapter), membership is free for everyone! Just attend 2 events each semester and be a national KSEA member. For the official national KSEA membership, it is still free for Undergraduates! (Graduate students $15)</p>
                <p>Tip: To be a national member, register through this link: <a href="https://www.ksea.org/join.aspx" target="_blank" rel="noreferrer">https://www.ksea.org/join.aspx</a></p>
            </div>
            <div>
                <p className="text-[#9e2136] font-bold">Q: Can graduate students join?</p>
                <p>A: Yes, of course!</p>
            </div>
            <div>
                <p className="text-[#9e2136] font-bold">Q: How can I get more involved?</p>
                <p>A: We recommend that you apply to be an <span className="font-bold">Executive Board (E-Board) Member!</span> E-Board members work together to serve the general body and foster growth of the Trojan KSEA community. There is an application & interview process to select new, enthusiastic board members during the beginning of Fall semesters and sometimes during Spring semesters. There will be an application posted on this website.</p>
            </div>

            <p>For more information, feel free to email us directly at <a href="mailto:uscksea@usc.edu" className="underline">uscksea@usc.edu!</a></p>
        </div>
    );
};

export default Qna;