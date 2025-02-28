import facebook from '../assets/icon-fb.avif';
import linkedin from '../assets/icon-li.avif';
import instagram from '../assets/icon-ig.avif';
import discord from '../assets/icon-dc.avif';

const Footer = () => {
    return (
        <footer className="bg-[rgb(255,239,179)] text-[#9e2136] text-center p-4 ">
            <p>&copy; 2011-2025 USC KSEA</p>
            <div className="flex justify-center gap-4 pt-2">
                <a href="https://www.facebook.com/uscksea/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook icon" className="w-8 h-8"/></a>
                <a href="https://www.linkedin.com/groups/13824382/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin icon" className="w-8 h-8"/></a>
                <a href="https://www.instagram.com/usc.ksea/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram icon" className="w-8 h-8"/></a>
                <a href="" target="_blank" rel="noopener noreferrer"><img src={discord} alt="discord icon" className="w-8 h-8"/></a>
                
                
                
            </div>
        </footer>
    );
};

export default Footer;