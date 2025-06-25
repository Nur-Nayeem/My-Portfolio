import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogPost";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { skills } from "./data/my-data";
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Initialize skills chart
    const chartDom = document.getElementById("skills-chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        radar: {
          indicator: skills.map((skill) => ({ name: skill.name, max: 100 })),
          radius: "65%",
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: skills.map((skill) => skill.level),
                name: "Skills",
                areaStyle: {
                  color: darkMode
                    ? "rgba(147, 51, 234, 0.6)"
                    : "rgba(168, 85, 247, 0.6)",
                },
                lineStyle: {
                  color: darkMode ? "#db2777" : "#be185d",
                },
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
      // Resize chart on window resize
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      return () => {
        window.removeEventListener("resize", () => {
          myChart.resize();
        });
        myChart.dispose();
      };
    }
  }, [darkMode]);
  // Handle form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! I will get back to you soon.");
  };
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "blog", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      {/* Navigation */}
        <Navbar
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      menuOpen={menuOpen}
      toggleMenu={toggleMenu}
      activeSection={activeSection}
      scrollToSection={scrollToSection}
    />
      {/* Hero Section */}
      <HeroSection 
      darkMode={darkMode} 
      scrollToSection={scrollToSection} 
      />
      {/* About Section */}
    <AboutSection 
    darkMode={darkMode} />
      {/* Projects Section */}
    <ProjectsSection
    darkMode={darkMode}/>
      {/* Blog Section */}
    <BlogSection 
    darkMode={darkMode} />
      {/* Contact Section */}
    <ContactSection 
    darkMode={darkMode} 
    handleContactSubmit={handleContactSubmit} />
      {/* Footer */}
    <Footer 
    darkMode={darkMode} 
    scrollToSection={scrollToSection} />
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg transition-all duration-300 z-50 !rounded-button cursor-pointer`}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};
export default App;
