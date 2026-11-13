import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ErgoBrandLockup } from './ErgoLogo';

export function Footer({ copy, navLinks }) {
  return (
    <footer className="relative border-t border-[#00F0FF]/35 bg-[#03060E] py-12 text-[#F2F2F2]">
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-80" />
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div className="flex flex-col gap-2">
          <ErgoBrandLockup
            layout="row"
            variant="dark"
            iconSize={48}
            wordmarkSize="md"
          />
          <p className="mt-1 max-w-sm text-xs text-[#F2F2F2]/65">
            {copy.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-[#F2F2F2]/75 transition-colors hover:text-[#00F0FF]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:ergotechnologysupport@gmail.com"
            className="inline-flex items-center gap-1.5 text-sm text-[#00F0FF]/85 transition-colors hover:text-[#00FFA3]"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
            <span>Email</span>
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#00F0FF]/50 bg-[#0A1326] px-3.5 py-2 font-mono text-xs font-semibold text-[#00F0FF] shadow-[0_0_16px_rgba(0,240,255,0.2)] transition-all hover:border-[#00FFA3] hover:text-[#00FFA3]"
          >
            <span>{copy.backToTop}</span>
            <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-[#23518C]/35 px-4 pt-6 text-xs text-[#F2F2F2]/50 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} ERGOTECHNOLOGY. {copy.rights}
      </div>
    </footer>
  );
}
