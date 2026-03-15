'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            // Determine active section
            const sections = ['hero', 'skills', 'projects', 'blog', 'contact']
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 120) {
                        setActiveSection(sections[i])
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileOpen(false)
    }

    return (
        <nav
            className={`nav-glass fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'
                }`}
            id="main-nav"
        >
            <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, '#hero')}
                    className="text-xl font-bold"
                    style={{
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    N.
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className={`nav-link text-sm ${activeSection === item.href.slice(1) ? 'active' : ''
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="https://github.com/NanthagopalEswaran"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-sm"
                        style={{ padding: '8px 20px' }}
                    >
                        <i className="fab fa-github" />
                        GitHub
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className={`md:hidden flex flex-col gap-1.5 p-2 ${mobileOpen ? 'hamburger-open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    id="mobile-menu-btn"
                >
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div
                    className="md:hidden animate-fade-up"
                    style={{
                        background: 'var(--bg-secondary)',
                        borderTop: '1px solid var(--border)',
                        padding: '16px 24px',
                    }}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="block py-3 text-sm font-medium"
                            style={{
                                color: activeSection === item.href.slice(1) ? 'var(--text-primary)' : 'var(--text-secondary)',
                                borderBottom: '1px solid var(--border)',
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}
