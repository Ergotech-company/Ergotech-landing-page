import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faEnvelope,
  faPaperPlane,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { MagneticButton } from './MagneticButton';

export function ContactSection({ copy }) {
  const [selectedScopeIndexes, setSelectedScopeIndexes] = useState([0]);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
  });
  const [status, setStatus] = useState('idle');

  const toggleScope = (idx) => {
    setSelectedScopeIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
    }, 650);
  };

  const handleReset = () => {
    setFormState({ name: '', email: '', company: '', details: '' });
    setStatus('idle');
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#050914] py-24 text-[#F2F2F2] sm:py-28"
    >
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-[440px] w-[440px] rounded-full bg-[#00F0FF]/18 blur-[140px]" />
      <div className="pointer-events-none absolute top-10 right-1/4 h-[340px] w-[340px] rounded-full bg-[#FF2E93]/14 blur-[130px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between lg:col-span-5"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF2E93]/55 bg-[#FF2E93]/15 px-3.5 py-1 font-mono text-xs font-semibold tracking-[0.18em] text-[#FF2E93] uppercase">
              <FontAwesomeIcon icon={faWandMagicSparkles} className="text-xs" />
              {copy.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#F2F2F2]/75 sm:text-lg">
              {copy.subtitle}
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-[#00F0FF]/45 bg-[#0A1326]/90 p-6 shadow-[0_0_30px_rgba(0,240,255,0.14)] backdrop-blur-md">
            <div className="font-mono text-xs font-semibold tracking-wider text-[#00FFA3] uppercase">
              {copy.directLabel}
            </div>
            <a
              href="mailto:ergotechnologysupport@gmail.com"
              className="mt-2 inline-flex items-center gap-2.5 font-display text-base font-semibold text-[#F2F2F2] transition-colors hover:text-[#00F0FF] sm:text-lg"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-base text-[#00F0FF]" />
              <span>ergotechnologysupport@gmail.com</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-[#00F0FF]/40 bg-[#0A1326]/90 p-6 shadow-[0_0_48px_rgba(41,100,217,0.2)] backdrop-blur-xl sm:p-9 lg:col-span-7"
        >
          {status === 'sent' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex min-h-[360px] flex-col items-center justify-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00FFA3]/20 text-[#00FFA3] shadow-[0_0_24px_rgba(0,255,163,0.4)]">
                <FontAwesomeIcon icon={faCircleCheck} className="text-3xl" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-[#F2F2F2]">
                {copy.form.successTitle}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#F2F2F2]/75 sm:text-base">
                {copy.form.successBody}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-7 cursor-pointer rounded-xl border border-[#00F0FF]/60 bg-[#050914] px-5 py-2.5 text-sm font-semibold text-[#00F0FF] transition-colors hover:bg-[#00F0FF] hover:text-[#050914]"
              >
                {copy.form.reset}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <div className="mb-2.5 flex flex-wrap gap-2">
                  {copy.scopes.map((scope, idx) => {
                    const active = selectedScopeIndexes.includes(idx);
                    return (
                      <button
                        key={scope}
                        type="button"
                        onClick={() => toggleScope(idx)}
                        className={`cursor-pointer rounded-xl border px-3.5 py-1.5 font-mono text-xs font-semibold transition-all ${
                          active
                            ? 'border-[#00F0FF] bg-gradient-to-r from-[#00F0FF] to-[#2975D9] text-[#050914] shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                            : 'border-[#23518C]/70 bg-[#050914]/75 text-[#F2F2F2]/75 hover:border-[#00F0FF]/70 hover:text-[#00F0FF]'
                        }`}
                      >
                        {scope}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-[#F2F2F2]/75">
                    {copy.form.nameLabel}
                  </span>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder={copy.form.namePlaceholder}
                    className="rounded-xl border border-[#23518C]/70 bg-[#050914]/85 px-4 py-3 text-sm text-[#F2F2F2] placeholder-[#F2F2F2]/35 outline-none transition-colors focus:border-[#00F0FF]"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-[#F2F2F2]/75">
                    {copy.form.emailLabel}
                  </span>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder={copy.form.emailPlaceholder}
                    className="rounded-xl border border-[#23518C]/70 bg-[#050914]/85 px-4 py-3 text-sm text-[#F2F2F2] placeholder-[#F2F2F2]/35 outline-none transition-colors focus:border-[#00F0FF]"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-xs text-[#F2F2F2]/75">
                  {copy.form.companyLabel}
                </span>
                <input
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  placeholder={copy.form.companyPlaceholder}
                  className="rounded-xl border border-[#23518C]/70 bg-[#050914]/85 px-4 py-3 text-sm text-[#F2F2F2] placeholder-[#F2F2F2]/35 outline-none transition-colors focus:border-[#00F0FF]"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-xs text-[#F2F2F2]/75">
                  {copy.form.detailsLabel}
                </span>
                <textarea
                  rows={4}
                  required
                  value={formState.details}
                  onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                  placeholder={copy.form.detailsPlaceholder}
                  className="resize-none rounded-xl border border-[#23518C]/70 bg-[#050914]/85 px-4 py-3 text-sm text-[#F2F2F2] placeholder-[#F2F2F2]/35 outline-none transition-colors focus:border-[#00F0FF]"
                />
              </label>

              <div className="pt-2">
                <MagneticButton
                  type="submit"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00FFA3] via-[#00F0FF] to-[#A855F7] px-6 py-3.5 text-sm font-bold text-[#050914] shadow-[0_0_32px_rgba(0,240,255,0.48)] transition-all hover:shadow-[0_0_46px_rgba(168,85,247,0.68)] sm:w-auto"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                  <span>
                    {status === 'sending' ? copy.form.sending : copy.form.submit}
                  </span>
                </MagneticButton>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
