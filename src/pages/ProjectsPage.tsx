type Project = {
  title: string
  dates: string
  bullets: string[]
  comingSoon?: boolean
}

const projects: Project[] = [
  {
  title: 'Model Compression for Medical Image Classification',
  dates: 'MSc Dissertation, June 2025 – September 2025',
  bullets: [
    'Used Python and PyTorch on MedMNIST across 4 medical imaging datasets, including PathMNIST (histopathology), BreastMNIST (ultrasound) and BloodMNIST (blood cell microscopy), applying structured and unstructured pruning to CNN and ViT architectures.',
    'Reduced model size to 8 MB while maintaining approximately 92 percent accuracy, enabling efficient deployment of diagnostic imaging models in resource-constrained clinical settings.',
  ],
},
  {
    title: 'Real-Time Optimized Virtual Character Engine',
    dates: 'In progress, 2026',
    bullets: [
      'Extending the model compression research above into a live inference engine: an optimized small LLM and TTS pipeline for real-time, on-device virtual characters.',
      'Quantized an LLM to GGUF format (~5.5x faster per-token generation) and used data-driven layer pruning plus knowledge distillation to safely push compression further, recovering full output quality in a model pruned past its normal safe limit.',
      'Implemented speculative decoding from scratch, validated exactly against the reference model’s own output, reaching a 56% draft-token acceptance rate.',
      'Built a simplified block-based memory manager inspired by vLLM’s PagedAttention, demonstrating over 96% memory savings versus naive allocation.',
    ],
  },
]

function ProjectsPage() {
  return (
    <section className="detail-panel" aria-labelledby="projects-title">
      <p className="hero-eyebrow">Ideas into impact</p>
      <h1 id="projects-title" className="panel-title">Selected projects<span>.</span></h1>
      <p className="panel-intro">Exploring what’s possible with efficient models, practical research, and real-time AI.</p>
      <div className="detail-stack">
        {projects.map((project, index) => (
          <article key={project.title} className="detail-card project-card">
            <span className="project-number" aria-hidden="true">0{index + 1}</span>
            <p className="card-date">{project.dates}</p>
            <h2>{project.title}</h2>
            <ul>{project.bullets.map(b => <li key={b}>{b}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
