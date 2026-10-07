import ContactForm from "../components/ContactForm";
import Terminal from "../components/Terminal";

const basePath = "/PortFolio2026";

const capabilities = [
  ["PRODUCT / UX", "Requirements, flows, responsive interfaces, touch and kiosk UX", "INPUT → FLOW → INTERFACE"],
  ["FRONTEND", "React, Next.js, TypeScript, motion and interactive interfaces", "UI → STATE → EXPERIENCE"],
  ["BACKEND", "Node.js, Express, APIs, webhooks, integrations and business rules", "API → LOGIC → SERVICES"],
  ["DATA", "Prisma, SQLite, SQL Server, transactions, migrations and backups", "MODEL → TRANSACTION → STORAGE"],
  ["DESKTOP / DEVICES", "Electron, Windows apps, Android WebView, kiosks and hardware environments", "APP → DEVICE → OPERATOR"],
  ["INTERACTIVE / 3D", "Three.js, realtime rendering, collisions, assets and interactive installations", "SCENE → LOGIC → REALTIME"],
  ["INFRASTRUCTURE", "Linux, VPS, Nginx, PM2, SSL, DNS, Cloudflare and production deployment", "SERVER → NETWORK → PROD"],
];

const systems = [
  {
    id: "SYS_01",
    title: "Corporate Web Platforms",
    desc: "Production websites with SEO, structured data, forms, DNS and deployment.",
    tags: ["Next.js", "TypeScript", "Cloudflare"],
    flow: ["USER", "NEXT.JS", "DNS", "PROD"],
    status: "LIVE",
  },
  {
    id: "SYS_02",
    title: "Transactional Systems",
    desc: "Orders, stock, payments, webhooks, admin workflows and backend services.",
    tags: ["Node.js", "Express", "Prisma"],
    flow: ["UI", "API", "DB", "PAYMENT"],
    status: "DEPLOYED",
  },
  {
    id: "SYS_03",
    title: "Desktop & Kiosk Software",
    desc: "Touch interfaces, offline workflows, Electron apps and dedicated event systems.",
    tags: ["Electron", "Windows", "Offline"],
    flow: ["TOUCH", "APP", "LOCAL DATA", "DEVICE"],
    status: "FIELD READY",
  },
  {
    id: "SYS_04",
    title: "Interactive 3D Experiences",
    desc: "Realtime graphics, gameplay logic, collision systems and branded interactive installations.",
    tags: ["Three.js", "WebGL", "Realtime"],
    flow: ["INPUT", "ENGINE", "3D", "OUTPUT"],
    status: "REALTIME",
  },
];

