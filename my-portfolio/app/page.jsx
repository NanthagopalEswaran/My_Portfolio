import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Home() {
    return (
        <>
            <Navigation />
            <main className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                        {/* Avatar Section */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative">
                                <div className="w-80 h-80 rounded-full gradient-bg p-2">
                                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                                        <svg className="w-64 h-64 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 gradient-bg rounded-full flex items-center justify-center">
                                    <i className="fas fa-code text-white text-2xl"></i>
                                </div>
                            </div>
                        </div>

                        {/* Intro Section */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                                Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">John Doe</span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional web experiences.
                                I specialize in React, Next.js, and modern web technologies to bring ideas to life.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                                <span className="skill-tag px-4 py-2 rounded-full text-sm font-medium">React</span>
                                <span className="skill-tag px-4 py-2 rounded-full text-sm font-medium">Next.js</span>
                                <span className="skill-tag px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
                                <span className="skill-tag px-4 py-2 rounded-full text-sm font-medium">Tailwind CSS</span>
                            </div>
                        </div>
                    </div>

                    {/* Explore Button */}
                    <div className="text-center mt-16">
                        <Link
                            href="/projects"
                            className="inline-block card-3d bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                        >
                            <i className="fas fa-rocket mr-2"></i>
                            Explore My Works
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
