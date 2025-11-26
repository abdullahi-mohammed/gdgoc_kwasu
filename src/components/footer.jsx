import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-6 px-4 text-center border-t border-gray-200">
            <div className="mb-3">
                <p className="text-sm font-medium">
                    By the Technical Team —
                    <span className="font-bold ml-1">
                        <span className="text-blue-600">G</span>
                        <span className="text-red-600">D</span>
                        <span className="text-yellow-500">G</span>
                        <span className="text-green-600"> KWASU</span>
                    </span>
                </p>
                <p className="text-xs mt-1 text-gray-500">
                    © 2025 GDG on Campus KWASU. All rights reserved.
                </p>
            </div>
            <div className="flex justify-center space-x-6 mt-4 text-sm font-medium">
                <a
                    href="https://x.com/gdgoc_kwasu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    Twitter
                </a>
                <a
                    href="https://github.com/abdullahi-mohammed/gdgoc_kwasu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:underline"
                >
                    GitHub
                </a>
                <a
                    href="mailto:abdullahimohammed3108@gmail.com"
                    className="text-green-600 hover:underline"
                >
                    Contact Us
                </a>
            </div>
        </footer>


    )
}

export default Footer