import { motion } from "framer-motion";
import Navbar from "./Navbar";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVite,
} from "react-icons/si";


export default function App() {
  const sendEmail = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (err) {
      alert("Error sending message.");
      console.error(err);
    }
  };

  const skills = [
    {
      icon: <FaReact size={32} className="mx-auto text-blue-500" />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs size={32} className="mx-auto text-green-600" />,
      name: "Node.js",
    },
    {
      icon: <SiExpress size={32} className="mx-auto text-gray-600" />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb size={32} className="mx-auto text-green-700" />,
      name: "MongoDB",
    },
    {
      icon: <SiJavascript size={32} className="mx-auto text-yellow-500" />,
      name: "JavaScript",
    },
    {
      icon: <SiHtml5 size={32} className="mx-auto text-orange-600" />,
      name: "HTML5",
    },
    {
      icon: <SiCss3 size={32} className="mx-auto text-blue-600" />,
      name: "CSS3",
    },
    {
      icon: <SiVite size={32} className="mx-auto text-purple-500" />,
      name: "Vite",
    },
    {
      icon: <FaGithub size={32} className="mx-auto text-black" />,
      name: "GitHub",
    },
  ];

  const projects = [
    {
      title: "Gym Product Website",
      desc: "Built with React + Vite, focusing on fast performance and responsive UI.",
      image: "/Gym.jpg.png",
      demo: "https://adi-8789.github.io/Gym-Product-website/",
      code: "https://github.com/Adi-8789/Gym-Product-website.git",
    },
    {
      title: "Product Showcase Website",
      desc: "Responsive design & clean UI.",
      image: "/Product.jpg.png",
      demo: "http://stellar-precision.vercel.app",
      code: "https://github.com/Adi-8789/stellar-precision.git",
    },
    {
      title: "Valorant Website Clone",
      desc: "Responsive static site using HTML, CSS, JavaScript.",
      image: "/valo.jpg.png",
      demo: "#",
      code: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-animated text-gray-800">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-100 to-white"
      >
        <motion.img
          src="Profile.jpg.jpeg"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-6 border-4 border-blue-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4"
        >
          MERN Stack Developer | React Enthusiast
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg mb-6"
        >
          I build fast, scalable, and user-friendly web applications
        </motion.p>
        <div className="space-x-4">
          <a
            href="/public/ResumeLT.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700"
          >
            Download Resume
          </a>
          <a
            href="mailto:shankaraditya980@gmail.com"
            className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow hover:bg-green-700"
          >
            Hire Me
          </a>
        </div>
      </section>

      {/* About */}
      <motion.section
        id="about"
        className="max-w-3xl mx-auto py-16 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p>
          I’m an MCA graduate specializing in the MERN stack. I love creating
          user-friendly, scalable web apps and constantly learning new
          technologies. Currently seeking opportunities to contribute as a
          full-stack developer.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        className="bg-gray-100 py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center">Skills</h3>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="p-4 bg-white shadow rounded-2xl hover:shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {skill.icon}
              <p className="mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="max-w-5xl mx-auto py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="p-6 bg-white shadow rounded-2xl hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4"
              />
              <h4 className="font-bold text-lg mb-2">{project.title}</h4>
              <p className="mb-4">{project.desc}</p>
              <div className="space-x-4">
                <a
                  href={project.demo}
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  className="text-gray-700 hover:underline"
                >
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="bg-gray-100 py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
        <form
          onSubmit={sendEmail}
          className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full mb-4 p-3 border rounded"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full mb-4 p-3 border rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 space-x-4">
          <a
            href="mailto:shankaraditya980@gmail.com"
            className="text-blue-600 inline-flex items-center"
          >
            <FaEnvelope className="mr-2" />
            Email
          </a>
          <a
            href="https://linkedin.com/in/aditya-shankar-38b9b72b7"
            className="text-blue-600 inline-flex items-center"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Adi-8789"
            className="text-blue-600 inline-flex items-center"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Aditya Shankar. All rights reserved.
      </footer>
    </div>
  );
}
