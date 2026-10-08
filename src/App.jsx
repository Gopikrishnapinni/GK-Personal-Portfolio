import { useEffect, useState } from "react";

const username = "Gopikrishnapinni";

const prettyName = (name) =>
  name.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Gopikrishna Pinni home">
        <strong>Gopikrishna <em>Pinni</em></strong>
      </a>
      <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <div className="header-links"><a className="header-linkedin" href="https://www.linkedin.com/in/gopikrishna-pinni/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="header-cta" href={`https://github.com/${username}`} target="_blank" rel="noreferrer">GitHub ↗</a></div>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
    </header>
  );
}

function SectionJumpButtons() {
  const sections = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Skills", "skills"],
    ["Projects", "work"],
    ["Education", "education"],
    ["Contact", "contact"],
  ];

  return (
    <div className="section-jumps section-shell" aria-label="Quick section navigation">
      <span className="jump-label">Explore</span>
      <div className="jump-buttons">
        {sections.map(([label, id]) => (
          <a href={`#${id}`} key={id}>{label}<span>↘</span></a>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <p className="name-heading"><span>My name is</span> <strong>Gopikrishna Pinni</strong></p>
        <p className="eyebrow"><span className="pulse" /> Available for DevOps opportunities</p>
        <h1>Building systems<br /><em>that move ideas.</em></h1>
        <p className="hero-text">I’m Gopikrishna — a DevOps Engineer and Java backend developer turning complex cloud infrastructure into reliable, observable production systems.</p>
        <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <span>↘</span></a><a className="text-link" href="/Gopikrishna-Pinni-Resume.pdf" download>Download resume <span>↘</span></a></div>
        <div className="hero-meta"><span>Based in <b>Bengaluru, India</b></span><span>2+ years building in production</span><a href="tel:+917799502864">+91 7799502864</a></div>
      </div>
      <div className="hero-art" aria-label="Cloud infrastructure illustration">
        <div className="orb orb-main"><div className="orb-core" /><span className="orbit orbit-one" /><span className="orbit orbit-two" /></div>
        <div className="terminal-card"><div className="terminal-top"><i /><i /><i /><span>deployment.log</span></div><div className="terminal-body"><p><b>$</b> kubectl get pods</p><p className="success">● api-gateway&nbsp;&nbsp; Running</p><p className="success">● catalog-service&nbsp; Running</p><p className="muted">→ release v2.4.1 deployed</p></div></div>
        <div className="floating-tag tag-aws">AWS <small>☁</small></div><div className="floating-tag tag-k8s">K8s <small>◈</small></div>
      </div>
    </section>
  );
}

function FeaturedProject({ number, href, visual, title, description, chips }) {
  return (
    <article className="project-card featured-card">
      <div className="project-top"><span className="project-index">{number}</span><span className="project-kind">Featured project</span><a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${title} on GitHub`}>↗</a></div>
      <div className={`project-visual ${visual.className}`}>{visual.content}<div className="visual-caption">{visual.caption}</div></div>
      <h3>{title}</h3><p>{description}</p><div className="chips">{chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
    </article>
  );
}

function GitHubProjects() {
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);
        return response.json();
      })
      .then(setRepositories)
      .catch((reason) => {
        console.error("Unable to load GitHub repositories:", reason);
        setError(true);
      });
  }, []);

  return (
    <>
      <div className="github-heading"><div><p className="eyebrow">From GitHub</p><h3>More experiments, utilities & learning.</h3></div><span>{error ? "See the complete collection on GitHub" : repositories.length ? `${repositories.length} public repositories` : "Loading repositories…"}</span></div>
      <div className="repo-grid">
        {error ? <div className="repo-loading">GitHub projects are temporarily unavailable. <a className="text-link" href={`https://github.com/${username}?tab=repositories`} target="_blank" rel="noreferrer">Browse repositories ↗</a></div> : repositories.length ? repositories.map((repo) => <article className="repo-card" key={repo.id}><h4>{prettyName(repo.name)}</h4><p>{repo.description || "A practical project exploring software development, automation, or cloud engineering."}</p><div className="repo-footer"><span>{repo.language || "Open source"}{repo.stargazers_count ? ` · ★ ${repo.stargazers_count}` : ""}</span><a href={repo.html_url} target="_blank" rel="noreferrer" aria-label={`Open ${repo.name} on GitHub`}>↗</a></div></article>) : <div className="repo-loading">Fetching the latest public repositories from GitHub<span>✦</span></div>}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div className="noise" />
      <Header />
      <main id="top">
        <SectionJumpButtons />
        <Hero />
        <section className="ticker" aria-label="Technology stack"><div className="ticker-track">{["AWS","✦","KUBERNETES","✦","TERRAFORM","✦","CI/CD","✦","SPRING BOOT","✦","OBSERVABILITY","✦","AWS","✦","KUBERNETES","✦","TERRAFORM"].map((item, index) => <span key={`${item}-${index}`} className={item === "✦" ? "ticker-star" : ""}>{item}</span>)}</div></section>
        <section id="about" className="section-shell section"><div className="section-intro"><p className="eyebrow">01 / About me</p><h2>The bridge between<br /><em>code & cloud.</em></h2></div><div className="about-content"><p className="large-copy">I build the systems that help teams move faster — from Java APIs and microservices to automated infrastructure, secure pipelines, and production observability.</p><p>At Luna Software Solutions, I work on a production healthcare EMR platform for TCS. My sweet spot is where application development meets cloud infrastructure: making releases safer, services more resilient, and operations easier to understand.</p><div className="stats"><div><strong>39</strong><span>Public repositories</span></div><div><strong>2+</strong><span>Years of experience</span></div><div><strong>∞</strong><span>Curiosity to learn</span></div></div></div></section>
        <section id="experience" className="section-shell section experience-section"><div className="section-intro"><p className="eyebrow">02 / Experience</p><h2>Production-minded<br /><em>by default.</em></h2></div><div className="timeline"><article className="timeline-item"><div className="timeline-date">SEP 2024 — PRESENT</div><div className="timeline-marker" /><div className="timeline-card"><div className="role-heading"><div><h3>Associate Software Engineer</h3><p>Luna Software Solutions Pvt Ltd <span>· Client: TCS</span></p></div><span className="role-label">Bengaluru, India</span></div><p><strong>Project: SupraMed — Healthcare EMR Platform</strong></p><ul><li>Build and maintain CI/CD pipelines with Jenkins and GitHub Actions, using Docker to automate build, test, and deployment workflows for a production healthcare platform.</li><li>Support AWS infrastructure across EC2, S3, IAM, ECR, and EKS for containerized applications, collaborating with development and QA teams.</li><li>Apply rolling deployment and rollback strategies to minimize downtime during production deployments.</li><li>Troubleshoot Linux-based CI/CD and deployment issues, performing root-cause analysis to maintain production stability.</li><li>Develop Java Spring Boot REST APIs for patient records, appointments, referrals, and clinic management; implement RBAC and Git/GitHub branching strategies.</li><li>Optimize MySQL schemas, SQL queries, and indexing for high-volume healthcare workflows.</li></ul><div className="chips">{["Java","Spring Boot","AWS","Docker","Kubernetes","MySQL"].map((chip) => <span key={chip}>{chip}</span>)}</div></div></article></div></section>
        <section id="skills" className="section-shell section toolkit"><div className="section-intro"><p className="eyebrow">03 / Technical skills</p><h2>Tools for the<br /><em>real world.</em></h2></div><div className="tool-grid">{[["01","Cloud (AWS)","EC2 · EKS · ECR · IAM · VPC · S3 · RDS · CloudWatch · Lambda"],["02","CI/CD & DevOps","Jenkins · GitHub Actions · ArgoCD · Maven · CI/CD Pipeline Design"],["03","Containers & orchestration","Docker · Kubernetes (EKS) · Helm"],["04","Infrastructure as code","Terraform"],["05","Monitoring & logging","Prometheus · Grafana · ELK Stack · AWS CloudWatch"],["06","Scripting & automation","Python · Shell/Bash"],["07","Development","Java · Spring Boot · Spring Data JPA · RESTful APIs · Microservices · MySQL"],["08","Version control & systems","Git · GitHub · Branching Strategies · Linux · DNS · Ports · Security Groups · VPC · Agile/Scrum"]].map(([number,title,body]) => <div className="tool-category" key={number}><span className="tool-number">{number}</span><h3>{title}</h3><p>{body}</p></div>)}</div></section>
        <section id="work" className="section-shell section work-section"><div className="section-intro work-intro"><div><p className="eyebrow">04 / Selected work</p><h2>Things I’ve<br /><em>built & shipped.</em></h2></div><a className="text-link" href={`https://github.com/${username}?tab=repositories`} target="_blank" rel="noreferrer">View all on GitHub <span>↗</span></a></div><div className="featured-grid"><FeaturedProject number="01" href={`https://github.com/${username}/AI-powered-CI-CD-platform-`} visual={{ className: "visual-pipeline", content: <div className="pipeline-line"><span>CODE</span><i /><span>BUILD</span><i /><span>SCAN</span><i /><span>DEPLOY</span></div>, caption: "AUTOMATED / OBSERVABLE / SECURE" }} title="AI-powered CI/CD platform" description="A secure, observable delivery platform for Spring Boot applications running on AWS EKS, with AI-assisted failure analysis and recommendations." chips={["Terraform","EKS","GitHub Actions","Python"]} /><FeaturedProject number="02" href={`https://github.com/${username}/cloud-native-e-commerce-platform`} visual={{ className: "visual-cloud", content: <div className="cloud-nodes"><span>USER</span><span>CATALOG</span><span>ORDER</span></div>, caption: "KUBERNETES / MICROSERVICES" }} title="Cloud-native e-commerce" description="Java 17 microservices with Spring Cloud Gateway, Docker, Kubernetes, Helm, and Terraform for repeatable cloud deployment." chips={["Java","Spring Boot","Docker","ArgoCD"]} /></div><GitHubProjects /></section>
        <section id="education" className="section-shell section education"><div className="section-intro"><p className="eyebrow">05 / Background</p><h2>Always learning,<br /><em>always improving.</em></h2></div><div className="education-grid"><div><span className="tool-number">EDUCATION · 01</span><h3>B.Tech in Electronics & Communication Engineering</h3><p>Dhanekula Institute of Engineering & Technology<br />2020 — 2024 · Vijayawada, India</p></div><div><span className="tool-number">EDUCATION · 02</span><h3>Intermediate (MPC)</h3><p>Sri Prathiba Junior College<br />2018 — 2020 · Ongole, India</p></div><div><span className="tool-number">CERTIFICATION</span><h3>AWS Cloud Practitioner Essentials</h3><p>Amazon Web Services (AWS)</p></div></div></section>
        <section id="contact" className="contact-section"><div className="section-shell contact-inner"><p className="eyebrow">06 / Contact</p><h2>Let’s build something<br /><em>reliable together.</em></h2><p>Have a platform to improve, a pipeline to automate, or a role that needs a cloud-minded engineer? I’d love to hear from you.</p><a className="button button-primary" href="mailto:mrgopikrishnapinni93@gmail.com">Start a conversation <span>↗</span></a><div className="contact-links"><a href="mailto:mrgopikrishnapinni93@gmail.com">Email · mrgopikrishnapinni93@gmail.com</a><a href="tel:+917799502864">Phone · +91 7799502864</a><a href="https://www.linkedin.com/in/gopikrishna-pinni/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
      </main>
      <footer className="site-footer section-shell"><span>© 2026 Gopikrishna Pinni</span><span>Designed for dependable delivery <b>✦</b></span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}

export default App;
