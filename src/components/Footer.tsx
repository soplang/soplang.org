import Link from "next/link";
import { getCurrentYear } from "@/utils/formatDate";
import { Icon } from "@iconify/react";
import { NavLogo } from "./navbar/NavLogo";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Download", href: "/downloads" },
      { name: "Documentation", href: "/docs" },
      { name: "Source Code", href: "https://github.com/soplang/soplang.git", target: "_blank" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Getting Started", href: "/docs/getting-started" },
      { name: "Tutorials", href: "/docs/tutorial" },
      { name: "Examples", href: "/examples" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Discord Server", href: "https://discord.gg/n296G4dd7x", target: "_blank" },
      { name: "GitHub Discussions", href: "https://github.com/orgs/soplang/discussions", target: "_blank" },
      { name: "Contributing", href: "/contribute" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Trademarks", href: "/trademarks" },
    ],
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/soplang",
    icon: <Icon icon="lucide:github" className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    href: "https://x.com/soplangorg",
    icon: <Icon icon="lucide:twitter" className="w-5 h-5" />,
  },
  {
    name: "Discord",
    href: "https://discord.gg/n296G4dd7x",
    icon: <Icon icon="simple-icons:discord" className="w-5 h-5" />,
  },
];

export default function Footer() {
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-background border-t border-border/40 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-custom px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <NavLogo />
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              The first open-source programming language designed natively for the Somali community.
              Empowering the next generation of developers.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-secondary text-muted-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 ring-1 ring-border shadow-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="lg:col-span-1">
              <h3 className="font-semibold text-foreground mb-6">{group.title}</h3>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      {...(link.target ? { target: link.target, rel: "noopener noreferrer" } : {})}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Soplang Software Foundation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              Made with <Icon icon="lucide:heart" className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> in Somalia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
