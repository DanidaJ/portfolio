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
        images: ["/ticketbooking.png","/ticketbooking2.png","/ticketbooking3.png"

        ],
        technologies: ["Angular", "Spring Boot", "MySQL"],
    },
    {
        id: 2,
        title: "Scan report Generator ",
        description: "A software application for generating scan reports .",
        images: [
            "/DUPSjay.png","/DUPSjay2.png","/DUPSjay3.png"

        ],
        technologies: ["HTML", "Javascript", "CSS","Node.js"],
    },
    {
        id: 3,
        title: "Radiology Appointment Booking",
        description: "A hospital system for scheduling radiology appointments.",
        images: [
            "/Avissawella.png","/Avissawella2.png","/Avissawella3.png"

        ],
        technologies: ["PHP", "MYSQL", "HTML", "CSS", ],
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

    return (
        <div className="min-h-screen bg-hero-gradient text-white flex flex-col items-center py-20">
            <h2 className="text-4xl font-bold mb-10">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {projects.map((project) => (
                    <motion.div key={project.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition hover:shadow-xl"
                    >
                        <img src={project.images[0]} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
                        <h3 className="text-xl font-semibold text-neonBlue mt-4">{project.title}</h3>
                        <p className="text-gray-300 mt-2">{project.description}</p>

                        {/* View Project Button */}
                        <button
                            onClick={() => openModal(project)}
                            className="mt-4 block w-full bg-purpleGlow text-white px-4 py-2 rounded-lg hover:bg-neonBlue transition"
                        >
                            View Project
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Project Modal */}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
                   className="fixed inset-0 flex items-center justify-center "
                   overlayClassName="fixed inset-0"
            >
                {selectedProject && (
                    <div className="bg-darkBlue p-10 rounded-xl max-w-2xl w-full relative">
                        <button className="absolute top-0.5 right-0.5 text-gray-300 hover:text-white text-xl" onClick={closeModal}>
                            ✖
                        </button>

                        {/* Image Slideshow */}
                        <Slider dots={true} infinite={true} speed={300} slidesToShow={1} slidesToScroll={1}>
                            {selectedProject.images.map((img, index) => (
                                <div key={index}>
                                    <img src={img} alt={`Slide ${index}`} className="w-full  object-cover rounded-lg" />
                                </div>
                            ))}
                        </Slider>

                        <h2 className=" text-gray-300 text-2xl font-bold mt-4">{selectedProject.title}</h2>
                        <p className="text-gray-300 mt-2">{selectedProject.description}</p>

                        <h4 className=" text-gray-300 text-lg font-semibold mt-4">Technologies Used:</h4>
                        <ul className="flex gap-3 mt-2">
                            {selectedProject.technologies.map((tech, index) => (
                                <li key={index} className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
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
