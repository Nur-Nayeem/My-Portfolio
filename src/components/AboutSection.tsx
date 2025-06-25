import React from "react";
import nur from '../assets/nur-nayeem.jpg';
import { skills } from "../data/my-data";

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode}) => {
  return (
          <section
        id="about"
        className={`py-20 ${
          darkMode ? "bg-gray-800" : "bg-gray-50"
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
                I'm a passionate aspiring full-stack developer focusing on the MERN stack. While I’m just starting out, I’m constantly building projects to sharpen my skills and create user-friendly web applications. I’m eager to grow, learn, and turn ideas into functional, well-designed experiences.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                My journey in web development began with a fascination for
                creating interactive interfaces. Today, I leverage modern
                technologies to build scalable, performant applications that
                solve real-world problems.
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
              <div className="flex space-x-4">
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
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full p-[3px] bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div id="skills-chart" className="w-full h-80"></div>
              <div>
                {skills.map((skill, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          background:
                            skill.level >= 90
                              ? "linear-gradient(to right, #a21caf, #db2777)" 
                              : skill.level >= 80
                              ? "linear-gradient(to right, #c026d3, #f472b6)" 
                              : skill.level >= 70
                              ? "linear-gradient(to right, #e879f9, #f9a8d4)" 
                              : skill.level >= 60
                              ? "linear-gradient(to right, #f5d0fe, #fbcfe8)" 
                              : "linear-gradient(to right, #fae8ff, #ffe4e6)", 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default AboutSection;