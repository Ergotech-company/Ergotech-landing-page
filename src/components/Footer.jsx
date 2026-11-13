import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ErgoBrandLockup } from './ErgoLogo';

export function Footer({ copy, navLinks }) {
  return (
    <footer className="relative border-t border-white/10 bg-[#0B0F17] py-12 text-white">
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-[#102C53] via-[#336DE6] to-[#27717C] opacity-85" />
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div className="flex flex-col gap-3">
          <ErgoBrandLockup
            layout="row"
            variant="dark"
            wordmarkSize="md"
          />
          <p className="mt-1 max-w-sm text-xs font-medium text-white/70">
            {copy.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-semibold text-white/80 transition-colors hover:text-[#60A5FA]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:ergotechnologysupport@gmail.com"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#60A5FA] transition-colors hover:text-white"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
            <span>Email</span>
          </a>
          <a
            href="tel:4125203729"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5EEAD4] transition-colors hover:text-white"
          >
            <FontAwesomeIcon icon={faPhone} className="text-xs" />
            <span>412-5203729</span>
          </a>
          <a
            href="https://www.instagram.com/ergotechnology_devs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 transition-colors hover:text-[#60A5FA]"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-xs" />
            <span>@ergotechnology_devs</span>
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-[#121824] px-3.5 py-2 font-mono text-xs font-semibold text-white transition-all hover:border-[#336DE6] hover:text-[#60A5FA]"
          >
            <span>{copy.backToTop}</span>
            <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs font-medium text-white/55 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} ERGOTECHNOLOGY. {copy.rights}
      </div>
    </footer>
  );
}
