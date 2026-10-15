const projects = [
  {
    number: "01",
    category: "AI PLATFORM",
    title: "AI CareerPilot",
    description:
      "An AI-powered career platform that helps users analyze resumes, identify skill gaps, match with suitable jobs, build learning roadmaps, and prepare for technical interviews.",
    highlights: [
      "Resume Analysis",
      "Job Matching",
      "Skill Gap Analysis",
      "Learning Roadmap",
      "Interview Preparation",
    ],
    tech: "React.js · Node.js · Express.js · MongoDB · Generative AI",
    github: "https://github.com/ajayrathodddd/AI-CareerPilot",
    demo: "https://ai-careerpilot-ochre.vercel.app/",
  },
  {
    number: "02",
    category: "E-COMMERCE",
    title: "Rathod E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product browsing, cart management, checkout workflows, authentication, and order management.",
    highlights: ["Product Catalog", "Shopping Cart", "Checkout", "Orders"],
    tech: "React.js · Django · Redux · REST APIs · SQLite",
    github: "https://github.com/ajayrathodddd/rathod-ecommerce-platform",
    demo: "https://rathod-ecommerce-frontend.onrender.com/login",
  },
  {
    number: "03",
    category: "SOCIAL PLATFORM",
    title: "Social Media App",
    description:
      "A full-stack social media application with user profiles, posts, likes, comments, sharing, and real-time features.",
    highlights: ["User Profiles", "Posts", "Likes", "Comments", "Sharing"],
    tech: "React.js · Node.js · Express.js · MongoDB · Socket.IO",
    github: "https://github.com/ajayrathodddd/Social-Media-App",
    demo: "https://social-media-app-frontend-tuie.onrender.com/",
  },
];

const certifications = [
  {
    title: "Full Stack Development Course",
    provider: "GUVI | HCL",
    category: "Professional Development",
    url: "https://drive.google.com/file/d/1KiOVLiLKmZAbqr8j0euLrGv8q4oeMOc1/view?usp=drive_link",
  },
  {
    title: "ChatGPT for Everyone – Generative AI & Prompt Engineering",
    provider: "GUVI | HCL",
    category: "Generative AI & Prompt Engineering",
    url: "https://drive.google.com/file/d/1bSmPuirHv8uW17jQ_XTTkViJwKbob9Fr/view?usp=sharing",
  },
  {
    title: "AI-Powered Portfolio Advisor Using JavaScript",
    provider: "GUVI | HCL",
    category: "AI & JavaScript",
    url: "https://drive.google.com/file/d/1ppcCwiEZ_1Q4Yxe5rOREvVkDZ9dqJ3W6/view?usp=sharing",
  },
  {
    title: "Generative AI Course: Build AI Apps with LLMs & Generative Models",
    provider: "GUVI | HCL",
    category: "Generative AI",
    url: "https://drive.google.com/file/d/12PWpZ0YGN5CVtj1YIuWtidQc4Wgb7p1l/view?usp=sharing",
  },
  {
    title: "AI-Powered Text Assistant Using React.js",
    provider: "GUVI | HCL",
    category: "AI & React.js",
    url: "https://drive.google.com/file/d/1LVIKez1ehJrKo1jxaBxhEp4fd861XWvH/view?usp=drive_link",
  },
  {
    title: "JavaScript Certificate",
    provider: "GUVI | HCL",
    category: "JavaScript",
    url: "https://drive.google.com/file/d/1F33STkNlGjjxzs0SyU2ShuNYi9fA9Gue/view?usp=drive_link",
  },
  {
    title: "Hands-On with OpenAI API Using React.js",
    provider: "GUVI | HCL",
    category: "AI & OpenAI API",
    url: "https://drive.google.com/file/d/1Ym6qhOxTX_m-9FdfhFBrd5CEJvm2YMSc/view?usp=sharing",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: "HTML5 · CSS3 · JavaScript · React.js · Bootstrap · Tailwind CSS",
  },
  {
    title: "Backend",
    skills: "Node.js · Express.js · REST APIs",
  },
  {
    title: "Database",
    skills: "MongoDB · Mongoose · SQL · SQLite",
  },
  {
    title: "AI & Generative AI",
    skills: "Generative AI · LLM Integration · OpenAI API · Prompt Engineering",
  },
  {
    title: "Programming",
    skills: "JavaScript · Python",
  },
  {
    title: "Tools",
    skills: "Git · GitHub · VS Code · Postman",
  },
];

