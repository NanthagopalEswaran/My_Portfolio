import Navigation from '@/components/Navigation'

export default function Apps() {
    const apps = [
        {
            title: 'Advanced Calculator',
            description: 'Scientific calculator with history and themes',
            icon: 'fa-calculator',
            gradient: 'from-indigo-400 to-purple-500',
            url: 'https://example.com/calculator'
        },
        {
            title: 'Notes App',
            description: 'Clean note-taking app with markdown support',
            icon: 'fa-sticky-note',
            gradient: 'from-pink-400 to-red-500',
            url: 'https://example.com/notes'
        },
        {
            title: 'Pomodoro Timer',
            description: 'Productivity timer with custom intervals',
            icon: 'fa-stopwatch',
            gradient: 'from-teal-400 to-green-500',
            url: 'https://example.com/timer'
        }
    ]

    return (
        <>
            <Navigation />
            <main className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">My Apps</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {apps.map((app, index) => (
                            <div
                                key={index}
                                className="card-3d bg-white dark:bg-gray-800 rounded-2xl overflow-hidden cursor-pointer"
                                onClick={() => window.open(app.url, '_blank')}
                            >
                                <div className={`h-48 bg-gradient-to-br ${app.gradient} flex items-center justify-center`}>
                                    <i className={`fas ${app.icon} text-white text-4xl`}></i>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{app.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{app.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}
