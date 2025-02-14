import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="min-h-screen bg-hero-gradient text-white flex flex-col items-center py-20">
            <motion.h2
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h2>

            <motion.p
                className="text-lg max-w-2xl text-center text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Hi I'm <span className="text-neonBlue font-semibold">Danida </span>
                I'm a passionate software engineering undergraduate who loves building beautiful, functional applications.
                My expertise lies in front-end development, UI/UX, and problem-solving.
            </motion.p>

            {/* Download CV Button */}
            <motion.a
                href="public/Danida Jayakody CV.pdf" download
                className="bg-purpleGlow px-6 py-3 rounded-lg flex items-center gap-2 text-lg font-medium hover:bg-neonBlue transition"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <FaDownload /> Download CV
            </motion.a>

            {/* Social Media Icons */}
            <div className="flex gap-6 mt-8">
                <motion.a
                    href="https://github.com/DanidaJ" target="_blank" rel="noopener noreferrer"
                    className="text-3xl text-gray-400 hover:text-white transition"
                    whileHover={{ scale: 1.2 }}
                >
                    <FaGithub />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/danida-jayakody-52a884200/" target="_blank" rel="noopener noreferrer"
                    className="text-3xl text-blue-500 hover:text-white transition"
                    whileHover={{ scale: 1.2 }}
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a
                    href="https://www.instagram.com/danida_j/" target="_blank" rel="noopener noreferrer"
                    className="text-3xl text-pink-500 hover:text-white transition"
                    whileHover={{ scale: 1.2 }}
                >
                    <FaInstagram />
                </motion.a>
                <motion.a
                     href="mailto:jayakodydanida@gmail.com"
                    className="text-3xl text-red-400 hover:text-white transition"
                    whileHover={{ scale: 1.2 }}
                >
                    <FaEnvelope />
                </motion.a>
            </div>
        </div>
    );
}
