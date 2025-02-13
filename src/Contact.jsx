export default function Contact() {
    return (
        <div className="min-h-screen bg-hero-gradient text-white flex flex-col items-center py-20">
            <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
            <p className="text-lg text-gray-300">Feel free to reach out to me at:</p>
            <a href="mailto:jayakodydanida@gmail.com"
               className="mt-4 px-6 py-2 rounded-lg bg-purpleGlow text-white font-semibold shadow-lg hover:bg-neonBlue transition">
                Email Me
            </a>
        </div>
    );
}
