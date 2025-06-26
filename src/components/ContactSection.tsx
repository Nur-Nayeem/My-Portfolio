import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";



interface ContactSectionProps {
  darkMode: boolean;
}

const ContactSection = ({ darkMode }: ContactSectionProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.SERVICE_ID,     
        import.meta.env.TEMPLATE_ID,     
        formRef.current,
        import.meta.env.PUBLIC_KEY       
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
          <section
        id="contact"
        className={`py-20 ${
          darkMode ? "bg-gray-900" : "bg-white"
        } transition-colors duration-300`}
      >
        <ToastContainer position="top-center" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out to me using the form below.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                } shadow-md`}
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full text-white mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                } shadow-md`}
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full text-white mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      nurnayem768@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                } shadow-md`}
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full text-white mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +880 17 9249 1909
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-colors duration-300 cursor-pointer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors duration-300 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://twitter.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white p-3 rounded-full transition-colors duration-300 cursor-pointer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://medium.com/@username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors duration-300 cursor-pointer"
                  aria-label="Medium"
                >
                  <i className="fab fa-medium-m"></i>
                </a>
              </div>
            </div>
            <div className="lg:col-span-3">
              <form
                ref={formRef}
                onSubmit={handleContactSubmit}
                className={`p-8 rounded-xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-gray-50 border-gray-300 text-gray-900"
                      } focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-gray-50 border-gray-300 text-gray-900"
                      } focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-gray-50 border-gray-300 text-gray-900"
                    } focus:ring-indigo-500 focus:border-indigo-500`}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-gray-50 border-gray-300 text-gray-900"
                    } focus:ring-indigo-500 focus:border-indigo-500`}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 !rounded-button cursor-pointer whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;