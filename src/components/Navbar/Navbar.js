

const Navbar = () => {

    return (
        <nav className="w-full p-4">
            <ul className="flex justify-center space-x-6">
                <li>
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="/" className="nav-link">About</a>
                </li>
                <li>
                    <a href="/" className="nav-link">Our Team</a>
                </li>
                <li>
                    <a href="/" className="nav-link">How to Join</a>
                </li>
                <li>
                    <a href="/" className="nav-link">Gallery</a>
                </li>
                <li>
                    <a href="/" className="nav-link">Contact Us</a>
                </li>

            </ul>

        </nav>
    );

};

export default Navbar;