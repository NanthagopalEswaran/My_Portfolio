'use client'

import Navigation from '@/components/Navigation'

export default function Blogs() {
    const blogs = [
        {
            title: 'Effective Use of GenAI in Applications',
            date: 'Feb 23, 2025',
            description: "GenAI isn’t here to replace traditional software entirely. Instead, it enhances existing software, adding a layer of intelligence that transforms it into something smarter and more capable. The key is knowing when to use GenAI and when to stick with traditional software. In this post, we’ll explore the strengths and weaknesses of both approaches and provide practical tips for integrating GenAI into your applications effectively.",
            icon: null,
            img: "medium.svg",
            gradient: 'from-blue-400 to-purple-500',
            url: "https://medium.com/@nanthagopaleswaran/developer-insights-effective-use-of-genai-in-applications-59f80c554861"
        },
        {
            title: 'Exploring Different Types of Generative AI Applications',
            date: 'Feb 23, 2025',
            description: 'Let’s dive into the various types of GenAI applications.',
            icon: null,
            img: "medium.svg",
            gradient: 'from-blue-400 to-purple-500',
            url: 'https://medium.com/@nanthagopaleswaran/exploring-different-types-of-generative-ai-applications-1b9f5c8e8950'
        }
    ]

    return (
        <>
            <Navigation />
            <main className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">My Blogs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogs.map((blog, index) => (
                            <article
                                key={index}
                                className="card-3d bg-white dark:bg-gray-800 rounded-2xl p-6 cursor-pointer"
                                onClick={() => window.open(blog.url, '_blank')}
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${blog.gradient} rounded-lg flex items-center justify-center mr-4`}>
                                        {blog.icon ? (
                                        <i className={`${blog.icon} text-white text-xl`}></i>
                                    ) : blog.img ? (
                                        <img src={blog.img} alt="icon" />
                                    ) : null}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{blog.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">{blog.date}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.description}</p>
                                <div className="flex items-center text-blue-600 dark:text-blue-400">
                                    <span className="text-sm font-medium">Read More</span>
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}
