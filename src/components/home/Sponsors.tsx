'use client';

export const Sponsors = () => {
    return (
        <section className="py-12 border-y border-border/40">
            <div className="container-custom text-center">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
                    Proudly supported by
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src="/images/sponsors/Docker.svg" alt="Docker" className="h-12 md:h-16" />
                    {/* Other sponsors */}
                </div>
            </div>
        </section>
    );
};
