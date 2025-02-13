import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-lg p-4 flex justify-center space-x-8 text-white shadow-lg">
            <Link to="/" className="hover:text-neonBlue transition">Home</Link>
            <Link to="/projects" className="hover:text-neonBlue transition">Projects</Link>
            <Link to="/about" className="hover:text-neonBlue transition">About Me</Link>
            <Link to="/contact" className="hover:text-neonBlue transition">Contact Me</Link>
        </nav>
    );
}
