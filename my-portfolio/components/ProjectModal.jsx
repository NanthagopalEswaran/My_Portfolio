'use client'

export default function ProjectModal({ project, onClose }) {
    return (
        <div
            className="fixed inset-0 modal-backdrop z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-8 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                    <i className="fas fa-times text-2xl"></i>
                </button>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.details}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="skill-tag px-4 py-2 rounded-full text-sm font-medium">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
