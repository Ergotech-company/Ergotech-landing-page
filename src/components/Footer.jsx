import { ChevronRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer({ copy }) {
  return (
    <footer className="border-t border-slate-200/80 bg-transparent pt-16 pb-24 text-[#0F172A] sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Pre-footer CTA */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-slate-200 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <div className="font-mono text-xs font-medium text-[#475569]">
              {copy.eyebrow}
            </div>
            <h2 className="mt-3 text-3xl leading-[1.12] font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {copy.ctaTitle}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#16375E]"
            >
              <span>{copy.primaryCta}</span>
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${copy.emailCta}`}
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-[#0F172A] transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              {copy.emailCta}
            </a>
          </div>
        </div>

        {/* Giant Editorial Wordmark */}
        <div className="py-10 sm:py-12">
          <div className="w-full overflow-hidden text-center text-[clamp(2.1rem,8.4vw,6.8rem)] leading-[0.95] font-bold tracking-[-0.04em] text-[#0F172A] select-none">
            ERGOTECNOLOGY
          </div>
        </div>

        {/* 4-Column Navigation Grid */}
        <div className="grid grid-cols-1 gap-8 border-b border-slate-200 pb-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="max-w-xs text-sm leading-relaxed text-[#475569]">
              {copy.description}
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs font-semibold text-[#0F172A]">{copy.col1Title}</div>
            <ul className="mt-3 space-y-2.5 text-xs text-[#475569]">
              {copy.col1Links.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-[#0F172A]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-semibold text-[#0F172A]">{copy.col2Title}</div>
            <ul className="mt-3 space-y-2.5 text-xs text-[#475569]">
              {copy.col2Links.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-[#0F172A]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-semibold text-[#0F172A]">{copy.col3Title}</div>
            <ul className="mt-3 space-y-2.5 text-xs text-[#475569]">
              {copy.col3Links.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="transition-colors hover:text-[#0F172A]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-xs text-[#64748B]">
          <span>
            © {new Date().getFullYear()} ERGOTECNOLOGY. {copy.rights}
          </span>
          <a
            href="https://www.instagram.com/ergotechnology_devs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#475569] transition-colors hover:text-[#0F172A]"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
}
