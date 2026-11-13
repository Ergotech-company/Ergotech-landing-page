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
  faCode,
  faCodeMerge,
  faCubes,
  faDatabase,
  faDiagramProject,
  faGlobe,
  faNetworkWired,
  faServer,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { TECH_STACK_ROW_1, TECH_STACK_ROW_2 } from '../data/content';

const FA_MAP = {
  cubes: faCubes,
  merge: faCodeMerge,
  diagram: faDiagramProject,
  react: faReact,
  rocket: faGlobe,
  python: faPython,
  database: faDatabase,
  code: faCode,
  linux: faLinux,
  docker: faDocker,
  shield: faShieldHalved,
  node: faNodeJs,
  aws: faAws,
  git: faGitAlt,
  bolt: faNetworkWired,
  server: faServer,
};

const ICON_COLORS = [
  'text-[#336DE6]',
  'text-[#27717C]',
  'text-[#60A5FA]',
  'text-white/90',
  'text-[#5EEAD4]',
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
            className="flex shrink-0 items-center gap-2.5 rounded-xl border border-white/12 bg-[#121824] px-5 py-2.5 font-mono text-sm font-medium text-white/90 transition-all hover:border-[#336DE6]/70 hover:bg-[#161F30]"
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
    <section className="marquee-wrapper relative border-y border-[#1F4071]/30 bg-[#0B0F17] py-10">
      <div className="mx-auto mb-5 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="font-mono text-xs font-bold tracking-[0.22em] text-white/75 uppercase">
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
