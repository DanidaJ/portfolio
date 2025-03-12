import {  FaDownload } from "react-icons/fa";
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
                Hi I'm <span className="text-neonBlue font-semibold">Danida</span>.
                I'm a passionate software engineering undergraduate who loves building beautiful, functional applications.
                My expertise lies in front-end development, UI/UX, and problem-solving.
            </motion.p>

            {/* Download CV Button */}
            <motion.a
                href="/Danida Jayakody CV.pdf" download
                className="bg-purpleGlow px-6 py-3 rounded-lg flex items-center gap-2 text-lg font-medium hover:bg-neonBlue transition"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <FaDownload /> Download CV
            </motion.a>

            {/* Skills Section */}
            <motion.div
                className="mt-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <h3 className="text-3xl font-semibold mb-4 text-neonBlue">Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-lg font-medium text-gray-300">
                    <div className="bg-purpleGlow px-4 py-2 rounded-lg">React</div>
                    <div className="bg-purpleGlow px-4 py-2 rounded-lg">Angular</div>
                    <div className="bg-purpleGlow px-4 py-2 rounded-lg">Spring Boot</div>
                    <div className="bg-purpleGlow px-4 py-2 rounded-lg">Flask</div>
                    <div className="bg-purpleGlow px-4 py-2 rounded-lg">Python</div>
                    <div className="bg-purpleGlow px-4 py-2 rounded-lg">Java</div>
                    <div className="bg-purpleGlow px-4 py-2 rounded-lg">MySQL</div>
                    <div className="bg-purpleGlow px-4 py-2 rounded-lg">Flutter</div>

                </div>
            </motion.div>
        </div>
    );
}
