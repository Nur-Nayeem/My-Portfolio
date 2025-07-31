// Skills data
export const skills = [
  { name: "HTML", img: 'https://res.cloudinary.com/dx43z0uml/image/upload/v1753939194/html-5_bwgwwf.png' },
  { name: "CSS", img: "https://res.cloudinary.com/dx43z0uml/image/upload/v1753939958/css-3_nctm0d.png" },
  { name: "Tailwind", img: "https://res.cloudinary.com/dx43z0uml/image/upload/v1753940213/tailwind-css-icon_pqngd9.png" },
  { name: "JavaScript", img: "https://res.cloudinary.com/dx43z0uml/image/upload/v1753940072/js_k74pip.png" },
  { name: "TypeScript", img: "https://res.cloudinary.com/dx43z0uml/image/upload/v1753940318/typescript-programming-language-icon_ytew37.png" },
  { name: "React", img: "https://res.cloudinary.com/dx43z0uml/image/upload/v1753940373/react-js-icon_txsjfz.png" },
  { name: "React-Native", img: "https://res.cloudinary.com/dx43z0uml/image/upload/v1753941299/react-native-app-icon_mofxzm.png" },
  { name: "Node.js", img: "https://res.cloudinary.com/dx43z0uml/image/upload/v1753940800/nodejs_irn7zr.png" },
  { name: "Express", img: "https://res.cloudinary.com/dx43z0uml/image/upload/v1753940598/express-js-icon_kggy49.png" },
  { name: "MongoDB", img: "https://res.cloudinary.com/dx43z0uml/image/upload/v1753941115/mongodb-icon_g7b8ue.png" },
  { name: "Python", img: "https://res.cloudinary.com/dx43z0uml/image/upload/v1753941169/python-programming-language-icon_bmtp18.png" },
  { name: "Flaks", img: "https://res.cloudinary.com/dx43z0uml/image/upload/v1753941492/flask-logo-icon_wb1gip.png" },

];
// Projects data
export const projects = [
  {
    id: 1,
    title: "Blogging Application",
    description:
      "A full-stack blogging application with user authentication, blog management, and user interaction.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://res.cloudinary.com/dx43z0uml/image/upload/v1750848790/home_vfsbed.png",
    demoLink: "https://bloggerthoughts.netlify.app/",
    githubLink: "https://github.com/Nur-Nayeem/MERN-BLOGGING-WEB-APP",
  },
  {
    id: 2,
    title: "Image Search App",
    description:
      "A lightweight image search app using HTML, CSS, and JavaScript with full responsive support",
    technologies: ["HTML", "CSS", "JavaScript", "Image API"],
    image:
      "https://res.cloudinary.com/dx43z0uml/image/upload/v1750849280/imgSearchApiApp_lp0be3.png",
    demoLink: "https://nur-nayeem.github.io/Image-Search-API-App/",
    githubLink: "https://github.com/Nur-Nayeem/Image-Search-API-App",
  },
  {
    id: 3,
    title: "E-library With Audio Books",
    description:
      "A modern E-Library app built with Flutter, offering eBooks and audiobooks with a smooth, cross-platform experience.",
    technologies: ["Dart", "Flutter", "Supabase"],
    image:
      "https://res.cloudinary.com/dx43z0uml/image/upload/v1750850247/audio-book_xwgdxf.jpg",
    //   demoLink: "https://dashboard-demo.com",
    githubLink: "https://github.com/Nur-Nayeem/E_library_with_Audio_Books",
  },
  {
    id: 4,
    title: "Ai Image Generator",
    description:
      "Transforms text prompts into high-resolution images in various styles using advanced AI.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    image:
      "https://res.cloudinary.com/dx43z0uml/image/upload/v1751913911/Screenshot_from_2025-07-08_00-24-13_igqqwu.png",
    demoLink: "https://nur-nayeem.github.io/deploy--ai-image-generator-client/",
    githubLink: "https://github.com/Nur-Nayeem/Ai-Image-Generator",
  },
];


// Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "Learn how to design and implement scalable RESTful APIs using Node.js and Express with best practices for authentication, error handling, and performance optimization.",
    date: "June 15, 2025",
    readTime: "8 min read",
    category: "Backend Development",
    image:
      "https://placehold.co/600x350",
  },
  {
    id: 2,
    title: "State Management Patterns in React Applications",
    excerpt:
      "An in-depth comparison of different state management approaches in React, from Context API to Redux, and when to use each one for optimal performance.",
    date: "May 28, 2025",
    readTime: "10 min read",
    category: "Frontend Development",
    image:
      "https://placehold.co/600x350",
  },
  {
    id: 3,
    title: "Optimizing MongoDB for Production Environments",
    excerpt:
      "Practical tips and strategies for optimizing MongoDB performance in high-traffic production applications, including indexing, sharding, and query optimization.",
    date: "April 10, 2025",
    readTime: "12 min read",
    category: "Database",
    image:
      "https://placehold.co/600x350",
  },
];