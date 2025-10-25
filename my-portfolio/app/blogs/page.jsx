import Navigation from '@/components/Navigation'

export default function Blogs() {
    const blogs = [
        {
            title: 'Mastering React Hooks',
            date: 'March 15, 2024',
            description: 'A comprehensive guide to React Hooks and how to use them effectively in your applications.',
            icon: 'fab fa-react',
            gradient: 'from-blue-400 to-purple-500',
            url: 'https://example.com/blog/react-hooks'
        },
        {
            title: 'Next.js Performance Tips',
            date: 'March 10, 2024',
            description: 'Optimize your Next.js applications for better performance and user experience.',
            icon: 'fas fa-rocket',
            gradient: 'from-green-400 to-blue-500',
            url: 'https://example.com/blog/nextjs-performance'
        },
        {
            title: 'CSS Grid Mastery',
            date: 'March 5, 2024',
            description: 'Learn advanced CSS Grid techniques to create complex layouts with ease.',
            icon: 'fab fa-css3-alt',
            gradient: 'from-purple-400 to-pink-500',
            url: 'https://example.com/blog/css-grid'
        },
        {
            title: 'Modern JavaScript Features',
            date: 'February 28, 2024',
            description: 'Explore the latest JavaScript features and how to use them in your projects.',
            icon: 'fab fa-js-square',
            gradient: 'from-yellow-400 to-orange-500',
            url: 'https://example.com/blog/javascript-es6'
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
                                        <i className={`${blog.icon} text-white text-xl`}></i>
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
