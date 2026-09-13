
function App() {
  return (
    <div className="portfolio">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          AJAY<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#education">Education</a>
          <a href="#resume">Resume</a>
          <a href="#certifications">Certifications</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="https://github.com/ajayrathodddd"
          target="_blank"
          rel="noreferrer"
          className="nav-github"
        >
          GitHub
        </a>
      </nav>

      {/* ================= HERO ================= */}
      <main id="home" className="hero">
        <div className="hero-content">
          <div className="availability">
            <span></span>Available for opportunities
          </div>

          <p className="hero-small">✦ Full-Stack Developer</p>

          <h1>
            Building modern
            <br />
            <span>web & AI</span> experiences.
          </h1>

          <p className="hero-description">
            I'm Ajay Ravi Rathod, a Full-Stack Developer focused on building
            practical web applications and AI-powered solutions using modern
            technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects →
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/ajayrathodddd"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ajay-rathod-b64467413/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:ajayrathodddd1@gmail.com">Email</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-window">
            <div className="window-top">
              <div className="window-dots">
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
                name: <span className="green">"Ajay Rathod"</span>,
              </p>

              <p className="indent">
                role: <span className="green">"Full-Stack Developer"</span>,
              </p>

              <p className="indent">
                focus: <span className="green">"AI Applications"</span>,
              </p>

              <p className="indent">
                stack: [<span className="green">"React"</span>,{" "}
                <span className="green">"Node.js"</span>,{" "}
                <span className="green">"MongoDB"</span>]
              </p>

              <p>{"}"}</p>

              <p className="code-comment">
                // Building real-world software 🚀
              </p>
            </div>
          </div>

          <div className="floating-icon">{"</>"}</div>
        </div>
      </main>

      {/* ================= ABOUT ================= */}
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

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section">
        <p className="section-label">02 — SKILLS</p>

        <h2>Technologies I work with.</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>
              HTML5 · CSS3 · JavaScript · React.js · Bootstrap · Tailwind CSS
            </p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js · Express.js · REST APIs</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MongoDB · Mongoose · SQL · SQLite</p>
          </div>

          <div className="skill-card">
            <h3>AI & Generative AI</h3>
            <p>
              Generative AI · LLM Integration · OpenAI API · Prompt Engineering
            </p>
          </div>

          <div className="skill-card">
            <h3>Programming</h3>
            <p>JavaScript · Python</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git · GitHub · VS Code · Postman</p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">
        <p className="section-label">03 — PROJECTS</p>

        <h2>Featured projects.</h2>

        <div className="projects-grid">

          {/* ================= PROJECT 1 ================= */}
          <article className="project-card featured">
            <span>01</span>

            <h3>AI CareerPilot</h3>

            <p>
              AI-powered career development platform designed to help users
              with career preparation, resume analysis, job matching, skill-gap
              analysis, learning roadmaps and interview preparation.
            </p>

            <div className="tech">
              React.js · Node.js · Express.js · MongoDB · Generative AI
            </div>

            <div className="project-actions">

              {/* GitHub */}
              <a
                href="https://github.com/ajayrathodddd/AI-CareerPilot"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub →
              </a>

              {/* Live Demo */}
              <a
                href="https://ai-careerpilot-ochre.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo →
              </a>

            </div>
          </article>

          {/* ================= PROJECT 2 ================= */}
          <article className="project-card">
            <span>02</span>

            <h3>Rathod E-Commerce Platform</h3>

            <p>
              Full-stack e-commerce application with product browsing,
              shopping cart, checkout and order-management workflows.
            </p>

            <div className="tech">
              React.js · Django · Redux · REST APIs · SQLite
            </div>

            <div className="project-actions">

              {/* GitHub */}
              <a
                href="https://github.com/ajayrathodddd/rathod-ecommerce-platform"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub →
              </a>

              {/* Live Demo */}
              <a
                href="https://rathod-ecommerce-frontend.onrender.com/login"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo →
              </a>

            </div>
          </article>

          {/* ================= PROJECT 3 ================= */}
          <article className="project-card">
            <span>03</span>

            <h3>Social Media App</h3>

            <p>
              Full-stack social media application built with a React frontend,
              Node.js and Express backend, and MongoDB database.
            </p>

            <div className="tech">
              React.js · Node.js · Express.js · MongoDB
            </div>

            <div className="project-actions">

              {/* GitHub */}
              <a
                href="https://github.com/ajayrathodddd/MEJOR-PROJECT_2"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub →
              </a>

              {/* Live Demo */}
              <a
                href="https://social-media-app-frontend-tuie.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo →
              </a>

            </div>
          </article>

        </div>
      </section>

      {/* ================= RESUME ================= */}
      <section id="resume" className="resume-section">
        <p className="section-label">04 — RESUME</p>

        <div className="resume-content">
          <h2>My Resume</h2>

          <p>
            View or download my resume to learn more about my skills, projects,
            education, and certifications.
          </p>

          <div className="resume-actions">

            {/* VIEW RESUME */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              View Resume
            </a>

            {/* DOWNLOAD RESUME */}
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

      {/* ================= CERTIFICATIONS ================= */}
      <section id="certifications" className="section">
        <p className="section-label">05 — CERTIFICATIONS</p>

        <h2>Learning & certifications.</h2>

        <div className="certifications">

          {/* 1. FULL STACK */}
          <div className="certificate-card">
            <h3>Full Stack Development Course</h3>
            <p>GUVI | HCL</p>
            <span>Professional Development</span>

            <a
              href="https://drive.google.com/file/d/1KiOVLiLKmZAbqr8j0euLrGv8q4oeMOc1/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

          {/* 2. CHATGPT FOR EVERYONE */}
          <div className="certificate-card">
            <h3>
              ChatGPT for Everyone – Generative AI & Prompt Engineering
            </h3>
            <p>GUVI | HCL</p>
            <span>Generative AI & Prompt Engineering</span>

            <a
              href="https://drive.google.com/file/d/1bSmPuirHv8uW17jQ_XTTkViJwKbob9Fr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

          {/* 3. AI PORTFOLIO ADVISOR */}
          <div className="certificate-card">
            <h3>AI-Powered Portfolio Advisor Using JavaScript</h3>
            <p>GUVI | HCL</p>
            <span>AI & JavaScript</span>

            <a
              href="https://drive.google.com/file/d/1ppcCwiEZ_1Q4Yxe5rOREvVkDZ9dqJ3W6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

          {/* 4. GENERATIVE AI */}
          <div className="certificate-card">
            <h3>
              Generative AI Course: Build AI Apps with LLMs & Generative Models
            </h3>
            <p>GUVI | HCL</p>
            <span>Generative AI</span>

            <a
              href="https://drive.google.com/file/d/12PWpZ0YGN5CVtj1YIuWtidQc4Wgb7p1l/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

          {/* 5. AI TEXT ASSISTANT */}
          <div className="certificate-card">
            <h3>AI-Powered Text Assistant Using React.js</h3>
            <p>GUVI | HCL</p>
            <span>AI & React.js</span>

            <a
              href="https://drive.google.com/file/d/1LVIKez1ehJrKo1jxaBxhEp4fd861XWvH/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

          {/* 6. JAVASCRIPT */}
          <div className="certificate-card">
            <h3>JavaScript Certificate</h3>
            <p>GUVI | HCL</p>
            <span>JavaScript</span>

            <a
              href="https://drive.google.com/file/d/1F33STkNlGjjxzs0SyU2ShuNYi9fA9Gue/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

          {/* 7. OPENAI API */}
          <div className="certificate-card">
            <h3>Hands-On with OpenAI API Using React.js</h3>
            <p>GUVI | HCL</p>
            <span>AI & OpenAI API</span>

            <a
              href="https://drive.google.com/file/d/1Ym6qhOxTX_m-9FdfhFBrd5CEJvm2YMSc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="section">
        <p className="section-label">06 — EDUCATION</p>

        <h2>Education.</h2>

        <div className="education-card">
          <h3>Ghousia College of Engineering</h3>

          <p>
            Bachelor of Engineering (B.E.) — Computer Science & Engineering
          </p>

          <p>
            Affiliated to Visvesvaraya Technological University (VTU)
          </p>

          <p>Bengaluru, Karnataka, India</p>

          <span>Currently Pursuing</span>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact-section">
        <p className="section-label">07 — CONTACT</p>

        <h2>Let's build something useful.</h2>

        <p>
          I'm interested in full-stack development, AI-powered applications
          and software development opportunities.
        </p>

        <a href="mailto:ajayrathodddd1@gmail.com" className="primary-btn">
          Email Me →
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>© 2026 Ajay Ravi Rathod</p>

        <div>
          <a
            href="https://github.com/ajayrathodddd"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ajay-rathod-b64467413/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:ajayrathodddd1@gmail.com">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

