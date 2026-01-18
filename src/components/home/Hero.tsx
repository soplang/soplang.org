'use client';

import Link from 'next/link';
import CodeWindow from '../CodeWindow'; // Adjust path if needed
import { Icon } from '@iconify/react';
import { Typewriter } from '../ui/Typewriter';
import { latestVersion } from '@/constants/latestVersion';
import { sample_codeSnippet } from '@/constants/codeSnippetData';

export const Hero = () => {
    return (
        <section className="relative overflow-hidden py-16">
            {/* Hero Background Pattern */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Animated Gradient Orbs */}
            <div className="absolute top-0 left-0 right-0 -z-20 overflow-hidden">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen opacity-50"></div>
                <div className="absolute top-[-10%] right-[20%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen opacity-50"></div>
                <div className="absolute bottom-[-20%] left-[40%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen opacity-30"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-primary/20 text-sm font-semibold text-primary shadow-[0_0_10px_rgba(var(--primary),0.1)] backdrop-blur-sm animate-fade-in-up">
                            <Icon icon="streamline-sharp:star-2" className="w-4 h-4 text-indigo-400" />
                            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">{latestVersion} is Now Stable</span>
                        </div>

                        <h1 className="flex gap-2 flex-wrap items-center justify-center lg:justify-start lg:w-full text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] animate-fade-in-up animation-delay-100">
                            Build <br />
                            <Typewriter
                                words={['Websites', 'APIs', 'Futures', 'Dreams']}
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-primary to-purple-600"
                            />
                            <br />
                            <span className="text-foreground">In Somali</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-200">
                            Break the language barrier. <br className="hidden md:block" />
                            The first open-source programming language designed purely for the Somali community.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in-up animation-delay-300">
                            <Link
                                href="/downloads"
                                className="w-full sm:w-auto h-14 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ring-2 ring-blue-500/20 ring-offset-2 ring-offset-background"
                            >
                                <Icon icon="lucide:download" className="w-5 h-5" />
                                Install Soplang
                            </Link>
                            <Link
                                href="/docs/getting-started"
                                className="w-full sm:w-auto h-14 px-8 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-secondary/50 font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 group backdrop-blur-sm"
                            >
                                Documentation
                                <Icon icon="lucide:arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Mini Social Proof */}
                        <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground animate-fade-in-up animation-delay-500">
                            <div className="flex items-center gap-1">
                                <Icon icon="lucide:terminal" className="w-4 h-4" /> Open Source
                            </div>
                            <div className="w-1 h-1 rounded-full bg-border"></div>
                            <div className="flex items-center gap-1">
                                <Icon icon="lucide:globe" className="w-4 h-4" /> Somali Syntax
                            </div>
                            <div className="w-1 h-1 rounded-full bg-border"></div>
                            <div className="flex items-center gap-1">
                                <Icon icon="lucide:cpu" className="w-4 h-4" /> High Performance
                            </div>
                        </div>
                    </div>

                    {/* Setup Code Preview */}
                    <div className="w-full lg:w-1/2 perspective-1000 relative animate-float-slow">
                        {/* Floating Icons */}
                        <div className="absolute -top-12 -right-8 w-16 h-16 bg-blue-500/10 backdrop-blur-md border border-white/10 rounded-2xl items-center justify-center shadow-xl animate-float animation-delay-1000 z-20 hidden lg:flex">
                            <Icon icon="lucide:globe" className="w-8 h-8 text-blue-500" />
                        </div>
                        <div className="absolute top-1/2 -left-12 w-14 h-14 bg-purple-500/10 backdrop-blur-md border border-white/10 rounded-2xl items-center justify-center shadow-xl animate-float animation-delay-2000 z-20 hidden lg:flex">
                            <Icon icon="lucide:database" className="w-7 h-7 text-purple-500" />
                        </div>
                        <div className="absolute -bottom-8 -right-4 w-12 h-12 bg-green-500/10 backdrop-blur-md border border-white/10 rounded-2xl items-center justify-center shadow-xl animate-float animation-delay-3000 z-20 hidden lg:flex">
                            <Icon icon="lucide:terminal" className="w-6 h-6 text-green-500" />
                        </div>

                        <div className="relative rounded-xl shadow-2xl overflow-hidden border border-white/10 bg-[#1e1e1e]/90 backdrop-blur-xl transform transition-all duration-500 hover:rotate-y-1 hover:rotate-x-1 hover:scale-[1.02] group ring-1 ring-white/5">
                            <CodeWindow code={sample_codeSnippet} title="main.sop" />

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        </div>

                        {/* Abstract BG Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-primary/30 to-purple-600/30 rounded-full blur-[120px] opacity-60 animate-pulse-slow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
