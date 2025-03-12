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
                className="w-64 h-64 object-cover rounded-full border-4 border-neonBlue shadow-lg md:mr-16"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.1 }} // Hover Effect
            />

            {/* Text on the Right */}
            <div className="text-center md:text-left max-w-2xl">
                <motion.h1 className="text-5xl font-extrabold drop-shadow-lg"
                           initial={{ opacity: 0, y: -50 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.8 }}>
                    Hi, I'm Danida Jayakody
                </motion.h1>
                <motion.h2 className="text-4xl font-extrabold drop-shadow-lg mt-4"
                           initial={{ opacity: 0, y: -50 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.8 }}>
                    Welcome to My Portfolio
                </motion.h2>
                <p className="text-xl mt-6 text-gray-300">Creative Developer | UI/UX Enthusiast | Problem Solver</p>

                {/* Explore Button */}
                <motion.button onClick={handleClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                               className="mt-10 px-8 py-4 rounded-lg bg-purpleGlow text-white text-lg font-semibold shadow-lg hover:bg-neonBlue transition">
                    Explore My Work
                </motion.button>
            </div>
        </div>


    );
}
