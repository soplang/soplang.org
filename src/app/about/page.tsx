import React from "react";
import { Icon } from "@iconify/react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="container-custom py-10 md:py-22">
                {/* Dynamic Header / Hero */}
                <div className="text-center max-w-4xl mx-auto mb-20 relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-sm font-medium mb-6 animate-fade-in-up">
                        <Icon icon="lucide:sparkles" className="w-4 h-4" />
                        <span>The Story of Soplang</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight animate-fade-in-up animation-delay-100 leading-tight">
                        Empowering Somalia with <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            Native Technology
                        </span>
                    </h1>

                    <div className="relative inline-block">
                        <Icon icon="lucide:quote" className="absolute -top-6 -left-8 w-12 h-12 text-indigo-200 dark:text-indigo-900/40 -z-10" />
                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed animate-fade-in-up animation-delay-200 italic">
                            "A Somali programming language designed to bring coding closer to Somali speakers and promote programming in the local language."
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground font-medium animate-fade-in-up animation-delay-300">
                            <div className="w-8 h-[1px] bg-border"></div>
                            <span>Mr Sharafdin, Creator of Soplang</span>
                            <div className="w-8 h-[1px] bg-border"></div>
                        </div>
                    </div>
                </div>

                {/* Mission Card */}
                <div className="relative mb-24 animate-fade-in-up animation-delay-400">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl transform scale-y-90 -z-10" />
                    <div className="bg-card/50 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                            <div className="w-full md:w-1/2">
                                <div className="inline-block p-3 rounded-2xl bg-indigo-500/10 text-indigo-500 mb-6">
                                    <Icon icon="lucide:flag" className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">First of its Kind</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Soplang is the first Somali programming language, created to make coding accessible to Somali speakers using native Somali syntax and keywords.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <div className="flex items-center gap-3 mb-4 border-b border-white/20 pb-4">
                                        <Icon icon="lucide:code-2" className="w-6 h-6" />
                                        <span className="font-mono text-indigo-100">example.sop</span>
                                    </div>
                                    <pre className="font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
                                        {`qiimo = 150
canshuur = 0.1
wadarta = qiimo + (qiimo * canshuur)

hadii (wadarta > 100) {
    qor("Qiimaha wuu sareeyaa: " + wadarta);
} kale {
    qor("Qiimuhu waa macquul: " + wadarta);
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline & Facts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {/* Card 1 */}
                    <div className="group bg-card hover:bg-card/80 border border-border hover:border-primary/30 p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Icon icon="lucide:calendar-clock" className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">History</h3>
                        <p className="text-sm text-muted-foreground">Started in <strong className="text-foreground">February 2023</strong>, officially released in <strong className="text-foreground">October 2023</strong></p>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-card hover:bg-card/80 border border-border hover:border-primary/30 p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Icon icon="simple-icons:python" className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Built With</h3>
                        <p className="text-sm text-muted-foreground">Current <strong className="text-foreground">Interpreter</strong> is built with <strong className="text-foreground">Python</strong>, but the coming soon <strong className="text-foreground">Compiler</strong> will be using <strong className="text-foreground">Rust</strong>.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-card hover:bg-card/80 border border-border hover:border-primary/30 p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Icon icon="lucide:box" className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Ecosystem</h3>
                        <p className="text-sm text-muted-foreground">Includes a robust <strong className="text-foreground">Compiler</strong>, <strong className="text-foreground">Interpreter</strong>, and <strong className="text-foreground">VS Code Extension</strong>.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="group bg-card hover:bg-card/80 border border-border hover:border-primary/30 p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Icon icon="lucide:globe-2" className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Our Goal</h3>
                        <p className="text-sm text-muted-foreground">Promoting <strong className="text-foreground">digital inclusion</strong> and advancing Somali language development in tech.</p>
                    </div>
                </div>

                {/* Future/Update Section */}
                <div className="relative rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-black dark:to-gray-900" />
                    <div className="absolute inset-0 bg-[url('/bg-grid.svg')] opacity-20" />

                    <div className="relative z-10 p-10 md:p-20 text-center text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Coming Soon
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Future of Soplang</h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            We are currently working on a <span className="text-white font-semibold">powerful new update</span> that will revolutionize how you build with Soplang. Stay tuned for better performance, new features, and more.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
