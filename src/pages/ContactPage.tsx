import { ArrowUpRight, CodeXml, Users, Mail, Phone } from 'lucide-react'

const contacts = [
  { label: 'Email', value: 'akshatasingh444@gmail.com', href: 'mailto:akshatasingh444@gmail.com', icon: Mail },
  { label: 'Phone', value: '+44 7747 231464', href: 'tel:+447747231464', icon: Phone },
  { label: 'LinkedIn', value: 'Let’s connect', href: 'https://www.linkedin.com/in/akshata-singh-89b83b194/', icon: Users },
  { label: 'GitHub', value: 'Explore my code', href: 'https://github.com/AkshataSingh', icon: CodeXml },
]

function ContactPage() {
  return (
    <section className="detail-panel contact-panel" aria-labelledby="contact-title">
      <p className="hero-eyebrow">Start a conversation</p>
      <h1 id="contact-title" className="panel-title">Let’s build<br /><span>something great.</span></h1>
      <p className="panel-intro">Have a project in mind, an opportunity to share, or a question? I’d love to hear from you.</p>
      <div className="contact-grid">
        {contacts.map(({ label, value, href, icon: Icon }) => (
          <a key={label} className="detail-card contact-card" href={href} target={href.startsWith('https:') ? '_blank' : undefined} rel={href.startsWith('https:') ? 'noreferrer' : undefined}>
            <span className="hero-stat-icon"><Icon size={23} aria-hidden="true" /></span>
            <div><span className="card-date">{label}</span><span className="contact-value">{value}</span></div>
            <ArrowUpRight className="contact-arrow" size={19} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  )
}

export default ContactPage
