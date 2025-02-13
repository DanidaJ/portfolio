import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {


    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/projects");
    };
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-hero-gradient text-white px-6">
            <motion.h1 className="text-5xl font-extrabold drop-shadow-lg"
                       initial={{ opacity: 0, y: -50 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8 }}>

                Hi I'm Danida Jayakody
            </motion.h1>
            <br/>
            <motion.h2 className="text-4xl font-extrabold drop-shadow-lg"
                       initial={{ opacity: 0, y: -50 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8 }}>

                Welcome to My Portfolio
            </motion.h2>
            <p className="text-lg mt-4 text-gray-300">Creative Developer | UI/UX Enthusiast | Problem Solver</p>
            <motion.button onClick={handleClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}

                           className="mt-6 px-6 py-3 rounded-lg bg-purpleGlow text-white font-semibold shadow-lg hover:bg-neonBlue transition">
                Explore My Work
            </motion.button>
        </div>
    );
}
