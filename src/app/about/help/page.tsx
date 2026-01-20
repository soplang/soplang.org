import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function HelpPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom py-10 md:py-20">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-sm font-medium mb-6 animate-fade-in-up">
                        <Icon icon="lucide:life-buoy" className="w-4 h-4" />
                        <span>Help Center</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-100">
                        How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">help you?</span>
                    </h1>
                    <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200">
                        Find documentation, tutorials, and support for your Soplang journey.
                    </p>
                </div>

                {/* Quick Links Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 animate-fade-in-up animation-delay-300">
                    <Link href="/docs" className="group">
                        <div className="bg-card/50 backdrop-blur-sm border border-border hover:border-blue-500/50 p-8 rounded-3xl h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Icon icon="lucide:book-open" className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">Documentation</h3>
                            <p className="text-muted-foreground mb-4">
                                Comprehensive guides, API references, and language syntax documentation.
                            </p>
                            <div className="flex items-center text-sm font-medium text-blue-500">
                                <span>Read Docs</span>
                                <Icon icon="lucide:arrow-right" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </Link>

                    <Link href="/tutorials" className="group">
                        <div className="bg-card/50 backdrop-blur-sm border border-border hover:border-purple-500/50 p-8 rounded-3xl h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Icon icon="lucide:graduation-cap" className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors">Tutorials</h3>
                            <p className="text-muted-foreground mb-4">
                                Step-by-step guides to build your first applications with Soplang.
                            </p>
                            <div className="flex items-center text-sm font-medium text-purple-500">
                                <span>Start Learning</span>
                                <Icon icon="lucide:arrow-right" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </Link>

                    <Link href="/faq" className="group">
                        <div className="bg-card/50 backdrop-blur-sm border border-border hover:border-amber-500/50 p-8 rounded-3xl h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Icon icon="lucide:help-circle" className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors">FAQ</h3>
                            <p className="text-muted-foreground mb-4">
                                Answers to frequently asked questions about installation, features, and more.
                            </p>
                            <div className="flex items-center text-sm font-medium text-amber-500">
                                <span>View FAQ</span>
                                <Icon icon="lucide:arrow-right" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Additional Support Section */}
                <div className="relative rounded-3xl overflow-hidden animate-fade-in-up animation-delay-400">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-card dark:to-background border border-border/50" />

                    <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-white dark:text-foreground mb-4">Still need help?</h2>
                            <p className="text-gray-300 dark:text-muted-foreground max-w-xl text-lg">
                                Join our community on Discord or create an issue on GitHub. We are here to help you build amazing things.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://discord.gg/soplang"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-semibold transition-colors"
                            >
                                <Icon icon="logos:discord-icon" className="w-5 h-5 brightness-0 invert" />
                                <span>Join Discord</span>
                            </a>
                            <a
                                href="https://github.com/soplang/soplang"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white dark:bg-card dark:hover:bg-accent dark:text-foreground border border-gray-700 dark:border-border rounded-xl font-semibold transition-colors"
                            >
                                <Icon icon="logos:github-icon" className="w-5 h-5 brightness-0 invert dark:invert-1" />
                                <span>GitHub Issues</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
