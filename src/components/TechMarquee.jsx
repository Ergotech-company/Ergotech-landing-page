import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAws,
  faDocker,
  faGitAlt,
  faLinux,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBolt,
  faCode,
  faCodeMerge,
  faCubes,
  faDatabase,
  faDiagramProject,
  faRocket,
  faServer,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { TECH_STACK_ROW_1, TECH_STACK_ROW_2 } from '../data/content';

const FA_MAP = {
  cubes: faCubes,
  merge: faCodeMerge,
  diagram: faDiagramProject,
  react: faReact,
  rocket: faRocket,
  python: faPython,
  database: faDatabase,
  code: faCode,
  linux: faLinux,
  docker: faDocker,
  shield: faShieldHalved,
  node: faNodeJs,
  aws: faAws,
  git: faGitAlt,
  bolt: faBolt,
  server: faServer,
};

const ICON_COLORS = [
  'text-[#00F0FF]',
  'text-[#00FFA3]',
  'text-[#A855F7]',
  'text-[#FF2E93]',
];

function MarqueeTrack({ items, reverse = false }) {
  const repeated = [...items, ...items];
  return (
    <div className="flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex shrink-0 gap-4 pr-4 ${
          reverse ? 'animate-marquee-right' : 'animate-marquee-left'
        }`}
      >
        {repeated.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="flex shrink-0 items-center gap-2.5 rounded-xl border border-[#2975D9]/45 bg-[#0A1326]/90 px-5 py-2.5 font-mono text-sm font-medium text-[#F2F2F2] transition-all hover:border-[#00F0FF] hover:shadow-[0_0_22px_rgba(0,240,255,0.35)]"
          >
            <FontAwesomeIcon
              icon={FA_MAP[item.icon] || faCubes}
              className={`text-base ${ICON_COLORS[index % ICON_COLORS.length]}`}
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee({ copy }) {
  return (
    <section className="marquee-wrapper relative border-y border-[#00F0FF]/25 bg-[#070E1E] py-10">
      <div className="mx-auto mb-5 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="font-mono text-xs font-semibold tracking-[0.22em] text-[#00F0FF] neon-text-cyan uppercase">
          {copy.label}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <MarqueeTrack items={TECH_STACK_ROW_1} />
        <MarqueeTrack items={TECH_STACK_ROW_2} reverse />
      </div>
    </section>
  );
}
