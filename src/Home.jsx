import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/projects");
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-hero-gradient text-white px-6">
            {/* Profile Picture on the Left */}
            <motion.img
                src="/danida.jpg"
                alt="Danida Jayakody"
                className="w-48 h-48 object-cover rounded-full border-4 border-neonBlue shadow-lg md:mr-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            />

            {/* Text on the Right */}
            <div className="text-center md:text-left">
                <motion.h1 className="text-5xl font-extrabold drop-shadow-lg"
                           initial={{ opacity: 0, y: -50 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.8 }}>
                    Hi, I'm Danida Jayakody
                </motion.h1>
                <motion.h2 className="text-4xl font-extrabold drop-shadow-lg mt-2"
                           initial={{ opacity: 0, y: -50 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.8 }}>
                    Welcome to My Portfolio
                </motion.h2>
                <p className="text-lg mt-4 text-gray-300">Creative Developer | UI/UX Enthusiast | Problem Solver</p>

                {/* Explore Button */}
                <motion.button onClick={handleClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                               className="mt-6 px-6 py-3 rounded-lg bg-purpleGlow text-white font-semibold shadow-lg hover:bg-neonBlue transition">
                    Explore My Work
                </motion.button>
            </div>
        </div>

    );
}