const stackGroups = [
  { group: "FRONTEND", tech: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  ], skills: ["Responsive UI", "Motion"] },
  { group: "BACKEND", tech: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  ], skills: ["REST APIs", "Webhooks", "Integrations"] },
  { group: "DATA", tech: [
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
    { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
    { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
  ], skills: ["Transactions", "Backups"] },
  { group: "RUNTIME", tech: [
    { name: "Electron", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" },
    { name: "Windows", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg" },
    { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
  ], skills: ["Kiosk Mode", "Offline"] },
  { group: "GRAPHICS", tech: [
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
    { name: "WebGL", icon: `${basePath}/webgl.svg` },
  ], skills: ["Realtime Rendering", "Collision", "3D Assets"] },
  { group: "INFRA", tech: [
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
    { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" },
  ], skills: ["VPS", "PM2", "SSL", "DNS"] },
];

const milestones = [
  ["01", "UNDERSTAND", "Translate the actual business or event problem into technical constraints."],
  ["02", "ARCHITECT", "Choose the simplest structure that can survive real usage and future changes."],
  ["03", "BUILD", "Implement the complete path: interface, logic, data, integrations and device runtime."],
  ["04", "SHIP", "Deploy, configure infrastructure, validate production behavior and remove friction."],
  ["05", "OPERATE", "Support, debug, improve and keep the system usable outside the development machine."],
];

const profileFacts = [
  ["status", "online"],
  ["location", "Buenos Aires, Argentina"],
  ["role", "Software Engineer / Technical Lead"],
  ["focus", "End-to-end software systems"],
  ["github", "github.com/labordetrabajo"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top"><span>root@</span>laborde.dev<span className="brand-dot">.</span></a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">01 ABOUT</a>
          <a href="#scope">02 SCOPE</a>
          <a href="#systems">03 SYSTEMS</a>
          <a href="#experience">04 EXPERIENCE</a>
          <a className="nav-contact" href="#contact">Execute Contact()</a>
        </nav>
      </header>

      <section className="hero section-grid" id="top">
        <div className="hero-glow" />
        <div className="hero-copy" id="about">
          <div className="status-pill"><span className="status-dot" /> SYSTEM.STATUS: ONLINE</div>
          <p className="eyebrow">// SOFTWARE ENGINEER</p>
          <h1>Lucas Laborde</h1>
          <h2>Software Engineer &amp; Systems Builder<span className="blink">_</span></h2>
          <div className="chips">
            <span>[ FULL STACK ]</span><span>[ DESKTOP ]</span><span>[ INFRASTRUCTURE ]</span><span>[ 3D ]</span>
          </div>
          <p className="hero-description"><span>&gt;</span> I build complete software systems, from interface to infrastructure.</p>
          <div className="hero-actions hero-actions-wrap">
            <a className="btn btn-primary" href="#systems">explore_systems()</a>
            <a className="btn" href="https://github.com/labordetrabajo" target="_blank" rel="noreferrer">open_github()</a>
            <a className="btn" href={`${basePath}/Lucas_Laborde_CV_English_2026_v3.pdf`} download>download_resume.pdf</a>
          </div>
        </div>
        <div className="hero-terminal"><Terminal /></div>
      </section>

      <section className="content-section section-grid profile-section" id="profile">
        <div className="section-heading split-heading profile-heading">
          <div>
            <span>01 / IDENTITY</span>
            <h3>THE ENGINEER BEHIND THE SYSTEM.</h3>
          </div>
          <p>A more personal layer inside the same interface: who I am, what I build, and where to find the code and the resume.</p>
        </div>

        <div className="profile-grid">
          <article className="profile-image-card">
            <div className="profile-image-topbar">
              <span>PROFILE_IMG_01</span>
              <span className="pulse-text">● identity verified</span>
            </div>
            <img src={`${basePath}/lucas-laborde-profile.jpg`} alt="Portrait of Lucas Laborde" className="profile-image" />
          </article>

          <article className="experience-panel profile-info-card">
            <div className="panel-label">// PROFILE OVERVIEW</div>
            <h4>Lucas Laborde</h4>
            <p>I design, build, deploy and maintain software systems across web, desktop, interactive and production environments.</p>
            <div className="profile-facts">
              {profileFacts.map(([label, value]) => (
                <div className="profile-fact" key={label}>
                  <span>{label}</span>
                  <b>{value}</b>
                </div>
              ))}
            </div>
            <div className="profile-links">
              <a className="btn btn-primary" href={`${basePath}/Lucas_Laborde_CV_English_2026_v3.pdf`} download>download_resume.pdf</a>
              <a className="btn" href="https://github.com/labordetrabajo" target="_blank" rel="noreferrer">open_github()</a>
            </div>
          </article>
        </div>
      </section>

      <div className="signal-strip" aria-hidden="true">
        <div className="signal-track">
          <span>PRODUCTION SYSTEMS</span><b>●</b><span>FULL-STACK ARCHITECTURE</span><b>●</b><span>DESKTOP RUNTIME</span><b>●</b><span>INFRASTRUCTURE</span><b>●</b><span>REALTIME 3D</span><b>●</b><span>DEPLOYMENT</span><b>●</b>
          <span>PRODUCTION SYSTEMS</span><b>●</b><span>FULL-STACK ARCHITECTURE</span><b>●</b><span>DESKTOP RUNTIME</span><b>●</b><span>INFRASTRUCTURE</span><b>●</b><span>REALTIME 3D</span><b>●</b><span>DEPLOYMENT</span><b>●</b>
        </div>
      </div>

      <section className="content-section section-grid" id="scope">
        <div className="section-heading split-heading">
          <div>
            <span>02 / SCOPE</span>
            <h3>FROM IDEA TO PRODUCTION</h3>
          </div>
          <p>Not just the interface. The complete path that makes software useful in the real world.</p>
        </div>

        <div className="lifecycle-panel">
          {milestones.map(([n, title, text]) => (
            <article className="lifecycle-node" key={title}>
              <span className="life-num">{n}</span>
              <div className="life-dot" />
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
          <div className="lifecycle-line" />
        </div>

        <div className="capability-list">
          {capabilities.map(([title, text, path], index) => (
            <article className="capability-row" key={title}>
              <span className="cap-index">0{index + 1}</span>
              <div><h4>{title}</h4><small>{path}</small></div>
              <p>{text}</p>
              <span className="cap-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-grid stack-section">
        <div className="section-heading split-heading">
          <div>
            <span>03 / TECHNICAL RANGE</span>
            <h3>ONE SYSTEM. MULTIPLE LAYERS.</h3>
          </div>
          <p>I move between product, application logic, data, devices and infrastructure without treating them as isolated worlds.</p>
        </div>

        <div className="stack-console">
          <div className="stack-console-head"><span>laborde://runtime/modules</span><span className="pulse-text">● all modules loaded</span></div>
          <div className="stack-grid">
            {stackGroups.map(({ group, tech, skills }) => (
              <article className="stack-module" key={group}>
                <div className="stack-module-title"><span>&gt;</span>{group}</div>
                <div className="tech-icons">
                  {tech.map(({ name, icon }) => (
                    <div className="tech-icon" key={name} title={name}>
                      <img src={icon} alt="" aria-hidden="true" />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
                <div className="stack-module-items">{skills.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-grid" id="systems">
        <div className="section-heading split-heading">
          <div><span>04 / SYSTEMS</span><h3>SELECTED SYSTEM TYPES</h3></div>
          <p>Different environments, same idea: build something that survives outside the demo.</p>
        </div>

        <div className="system-grid">
          {systems.map((system) => (
            <article className="system-card" key={system.id}>
              <div className="system-card-top"><span>{system.id}</span><span className="system-state">● {system.status}</span></div>
              <div className="mini-architecture">
                {system.flow.map((step, i) => (
                  <div className="arch-step" key={step}><span>{step}</span>{i < system.flow.length - 1 && <b>→</b>}</div>
                ))}
              </div>
              <h4>{system.title}</h4>
              <p>{system.desc}</p>
              <div className="system-tags">{system.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="card-scan" />
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-grid" id="experience">
        <div className="section-heading split-heading">
          <div><span>05 / EXPERIENCE</span><h3>ENGINEERING IN CONTEXT</h3></div>
          <p>The value is not knowing a tool. It is knowing where it belongs, what can fail and how the whole thing reaches production.</p>
        </div>

        <div className="experience-grid">
          <article className="experience-panel experience-large">
            <div className="panel-label">// DELIVERY PIPELINE</div>
            <div className="experience-code"><span>problem</span><b>→</b><span>architecture</span><b>→</b><span>build</span><b>→</b><span>deploy</span><b>→</b><span>production</span></div>
            <p>I work across frontend, backend, data, desktop, interactive systems and infrastructure — choosing the tools around the problem instead of forcing the problem into a stack.</p>
          </article>

          <article className="experience-panel metrics-panel">
            <div className="panel-label">// SYSTEM PROFILE</div>
            <div className="metric"><span>FRONTEND</span><b>APPLICATION LAYER</b></div>
            <div className="metric"><span>BACKEND</span><b>SERVICES + LOGIC</b></div>
            <div className="metric"><span>DATA</span><b>STATE + TRANSACTIONS</b></div>
            <div className="metric"><span>RUNTIME</span><b>WEB + DESKTOP + KIOSK</b></div>
            <div className="metric"><span>INFRA</span><b>DEPLOYMENT + OPERATIONS</b></div>
          </article>
        </div>

        <div className="principles-grid">
          <article><span>01</span><h4>REAL CONSTRAINTS</h4><p>Networks fail, users make mistakes and hardware behaves differently in the field.</p></article>
          <article><span>02</span><h4>TECH WITH A REASON</h4><p>Use the stack that fits the problem instead of adding complexity for appearance.</p></article>
          <article><span>03</span><h4>SHIP THE WHOLE THING</h4><p>A feature is not finished until the complete system is usable where it actually runs.</p></article>
        </div>
      </section>

      <section className="contact-section section-grid" id="contact">
        <div>
          <span className="section-kicker">06 / CONTACT</span>
          <h3>LET&apos;S BUILD SOMETHING REAL.</h3>
          <p>Send a message directly from the site. The form is connected through Formspree and delivers straight to my inbox.</p>
          <div className="contact-meta">
            <div><span>&gt;</span> contact_email: lucaslaborde.trabajo@gmail.com</div>
            <div><span>&gt;</span> github: github.com/labordetrabajo</div>
            <div><span>&gt;</span> resume: available for download</div>
          </div>
        </div>
        <div className="contact-layout">
          <ContactForm />
          <div className="contact-box">
            <div><span>&gt;</span> status: available</div>
            <div><span>&gt;</span> location: Argentina</div>
            <div><span>&gt;</span> response_mode: direct</div>
            <div><span>&gt;</span> preferred_context: real projects</div>
            <div className="contact-box-links">
              <a href={`${basePath}/Lucas_Laborde_CV_English_2026_v3.pdf`} download>download_resume.pdf</a>
              <a href="https://github.com/labordetrabajo" target="_blank" rel="noreferrer">open_github()</a>
            </div>
          </div>
        </div>
      </section>

      <footer><span>LABORDE // SYSTEM</span><span>v1.3.0</span></footer>
    </main>
  );
}