function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar" aria-label="Main navigation">
        <a className="logo" href="#home" aria-label="Ajay home">
          AJAY<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#education">Education</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="https://github.com/ajayrathodddd"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-github"
        >
          GitHub
        </a>
      </nav>

      {/* HERO */}
      <main id="home" className="hero">
        <div className="hero-content">
          <div className="availability">
            <span aria-hidden="true"></span>
            Available for opportunities
          </div>

          <p className="hero-small">
            ✦ Full-Stack Developer | AI-Focused Software Developer
          </p>

          <h1>
            I build
            <br />
            <span>full-stack &amp; AI</span>
            <br />
            applications.
          </h1>

          <p className="hero-description">
            I&apos;m Ajay Ravi Rathod, a Computer Science &amp; Engineering
            student and Full-Stack Developer focused on building practical web
            applications and AI-powered software using React.js, Node.js,
            Python, FastAPI, MongoDB, and modern AI technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects →
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links" aria-label="Social links">
            <a
              href="https://github.com/ajayrathodddd"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-rathod-b64467413/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:ajayrathodddd1@gmail.com">Email</a>
          </div>
        </div>

        <div className="hero-card" aria-label="Developer code example">
          <div className="code-window">
            <div className="window-top">
              <div className="window-dots" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>developer.js</span>
            </div>

            <div className="code-content">
              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> = {"{"}
              </p>
              <p className="indent">
                name: <span className="green">&quot;Ajay Rathod&quot;</span>,
              </p>
              <p className="indent">
                role:{" "}
                <span className="green">&quot;Full-Stack Developer&quot;</span>,
              </p>
              <p className="indent">
                focus: <span className="green">&quot;AI Applications&quot;</span>,
              </p>
              <p className="indent">
                stack: [<span className="green">&quot;React&quot;</span>,{" "}
                <span className="green">&quot;Node.js&quot;</span>,{" "}
                <span className="green">&quot;MongoDB&quot;</span>]
              </p>
              <p>{"}"}</p>
              <p className="code-comment">
                // Building real-world software 🚀
              </p>
            </div>
          </div>
          <div className="floating-icon" aria-hidden="true">
            {"</>"}
          </div>
        </div>
      </main>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="section-label">01 — ABOUT</p>
        <h2>
          Turning ideas into
          <br />
          working software.
        </h2>
        <p className="section-text">
          I enjoy developing full-stack applications that solve practical
          problems. My work combines responsive frontend interfaces, backend
          APIs, databases, and AI capabilities to create useful digital
          experiences.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <p className="section-label">02 — SKILLS</p>
        <h2>Technologies I work with.</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.skills}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <p className="section-label">03 — PROJECTS</p>
        <h2>Featured projects.</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card${project.number === "01" ? " featured" : ""}`}
              key={project.title}
            >
              <span>
                {project.number} · {project.category}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>

              <div className="tech">{project.tech}</div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View GitHub →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="resume-section">
        <p className="section-label">04 — RESUME</p>
        <div className="resume-content">
          <h2>My Resume</h2>
          <p>
            View or download my resume to learn more about my skills, projects,
            education, and certifications.
          </p>
          <div className="resume-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              View Resume
            </a>
            <a
              href="/resume.pdf"
              download="Ajay_Ravi_Rathod_Resume.pdf"
              className="btn secondary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <p className="section-label">05 — CERTIFICATIONS</p>
        <h2>Learning &amp; certifications.</h2>
        <div className="certifications">
          {certifications.map((certificate) => (
            <article className="certificate-card" key={certificate.title}>
              <h3>{certificate.title}</h3>
              <p>{certificate.provider}</p>
              <span>{certificate.category}</span>
              <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Certificate →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <p className="section-label">06 — EDUCATION</p>
        <h2>Education.</h2>
        <div className="education-card">
          <h3>Ghousia College of Engineering</h3>
          <p>
            Bachelor of Engineering (B.E.) — Computer Science &amp; Engineering
          </p>
          <p>Visvesvaraya Technological University (VTU)</p>
          <p>Bengaluru, Karnataka, India</p>
          <span>Currently Pursuing</span>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <p className="section-label">07 — CONTACT</p>
        <h2>Let&apos;s build something useful.</h2>
        <p>
          I&apos;m interested in full-stack development, AI-powered applications,
          and software development opportunities.
        </p>
        <a href="mailto:ajayrathodddd1@gmail.com" className="primary-btn">
          Email Me →
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} Ajay Ravi Rathod</p>
        <div>
          <a
            href="https://github.com/ajayrathodddd"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ajay-rathod-b64467413/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:ajayrathodddd1@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
