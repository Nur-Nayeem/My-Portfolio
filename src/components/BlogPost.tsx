import { blogPosts } from "../data/my-data";


interface BlogSectionProps {
  darkMode: boolean;
}

const BlogSection= ({ darkMode }:BlogSectionProps) => {
  return (
    <section
      id="blog"
      className={`py-20 ${
        darkMode ? "bg-gray-800" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            I share my knowledge and experiences through articles on web
            development, MERN stack, and software engineering best practices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                darkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <button className="text-purple-600 hover:text-pink-600 dark:text-purple-400 dark:hover:text-pink-400 font-medium flex items-center transition-colors duration-300 cursor-pointer whitespace-nowrap">
                    Read More <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 !rounded-button cursor-pointer whitespace-nowrap">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
