import nur from "../assets/nur-nayeem.jpg";
import { skills } from "../data/my-data";
import resume from "../data/resume-nur-nayeem.pdf";

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection = ({ darkMode }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"
        } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate aspiring full-stack developer focusing on the
              MERN stack. While I’m just starting out, I’m constantly building
              projects to sharpen my skills and create user-friendly web
              applications. I’m eager to grow, learn, and turn ideas into
              functional, well-designed experiences.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              My journey in web development began with a fascination for
              creating interactive interfaces. Today, I leverage modern
              technologies to build scalable, performant applications that solve
              real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold mb-2">Location</h4>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Email</h4>
                <p>nurnayem768@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Experience</h4>
                <p>No</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Availability</h4>
                <p>Freelance & Full-time</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start sm:justify-start">
              <a
                href="https://github.com/nur-nayeem"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center !rounded-button cursor-pointer whitespace-nowrap"
              >
                <i className="fab fa-github mr-2"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nur-mohammad-nayeem-803091352/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center !rounded-button cursor-pointer whitespace-nowrap"
              >
                <i className="fab fa-linkedin mr-2"></i> LinkedIn
              </a>
              <a
                href={resume}
                download="Nur-Nayeem-Resume.pdf"
                className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center !rounded-button cursor-pointer whitespace-nowrap"
              >
                <i className="fas fa-download mr-2"></i> Resume
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-[3px] bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
                  <img
                    src={nur}
                    alt="Nur Nayeem"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-lg">
                MERN Developer
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4  ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 object-contain mb-3"
                />
                <p className={`text-lg font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} text-center`}>
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
