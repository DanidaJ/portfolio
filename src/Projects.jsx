import { motion } from "framer-motion";






export default function Projects() {


    const projects = [
        {
            id: 1,
            title: "Cinema Ticket Booking System",
            description: "A web app to book cinema tickets online with seat selection.",
            image: "/images/cinema-booking.png", // Place image in public/images/
            link: "https://yourcinemaapp.com",
        },
        {
            id: 2,
            title: "Scan report Generator ",
            description: "A software application for generating scan reports .",
            image: "/images/ai-scheduling.png",
            link: "https://youraiproject.com",
        },
        {
            id: 3,
            title: "Radiology Appointment Booking",
            description: "A hospital system for scheduling radiology appointments.",
            image: "src/assets/Avissawella.png",
            link: "https://yourradiologyapp.com",
        },
    ];


    return (
        <div className="min-h-screen bg-hero-gradient text-white flex flex-col items-center py-20">
            <h2 className="text-4xl font-bold mb-10">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {projects.map((project) => (
                    <motion.div key={project.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition hover:shadow-xl">

                        <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />

                        <h3 className="text-xl font-semibold text-neonBlue mt-4">{project.title}</h3>
                        <p className="text-gray-300 mt-2">{project.description}</p>

                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                           className="mt-4 block text-center bg-purpleGlow text-white px-4 py-2 rounded-lg hover:bg-neonBlue transition">
                            View Project
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
