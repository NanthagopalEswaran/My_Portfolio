'use client'

import { useEffect, useRef } from 'react'
import Navigation from '@/components/Navigation'

/* ===== Data from portfolio_data.md ===== */
const personalInfo = {
    name: 'Nanthagopal',
    headline: 'Gen AI Developer',
    role: 'Tech Lead',
    company: 'Soliton Technologies Pvt Ltd',
    bio: 'Gen AI Developer passionate about creating useful and intelligent systems. I specialize in Python, Gen AI and LabVIEW.',
}

const skills = [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Gen AI', icon: 'fas fa-brain' },
    { name: 'LabVIEW', icon: 'fas fa-microchip' },
]

const projects = [
    {
        title: 'QA Generator',
        description: 'A free and open-source AI tool that transforms your documents into quizzes in a matter of minutes. From simple quizzes to full-blown mock exam papers.',
        url: 'https://huggingface.co/spaces/NandyG/QA_Generator',
        icon: 'fas fa-file-alt',
        badge: 'AI Tool',
    },
    {
        title: 'Chat Bot',
        description: 'A chatbot built using Chainlit, a Python library for quickly building chat applications. Chainlit provides a wide range of features for interactive and engaging chatbots.',
        url: 'https://huggingface.co/spaces/NandyG/SimpleChatbot',
        icon: 'fas fa-robot',
        badge: 'Chatbot',
    },
]

const blogs = [
    {
        title: 'Effective Use of GenAI in Applications',
        date: 'Feb 23, 2025',
        description: 'GenAI isn\'t here to replace traditional software entirely. Instead, it enhances existing software, adding a layer of intelligence that transforms it into something smarter and more capable.',
        url: 'https://medium.com/@nanthagopaleswaran/developer-insights-effective-use-of-genai-in-applications-59f80c554861',
    },
    {
        title: 'Exploring Different Types of Generative AI Applications',
        date: 'Feb 23, 2025',
        description: 'Let\'s dive into the various types of GenAI applications.',
        url: 'https://medium.com/@nanthagopaleswaran/exploring-different-types-of-generative-ai-applications-1b9f5c8e8950',
    },
]

const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/nanthagopal-e-3abb34a6/' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/NanthagopalEswaran' },
    { name: 'Hugging Face', icon: 'fas fa-face-smile', url: 'https://huggingface.co/NandyG' },
    { name: 'Medium', icon: 'fab fa-medium', url: 'https://medium.com/@nanthagopaleswaran' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:nanthagopaleswaran@gmail.com' },
]

/* ===== Intersection Observer Hook for scroll animations ===== */
function useReveal() {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-up')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return ref
}

/* ===== Component: AnimatedSection ===== */
function AnimatedSection({ children, className = '', id, style }) {
    const ref = useReveal()
    return (
        <section
            ref={ref}
            id={id}
            className={className}
            style={{ opacity: 0, ...style }}
        >
            {children}
        </section>
    )
}

/* ===== HERO ===== */
function HeroSection() {
    return (
        <section id="hero" className="relative" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="section-container" style={{ paddingTop: '120px', paddingBottom: '80px', width: '100%' }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <p
                            className="animate-fade-up"
                            style={{
                                color: 'var(--primary-light)',
                                fontWeight: 500,
                                fontSize: '1rem',
                                marginBottom: '12px',
                                letterSpacing: '0.05em',
                            }}
                        >
                            <i className="fas fa-terminal" style={{ marginRight: '8px', fontSize: '0.85rem' }} />
                            Hello, I&apos;m
                        </p>

                        <h1
                            className="animate-fade-up delay-100"
                            style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                marginBottom: '16px',
                            }}
                        >
                            <span className="hero-title-gradient">{personalInfo.name}</span>
                        </h1>

                        <h2
                            className="animate-fade-up delay-200"
                            style={{
                                fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
                                fontWeight: 300,
                                color: 'var(--text-secondary)',
                                marginBottom: '24px',
                            }}
                        >
                            {personalInfo.headline}{' '}
                            <span style={{ color: 'var(--text-muted)' }}>·</span>{' '}
                            <span style={{ color: 'var(--accent)' }}>{personalInfo.role}</span>
                        </h2>

                        <p
                            className="animate-fade-up delay-300"
                            style={{
                                color: 'var(--text-muted)',
                                fontSize: '1.05rem',
                                lineHeight: 1.7,
                                maxWidth: '520px',
                                marginBottom: '32px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}
                        >
                            {personalInfo.bio}{' '}
                            <span style={{ color: 'var(--text-secondary)' }}>
                                Currently @ <strong style={{ color: 'var(--primary-light)' }}>{personalInfo.company}</strong>
                            </span>
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up delay-400">
                            <a href="#projects" className="btn-primary"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                <i className="fas fa-rocket" />
                                View My Work
                            </a>
                            <a href="#contact" className="btn-outline"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                <i className="fas fa-paper-plane" />
                                Get in Touch
                            </a>
                        </div>
                    </div>

                    {/* Avatar */}
                    <div className="order-1 lg:order-2 flex justify-center animate-fade-in delay-200">
                        <div className="avatar-ring" style={{ width: 'clamp(240px, 30vw, 320px)', height: 'clamp(240px, 30vw, 320px)' }}>
                            <div className="avatar-inner" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    src="My_Portfolio/my_avatar.svg"
                                    alt="Nanthagopal's avatar"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="animate-fade-in delay-800 hidden lg:flex justify-center" style={{ marginTop: '60px' }}>
                    <a
                        href="#skills"
                        onClick={(e) => {
                            e.preventDefault()
                            document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'var(--text-muted)',
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                            animation: 'float-slow 3s ease-in-out infinite alternate',
                        }}
                    >
                        Scroll
                        <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }} />
                    </a>
                </div>
            </div>
        </section>
    )
}

