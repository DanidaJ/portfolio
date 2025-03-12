import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Home from "./Home";
import Projects from "./Projects";
import AboutMe from "./About";
import Contact from "./Contact";

export default function App() {
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const sections = [
        { id: "home", ref: homeRef },
        { id: "projects", ref: projectsRef },
        { id: "about", ref: aboutRef },
        { id: "contact", ref: contactRef }
    ];

    const [activeSection, setActiveSection] = useState("home");
    const [isScrolling, setIsScrolling] = useState(false); // To prevent multiple scroll triggers

    const handleScroll = (event) => {
        if (isScrolling) return; // Prevent multiple scroll triggers while animation is running
        setIsScrolling(true);

        const scrollDown = event.deltaY > 0; // Check if the scroll is downwards

        let currentIndex = sections.findIndex((section) => section.id === activeSection);
        let nextSection = scrollDown ? currentIndex + 1 : currentIndex - 1;

        if (nextSection >= 0 && nextSection < sections.length) {
            const nextSectionId = sections[nextSection].id;
            setActiveSection(nextSectionId);

            // Scroll to the next section
            const nextSectionRef = sections[nextSection].ref.current;
            nextSectionRef.scrollIntoView({ behavior: "smooth" });

            // Update the URL without reloading the page
            window.history.pushState({}, "", `#${nextSectionId}`);
        }

        // Reset scrolling after animation duration
        setTimeout(() => setIsScrolling(false), 800); // Adjust timeout based on your transition duration
    };

    useEffect(() => {
        // Disable the default scrolling behavior (mouse wheel / touchpad scrolling)
        const disableScroll = (e) => e.preventDefault();
        window.addEventListener("wheel", disableScroll, { passive: false });

        // Handle the scroll for page navigation
        window.addEventListener("wheel", handleScroll);

        // Cleanup the event listeners
        return () => {
            window.removeEventListener("wheel", disableScroll);
            window.removeEventListener("wheel", handleScroll);
        };
    }, [isScrolling]);

    const handleNavClick = (id) => {
        const section = sections.find((s) => s.id === id)?.ref.current;
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
            window.history.pushState({}, "", `#${id}`);
        }
    };

    return (
        <div className="bg-darkBlue text-white">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-[#2A0E61] bg-opacity-90 shadow-md backdrop-blur-md p-4 flex justify-center space-x-6 z-50">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        className={`px-4 py-2 font-semibold transition duration-300 ${
                            activeSection === section.id
                                ? "text-[#A78BFA] border-b-2 border-[#A78BFA]"
                                : "text-gray-300 hover:text-white"
                        }`}
                        onClick={() => handleNavClick(section.id)}
                    >
                        {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
                    </button>
                ))}
            </nav>


            {/* Sections with animation */}
            <motion.div
                ref={homeRef}
                id="home"
                className="min-h-screen pt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeSection === "home" ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Home />
            </motion.div>
            <motion.div
                ref={projectsRef}
                id="projects"
                className="min-h-screen pt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeSection === "projects" ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Projects />
            </motion.div>
            <motion.div
                ref={aboutRef}
                id="about"
                className="min-h-screen pt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeSection === "about" ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <AboutMe />
            </motion.div>
            <motion.div
                ref={contactRef}
                id="contact"
                className="min-h-screen pt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeSection === "contact" ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Contact />
            </motion.div>
        </div>
    );
}
