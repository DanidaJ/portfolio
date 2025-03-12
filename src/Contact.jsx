import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {motion} from "framer-motion";

export default function Contact() {
    return (
        <div className="min-h-screen bg-hero-gradient text-white flex flex-col items-center py-20">
            <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
            <p className="text-lg text-gray-300">Feel free to reach out to me at:</p>

            {/* Email */}
            <a href="mailto:jayakodydanida@gmail.com"
               className="mt-4 px-6 py-2 rounded-lg bg-purpleGlow text-white font-semibold shadow-lg hover:bg-neonBlue transition flex items-center space-x-2">
                <FaEnvelope />
                <span>Email Me</span>
            </a>

            {/* Social Links */}
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
                href="https://wa.me/94702449566" target="_blank" rel="noopener noreferrer"
                   className="text-3xl text-green-600 hover:text-white transition">
                    <FaWhatsapp />


                </motion.a>
            </div>
        </div>
    );
}