/* ===== SKILLS ===== */
function SkillsSection() {
    return (
        <AnimatedSection id="skills">
            <div className="section-container">
                <div className="text-center" style={{ marginBottom: '48px' }}>
                    <h2 className="section-title">
                        Tech <span className="section-title-accent">Stack</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '8px auto 0' }}>
                        Technologies I work with daily
                    </p>
                    <div className="section-divider" style={{ margin: '16px auto 0' }} />
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, i) => (
                        <div key={skill.name} className={`skill-chip delay-${(i + 1) * 100}`}>
                            <i className={skill.icon} style={{ color: 'var(--primary-light)', fontSize: '1.1rem' }} />
                            {skill.name}
                        </div>
                    ))}
                </div>

                {/* Decorative stats strip */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                    style={{ marginTop: '64px' }}
                >
                    {[
                        { label: 'Specialization', value: 'Gen AI', icon: 'fas fa-sparkles' },
                        { label: 'Current Role', value: 'Tech Lead', icon: 'fas fa-briefcase' },
                        { label: 'Projects', value: '2+ Apps', icon: 'fas fa-layer-group' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="glass-card"
                            style={{
                                padding: '28px 24px',
                                textAlign: 'center',
                            }}
                        >
                            <i
                                className={stat.icon}
                                style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '12px',
                                    display: 'block',
                                    background: 'var(--gradient-primary)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            />
                            <div
                                style={{
                                    fontSize: '1.35rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    marginBottom: '4px',
                                }}
                            >
                                {stat.value}
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    )
}

/* ===== PROJECTS ===== */
function ProjectsSection() {
    return (
        <AnimatedSection id="projects">
            <div className="section-container">
                <div style={{ marginBottom: '48px' }}>
                    <h2 className="section-title">
                        Featured <span className="section-title-accent">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        AI-powered applications I&apos;ve built
                    </p>
                    <div className="section-divider" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <a
                            key={project.title}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card group"
                            style={{
                                padding: '32px',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                            }}
                        >
                            <div className="flex items-start justify-between">
                                <div
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: 'var(--radius-md)',
                                        background: 'var(--gradient-card)',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.25rem',
                                    }}
                                >
                                    <i
                                        className={project.icon}
                                        style={{
                                            background: 'var(--gradient-primary)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    />
                                </div>
                                <span className="project-badge">
                                    <i className="fas fa-circle" style={{ fontSize: '5px' }} />
                                    {project.badge}
                                </span>
                            </div>

                            <div>
                                <h3
                                    style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)',
                                        marginBottom: '8px',
                                    }}
                                >
                                    {project.title}
                                    <i
                                        className="fas fa-arrow-up-right-from-square"
                                        style={{
                                            fontSize: '0.75rem',
                                            marginLeft: '8px',
                                            color: 'var(--text-muted)',
                                            transition: 'all 0.3s',
                                        }}
                                    />
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.95rem',
                                        color: 'var(--text-muted)',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {project.description}
                                </p>
                            </div>

                            <div
                                style={{
                                    marginTop: 'auto',
                                    paddingTop: '16px',
                                    borderTop: '1px solid var(--border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '0.85rem',
                                    color: 'var(--primary-light)',
                                    fontWeight: 500,
                                }}
                            >
                                <i className="fas fa-external-link-alt" style={{ fontSize: '0.7rem' }} />
                                Try it live on Hugging Face
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    )
}

