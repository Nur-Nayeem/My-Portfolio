import { projects } from "../data/my-data";


interface ProjectsSectionProps {
  darkMode: boolean;
}

interface ProjectCardsProps {
  darkMode: boolean;
  id: number;
  image: string; 
  title: string;
  description: string;
  technologies: string[]; 
  demoLink?: string; 
  githubLink: string; 
}


const ProjectCard = ({ darkMode, id, image, title, description, technologies, demoLink, githubLink }: ProjectCardsProps) => {
  return (
    <div
      key={id}
      className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${darkMode ? "bg-gray-800" : "bg-white"
        }`}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full ${id == 3 ? 'object-cover' : ' object-cover'}  object-top transition-transform duration-500 hover:scale-110`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:from-purple-900 dark:to-pink-900 dark:text-purple-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm flex items-center !rounded-button cursor-pointer whitespace-nowrap"
          >
            <i className="fas fa-external-link-alt mr-2"></i> Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm flex items-center !rounded-button cursor-pointer whitespace-nowrap"
          >
            <i className="fab fa-github mr-2"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  )
}



const ProjectsSection = ({
  darkMode
}: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"
        } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Here are some of my recent MERN stack projects. Each project
            demonstrates different aspects of full-stack development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              darkMode={darkMode}
              id={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/nur-nayeem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 !rounded-button cursor-pointer whitespace-nowrap"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
