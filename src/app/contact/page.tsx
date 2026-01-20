"use client";

import React from 'react';
import { Icon } from '@iconify/react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[var(--background-color)] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-primary animate-gradient mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Have questions about Soplang? We're here to help. Reach out to the community or send us a direct message.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Contact Info Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up [animation-delay:200ms]">
                        <ContactCard
                            icon="simple-icons:discord"
                            title="Discord"
                            description="Join our active developer community for real-time help."
                            link="https://discord.gg/n296G4dd7x"
                            color="bg-indigo-500"
                        />
                        <ContactCard
                            icon="lucide:github"
                            title="GitHub"
                            description="Report bugs, request features, or contribute code."
                            link="https://github.com/soplang"
                            color="bg-gray-800"
                        />
                        <ContactCard
                            icon="lucide:mail"
                            title="Email"
                            description="Direct support for sensitive inquiries or partnerships."
                            link="mailto:support@soplang.org"
                            color="bg-blue-500"
                        />
                        <ContactCard
                            icon="lucide:help-circle"
                            title="Help Center"
                            description="Browse our documentation and frequently asked questions."
                            link="/about/help"
                            color="bg-primary"
                        />
                    </div>

                    {/* Additional Info Box */}
                    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 relative overflow-hidden animate-fade-in-up [animation-delay:400ms]">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Icon icon="lucide:info" className="w-24 h-24" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 items-center flex gap-2">
                            <Icon icon="lucide:clock" className="w-5 h-5 text-primary" />
                            Response Time
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Our community is active 24/7 on Discord. For direct messages via email, we typically respond within 1-2 business days.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ContactCard({ icon, title, description, link, color }: { icon: string, title: string, description: string, link: string, color: string }) {
    return (
        <a
            href={link}
            target={link.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="group block p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/80 transition-all hover:shadow-xl hover:-translate-y-1"
        >
            <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                <Icon icon={icon} className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </a>
    );
}
