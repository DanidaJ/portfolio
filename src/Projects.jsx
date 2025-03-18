import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
    {
        id: 1,
        title: "Event Booking System",
        description: "A web app to Create Events and let users Book them.",
        images: ["/ticketbooking.png", "/ticketbooking2.png", "/ticketbooking3.png"],
        technologies: ["Angular", "Spring Boot", "MySQL"],
    },
    {
        id: 2,
        title: "Scan Report Generator",
        description: "A software application for generating scan reports.",
        images: ["/DUPSjay.png", "/DUPSjay2.png", "/DUPSjay3.png"],
        technologies: ["HTML", "JavaScript", "CSS", "Node.js"],
    },
    {
        id: 3,
        title: "Radiology Appointment Booking",
        description: "A hospital system for scheduling radiology appointments.",
        images: ["/Avissawella.png", "/Avissawella2.png", "/Avissawella3.png"],
        technologies: ["PHP", "MySQL", "HTML", "CSS"],
    },
    {
        id: 4,
        title: "Moodify",
        description: "Playlist generator according to your moods.",
        images: ["/moodify.png", "/moodify2.png", "/moodify3.png"],
        technologies: ["Flask", "React", "TailwindCSS"],
    },
];

export default function Projects() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-hero-gradient text-white flex flex-col items-center py-20">
            <h2 className="text-4xl font-bold mb-10">My Projects</h2>
            <Slider {...sliderSettings} className="w-full max-w-6xl">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition hover:shadow-xl mx-4"
                        style={{
                            boxShadow: "0 0 15px rgba(180, 0, 255, 0.5)", // soft purple glow
                            transition: "box-shadow 0.3s ease-in-out",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.boxShadow =
                                "0 0 25px rgba(180, 0, 255, 0.8), 0 0 50px rgba(140, 0, 200, 0.6)")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.boxShadow = "0 0 15px rgba(180, 0, 255, 0.5)")
                        }
                    >


                    <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-semibold text-neonBlue mt-4">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 mt-2">{project.description}</p>
                        <button
                            onClick={() => openModal(project)}
                            className="mt-4 block w-full bg-purpleGlow text-white px-4 py-2 rounded-lg hover:bg-neonBlue transition"
                        >
                            View Project
                        </button>
                    </motion.div>
                ))}
            </Slider>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                {selectedProject && (
                    <div className="bg-darkBlue p-10 rounded-xl max-w-2xl w-full relative">
                        <button
                            className="absolute top-2 right-2 text-gray-300 hover:text-white text-2xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <Slider dots={true} infinite={true} speed={300} slidesToShow={1} slidesToScroll={1}>
                            {selectedProject.images.map((img, index) => (
                                <div key={index}>
                                    <img
                                        src={img}
                                        alt={`Slide ${index}`}
                                        className="w-full object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </Slider>
                        <h2 className="text-gray-300 text-2xl font-bold mt-4">
                            {selectedProject.title}
                        </h2>
                        <p className="text-gray-300 mt-2">{selectedProject.description}</p>
                        <h4 className="text-gray-300 text-lg font-semibold mt-4">
                            Technologies Used:
                        </h4>
                        <ul className="flex gap-3 mt-2">
                            {selectedProject.technologies.map((tech, index) => (
                                <li
                                    key={index}
                                    className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </Modal>
        </div>
    );
}
