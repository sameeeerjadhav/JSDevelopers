import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { navLinks, projects, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="mb-10">
          <SiteLogo variant="footer" />
        </div>

        <div className="overflow-hidden">
          <div
            className="bg-cover bg-center px-6 py-12 text-center md:px-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6,20,40,0.82), rgba(6,20,40,0.82)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80')",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Call us
            </p>
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="mt-3 block font-display text-4xl font-semibold md:text-5xl"
            >
              {siteConfig.phoneDisplay}
            </a>
            <p className="mt-3 text-sm text-white/75">
              For queries, bookings, or a site visit — we&apos;re ready to help.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-semibold">Contact Info</h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/70">
              <p>{siteConfig.address}</p>
              <p>
                <a href={`tel:+91${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold">Recent Properties</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {projects.map((project) => (
                <li key={project.id}>
                  <Link
                    href="/projects#listings"
                    className="font-medium text-white hover:text-leaf"
                  >
                    {project.name}
                  </Link>
                  <p className="text-xs text-white/55">{project.location}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Cookie preferences available via the consent banner.</p>
        </div>
      </div>
    </footer>
  );
}
