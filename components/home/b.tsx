"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} aria-label="Open menu" className="text-gray-700">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
                    <div className="flex justify-between items-center p-4 border-b border-gray-200">
                        <Link href="/" className="text-red-600 font-serif font-bold text-3xl" onClick={() => setIsOpen(false)}>
                            fs
                        </Link>
                        <div className="flex items-center gap-4">
                            <button aria-label="Search" className="text-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                            <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-gray-700">
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    <nav className="p-4 flex flex-col space-y-6">
                        <Link href="#" className="text-lg font-medium text-gray-900" onClick={() => setIsOpen(false)}>
                            Newsletter
                        </Link>
                        <Link href="#" className="text-lg font-medium text-gray-900" onClick={() => setIsOpen(false)}>
                            Books
                        </Link>
                        <Link href="#" className="text-lg font-medium text-gray-900" onClick={() => setIsOpen(false)}>
                            Podcast
                        </Link>
                        <Link href="#" className="text-lg font-medium text-gray-900" onClick={() => setIsOpen(false)}>
                            Articles
                        </Link>

                        <div className="pt-4">
                            <Link
                                href="#"
                                className="inline-block bg-gray-100 px-6 py-3 text-gray-900 font-medium rounded"
                                onClick={() => setIsOpen(false)}
                            >
                                Log In
                            </Link>
                        </div>

                        <div className="pt-2">
                            <Link
                                href="#"
                                className="inline-block bg-red-600 text-white px-6 py-3 font-medium rounded"
                                onClick={() => setIsOpen(false)}
                            >
                                Become a Member
                            </Link>
                        </div>

                        <div className="pt-6 text-gray-700 leading-relaxed">
                            <p className="mb-4">
                                Our timeless insights for a complex Tuesday. Sunday understanding by 300,000+ independent thinkers.
                            </p>

                            <p className="mb-4">
                                <span className="font-semibold">Bonus:</span> Download Chapter 1 of my instant{" "}
                                <span className="italic">New York Times</span> best-selling book,{" "}
                                <span className="italic">Clear Thinking: Turning Ordinary Moments into Extraordinary Results</span>
                            </p>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    )
}