/* ===== BLOG ===== */
function BlogSection() {
    return (
        <AnimatedSection id="blog">
            <div className="section-container">
                <div style={{ marginBottom: '48px' }}>
                    <h2 className="section-title">
                        Latest <span className="section-title-accent">Articles</span>
                    </h2>
                    <p className="section-subtitle">
                        Thoughts on AI, development, and more
                    </p>
                    <div className="section-divider" />
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {blogs.map((blog) => (
                        <a
                            key={blog.title}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card"
                            style={{
                                padding: '28px 32px',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                            }}
                        >
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="date-tag">
                                    <i className="far fa-calendar" />
                                    {blog.date}
                                </span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                    <i className="fab fa-medium" style={{ marginRight: '4px' }} />
                                    Medium
                                </span>
                            </div>

                            <h3
                                style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                    lineHeight: 1.4,
                                }}
                            >
                                {blog.title}
                                <i
                                    className="fas fa-arrow-right"
                                    style={{
                                        fontSize: '0.75rem',
                                        marginLeft: '10px',
                                        color: 'var(--primary-light)',
                                        transition: 'transform 0.3s',
                                    }}
                                />
                            </h3>

                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.6,
                                }}
                            >
                                {blog.description}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    )
}

/* ===== CONTACT ===== */
function ContactSection() {
    return (
        <AnimatedSection id="contact">
            <div className="section-container">
                <div className="text-center" style={{ marginBottom: '48px' }}>
                    <h2 className="section-title">
                        Get in <span className="section-title-accent">Touch</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '8px auto 0' }}>
                        Feel free to reach out — always happy to connect!
                    </p>
                    <div className="section-divider" style={{ margin: '16px auto 0' }} />
                </div>

                {/* Big contact card */}
                <div
                    className="glass-card"
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        padding: '48px 40px',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--gradient-card)',
                            border: '1px solid var(--border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 24px',
                        }}
                    >
                        <i
                            className="fas fa-envelope"
                            style={{
                                fontSize: '1.5rem',
                                background: 'var(--gradient-primary)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        />
                    </div>

                    <h3
                        style={{
                            fontSize: '1.4rem',
                            fontWeight: 600,
                            marginBottom: '8px',
                            color: 'var(--text-primary)',
                        }}
                    >
                        Let&apos;s Collaborate
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '28px', lineHeight: 1.6 }}>
                        I&apos;m open to discussing AI projects, tech consulting, or just a friendly conversation about Gen AI.
                    </p>

                    <a
                        href="mailto:nanthagopaleswaran@gmail.com"
                        className="btn-primary"
                        style={{ marginBottom: '32px' }}
                    >
                        <i className="fas fa-paper-plane" />
                        nanthagopaleswaran@gmail.com
                    </a>

                    <div
                        style={{
                            borderTop: '1px solid var(--border)',
                            paddingTop: '28px',
                            marginTop: '4px',
                        }}
                    >
                        <p
                            style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.85rem',
                                marginBottom: '16px',
                            }}
                        >
                            Or find me on
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    title={link.name}
                                    aria-label={link.name}
                                >
                                    <i className={link.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    )
}

/* ===== FOOTER ===== */
function Footer() {
    return (
        <footer className="footer-gradient" style={{ padding: '40px 24px', textAlign: 'center' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div
                    style={{
                        borderTop: '1px solid var(--border)',
                        paddingTop: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                    }}
                >
                    <span
                        style={{
                            fontWeight: 700,
                            fontSize: '1.25rem',
                            background: 'var(--gradient-primary)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        N.
                    </span>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        &copy; {new Date().getFullYear()} Nanthagopal. Built with Next.js.
                    </p>
                </div>
            </div>
        </footer>
    )
}

/* ===== MAIN PAGE ===== */
export default function Home() {
    return (
        <>
            <Navigation />
            <main style={{ position: 'relative', zIndex: 1 }}>
                <HeroSection />
                <SkillsSection />
                <ProjectsSection />
                <BlogSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
