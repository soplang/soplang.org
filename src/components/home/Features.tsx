'use client';

import { features } from '@/constants/FeaturesData';

export const Features = () => {
    return (
        <section className="py-16 md:py-24 bg-secondary/30 relative">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Soplang?</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Designed to bridge the gap between concept and code for Somali developers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Array.isArray(features) && features.length > 0 && features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
