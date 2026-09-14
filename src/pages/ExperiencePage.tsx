type Job = {
  title: string
  company: string
  dates: string
  bullets: string[]
}

const jobs: Job[] = [
  {
    title: 'AI Engineer / Full Stack Developer',
    company: 'Confidential Client, UK',
    dates: 'June 2026 – August 2026',
    bullets: [
      'Architected a multi-agent orchestration engine from scratch as one of two engineers, designing 5 specialised agents that pass structured output between stages via a shared context store.',
      'Built a provider-agnostic adapter integrating Claude and OpenAI APIs, with real-time streaming (SSE), tool-calling, and a PostgreSQL schema persisting agent state and token usage.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'HDFC Ergo General Insurance Company Ltd., Mumbai',
    dates: 'May 2024 – January 2025',
    bullets: [
      'Designed and implemented a GenAI-powered backend using Python and FastAPI, integrating LLM APIs into a production employee chatbot.',
      'Designed and developed a customer-facing insurance purchase platform using React.js, Next.js and Node.js.',
      'Built interactive dashboards using React.js and Node.js for IT administrators and insurance providers.',
      'Implemented Redis-based session management for login, improving authentication performance and reliability.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Reliance Nippon Life Insurance, Mumbai',
    dates: 'January 2023 – April 2024',
    bullets: [
      'Conceived, designed and built a QR-based attendance and fraud-prevention system entirely on my own, front end and back end, including login logic distinguishing internal hierarchy staff from external advisors, combined with geo-location checks.',
      'Developed backend services for the SA3 application using Node.js and MongoDB in a microservice-based architecture.',
      'Wrote optimised SQL queries, improving data-fetch performance by 20 seconds.',
    ],
  },
  {
    title: 'Engineer',
    company: 'Larsen & Toubro Infotech, Mumbai, India',
    dates: 'October 2020 – October 2022',
    bullets: [
      'Supported enterprise clients by creating and managing servers, checking logs and reviewing system health on cloud infrastructure, resolving incidents to ensure high availability.',
    ],
  },
]

function ExperiencePage() {
  return (
    <section className="detail-panel" aria-labelledby="experience-title">
      <p className="hero-eyebrow">The journey so far</p>
      <h1 id="experience-title" className="panel-title">Experience<span>.</span></h1>
      <p className="panel-intro">Building thoughtful software, from enterprise platforms to intelligent AI systems.</p>
      <div className="detail-stack timeline">
        {jobs.map((job) => (
          <article key={job.title + job.company} className="detail-card">
            <p className="card-date">{job.dates}</p>
            <h2>{job.title}</h2>
            <p className="card-company">{job.company}</p>
            <ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperiencePage
