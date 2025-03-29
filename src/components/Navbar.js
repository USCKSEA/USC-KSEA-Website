import { NavLink } from "react-router-dom";

const navLinks = [
    { name: "Home", path: "/"},
    { name: "About", path: "/about"},
    { name: "Our Team", path: "/team"},
    { name: "How to Join", path: "/join"},
    { name: "Gallery", path: "/gallery"},
    { name: "Contact Us", path: "/contact"},
];


const Navbar = () => {

    return (
        <nav className="p-4 flex justify-center space-x-6">
            {navLinks.map((link) => (
                <NavLink 
                    key={link.path} 
                    to={link.path} 
                    className={({ isActive }) =>
                        isActive ? "text-[#9e2136]" : "hover:text-[#9e2136]"
                    }
                >
                    {link.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navbar;