interface BlogHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function BlogHeader({
  title,
  subtitle,
  className = "",
}: BlogHeaderProps) {
  return (
    <div
      className={`relative w-full h-64 md:h-80 overflow-hidden rounded-lg mb-8 ${className}`}
    >
      {/* Main gradient background using design system colors */}
      <div className={`absolute inset-0 `} />

      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        {/* Large circle - top right */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full  opacity-20"
          style={{ backgroundColor: "var(--ifm-color-primary-lightest)" }}
        />

        <div className="absolute  bg-black/20 dark:bg-[var(--ifm-color-secondary-light)] top-10 -left-20 w-32 h-32 rounded-full  opacity-10" />
      </div>

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-background/30 shadom-1x" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-3xl md:text-7xl font-bold text-background dark:text-white mb-4 drop-shadow-lg tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-background/90 dark:text-white/90 drop-shadow-md max-w-3xl line-clamp-4 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
