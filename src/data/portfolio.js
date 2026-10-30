// All the content of the portfolio lives here. Edit this file to change text, projects or links.

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

// Each skill: [name, optional tag]
export const skills = [
  { group: "Development", items: [["HTML5"], ["CSS3"], ["JavaScript"], ["React.js"]] },
  { group: "Styling & Design", items: [["Responsive Web Design"], ["Tailwind CSS"], ["Figma"], ["UI Layout & Visual Hierarchy"]] },
  { group: "Tools", items: [["Git"], ["GitHub"], ["Visual Studio Code"], ["Browser DevTools"]] },
];

export const projects = [
  {
    title: "Findit Real Estate",
    image: "./images/projects/project-1.png",
    description: "A real-estate website built to practice layout, HTML, CSS and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://netlify.app",
  },
  {
    title: "Netlinks Pricing",
    image: "./images/projects/project-2.png",
    description: "A pricing page with clean cards, good spacing and responsive behavior.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://netlify.app",
  },
  {
    title: "Mentor Cards",
    image: "./images/projects/project-3.jpg",
    description: "A mentor-discovery interface with clean cards that are easy to explore.",
    tech: ["HTML", "CSS", "Responsive"],
    link: "https://netlify.app",
  },
  {
    title: "Contact Form",
    image: "./images/projects/project-4.jpg",
    description: "A simple, readable contact form with clear hierarchy.",
    tech: ["HTML", "CSS", "Responsive"],
    link: "https://netlify.app",
  },
  {
    title: "Course Cards",
    image: "./images/projects/project-5.jpg",
    description: "Responsive course cards with consistent spacing and readable text.",
    tech: ["HTML", "CSS", "Responsive"],
    link: "https://netlify.app",
  },
  {
    title: "Beauty Website",
    image: "./images/projects/project-6.jpg",
    description: "An online beauty shop with reusable components and a clean look.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://netlify.app",
  },
  {
    title: "Portfolio Website",
    image: "./images/projects/portfolio-website.jpg",
    description: "A responsive portfolio website with a clean, friendly design.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://netlify.app",
  },
];

export const education = [
  { period: "June 2026 — Now", title: "Front-End Development", place: "Netlinks", text: "Hands-on training in HTML, CSS, JavaScript and responsive web design.", current: true },
  { period: "2026", title: "Fundamentals of Web Development", place: "EmpowerHer", text: "A course that built strong web development basics." },
  { period: "2026", title: "TOEFL", place: "ETS", text: "Improving my English to learn from the best resources worldwide." },
  { period: "2025", title: "ICDL Certificate", place: "ICDL", text: "Core computer skills that I use every day." },
  { period: "Jan – Mar 2025", title: "BookClub Course", place: "Creative Thinkers", text: "A reading course that built my learning habits." },
  { period: "2024", title: "High School Diploma", place: "High School", text: "Finished high school and earned my diploma." },
  { period: "2024", title: "Six-Month Specialized Program", place: "Mawoud Academy", text: "Finished the program and presented my monograph with outstanding performance." },
  { period: "Jul – Sep 2024", title: "Online English Grammar", place: "Center of Business Administration", text: "Completed the 7th batch of the Fundamental Level course." },
  { period: "Jul – Aug 2024", title: "Duolingo English Preparation", place: "Afghan Youth Edureach", text: "Finished an English preparation class." },
];

export const certificates = [
  { title: "Web Development Workshop", issuer: "EmpowerHer", date: "Oct 2026", image: "./images/certificates/empowerher-web-development.jpg" },
  { title: "Volunteer Mentor Certificate", issuer: "Center of Business Administration", date: "Mar – May 2025", image: "./images/certificates/cba-volunteer-mentor.jpg" },
  { title: "Course Supervisor Letter", issuer: "Center of Business Administration", date: "Dec 2024 – Feb 2025", image: "./images/certificates/cba-supervisor-letter.jpg" },
  { title: "BookClub Course", issuer: "Creative Thinkers", date: "Jan – Mar 2025", image: "./images/certificates/bookclub.jpg" },
  { title: "Responsible AI Webinar", issuer: "Youth Digital Literacy", date: "2025", image: "./images/certificates/responsible-ai-webinar.jpg" },
  { title: "English Grammar Completion", issuer: "Center of Business Administration", date: "Sep 2024", image: "./images/certificates/cba-english-completion.jpg" },
  { title: "Duolingo English Preparation", issuer: "Afghan Youth Edureach", date: "Aug 2024", image: "./images/certificates/duolingo-prep.jpg" },
  { title: "Mawoud Academy Diploma", issuer: "Mawoud Academy", date: "Aug 2024", image: "./images/certificates/mawoud-academy.jpg" },
  { title: "Kangaroo Math — Provincial Selection", issuer: "Kangourou sans Frontières", date: "Apr 2024", image: "./images/certificates/kangaroo-math-2024.jpg" },
];

export const contact = {
  email: "marziasadeqi332@gmail.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
};

// Options shown in the "What do you need?" dropdown of the contact form.
export const services = [
  "Personal portfolio design",
  "Landing pages",
  "Online shop websites",
  "Figma to HTML & CSS",
  "HTML & CSS to Figma",
  "Other",
];

// Where the contact form sends messages (Formspree).
export const FORM_ENDPOINT = "https://formspree.io";
