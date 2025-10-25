import Navigation from '@/components/Navigation'

export default function Contact() {
    const socialLinks = [
        { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/johndoe', color: 'from-blue-500 to-blue-700', name: 'LinkedIn' },
        { icon: 'fab fa-github', url: 'https://github.com/johndoe', color: 'from-gray-700 to-gray-900', name: 'GitHub' },
        { icon: 'fab fa-twitter', url: 'https://twitter.com/johndoe', color: 'from-blue-400 to-blue-600', name: 'Twitter' },
        { icon: 'fas fa-envelope', url: 'mailto:john@example.com', color: 'from-red-500 to-red-700', name: 'Email' }
    ]

    return (
        <>
            <Navigation />
            <main className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Get In Touch</h2>
                    <div className="text-center mb-12">
                        <p className="text-xl text-gray-600 dark:text-gray-300">Let&apos;s connect and discuss opportunities!</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-3d bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-full flex items-center justify-center mb-4`}>
                                    <i className={`${link.icon} text-white text-2xl`}></i>
                                </div>
                                <span className="text-gray-900 dark:text-white font-medium">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}
