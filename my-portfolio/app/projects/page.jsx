'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import ProjectModal from '@/components/ProjectModal'

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with payment integration',
            icon: 'fa-shopping-cart',
            gradient: 'from-blue-400 to-purple-500',
            tags: ['React', 'Node.js', 'MongoDB'],
            details: 'A comprehensive e-commerce platform with user authentication, product management, shopping cart, and secure payment integration using Stripe.'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative project management with real-time updates',
            icon: 'fa-tasks',
            gradient: 'from-green-400 to-blue-500',
            tags: ['Vue.js', 'Firebase', 'Tailwind'],
            details: 'Real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and cloud synchronization.'
        },
        {
            title: 'Weather Dashboard',
            description: 'Beautiful weather app with location-based forecasts',
            icon: 'fa-cloud-sun',
            gradient: 'from-yellow-400 to-orange-500',
            tags: ['React', 'API', 'Charts.js'],
            details: 'Interactive weather dashboard featuring location-based forecasts, historical data visualization, and severe weather alerts.'
        }
    ]

    return (
        <>
            <Navigation />
            <main className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="card-3d bg-white dark:bg-gray-800 rounded-2xl overflow-hidden cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                    <i className={`fas ${project.icon} text-white text-4xl`}></i>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="skill-tag px-3 py-1 rounded-full text-xs">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </>
    )
}
