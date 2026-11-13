import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faClipboardList,
  faEnvelope,
  faPaperPlane,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
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
      className="relative overflow-hidden border-t border-[#1F4071]/10 bg-gradient-to-b from-[#F4F7FC] to-[#EBF1FA] py-24 text-[#102C53] sm:py-28"
    >
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-[380px] w-[380px] rounded-full bg-[#336DE6]/8 blur-[120px]" />
      <div className="pointer-events-none absolute top-10 right-1/4 h-[300px] w-[300px] rounded-full bg-[#27717C]/8 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col justify-between lg:col-span-5"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2C56AA]/25 bg-white px-3.5 py-1 font-mono text-xs font-bold tracking-[0.18em] text-[#2C56AA] uppercase shadow-xs">
              <FontAwesomeIcon icon={faClipboardList} className="text-xs text-[#336DE6]" />
              {copy.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#102C53] sm:text-4xl lg:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed font-medium text-[#1F4071]/85 sm:text-lg">
              {copy.subtitle}
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-[#1F4071]/15 bg-white p-6 shadow-[0_12px_30px_rgba(16,44,83,0.07)]">
            <div className="font-mono text-xs font-bold tracking-wider text-[#27717C] uppercase">
              {copy.directLabel}
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <a
                href="mailto:ergotechnologysupport@gmail.com"
                className="inline-flex items-center gap-2.5 font-spartan text-base font-bold text-[#102C53] transition-colors hover:text-[#336DE6] sm:text-lg"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-4 text-base text-[#336DE6]" />
                <span>ergotechnologysupport@gmail.com</span>
              </a>
              <a
                href="tel:4125203729"
                className="inline-flex items-center gap-2.5 font-spartan text-base font-bold text-[#102C53] transition-colors hover:text-[#336DE6] sm:text-lg"
              >
                <FontAwesomeIcon icon={faPhone} className="w-4 text-base text-[#27717C]" />
                <span>412-5203729</span>
              </a>
              <a
                href="https://www.instagram.com/ergotechnology_devs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-spartan text-base font-bold text-[#102C53] transition-colors hover:text-[#336DE6] sm:text-lg"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 text-base text-[#2C56AA]" />
                <span>@ergotechnology_devs</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="rounded-3xl border border-[#1F4071]/15 bg-white p-6 shadow-[0_18px_48px_rgba(16,44,83,0.08)] sm:p-9 lg:col-span-7"
        >
          {status === 'sent' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex min-h-[360px] flex-col items-center justify-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#27717C]/12 text-[#27717C]">
                <FontAwesomeIcon icon={faCircleCheck} className="text-3xl" />
              </div>
              <h3 className="mt-5 font-spartan text-2xl font-bold text-[#102C53]">
                {copy.form.successTitle}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#1F4071] sm:text-base">
                {copy.form.successBody}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-7 cursor-pointer rounded-xl border border-[#2C56AA] bg-[#102C53] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#336DE6]"
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
                            ? 'border-[#2C56AA] bg-gradient-to-r from-[#102C53] to-[#336DE6] text-white shadow-[0_4px_14px_rgba(44,86,170,0.22)]'
                            : 'border-[#1F4071]/20 bg-[#F8FAFC] text-[#1F4071] hover:border-[#336DE6] hover:text-[#336DE6]'
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
                  <span className="font-mono text-xs font-semibold text-[#1F4071]">
                    {copy.form.nameLabel}
                  </span>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder={copy.form.namePlaceholder}
                    className="rounded-xl border border-[#1F4071]/20 bg-[#F8FAFC] px-4 py-3 text-sm text-[#102C53] placeholder-[#1F4071]/45 outline-none transition-colors focus:border-[#336DE6] focus:bg-white"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs font-semibold text-[#1F4071]">
                    {copy.form.emailLabel}
                  </span>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder={copy.form.emailPlaceholder}
                    className="rounded-xl border border-[#1F4071]/20 bg-[#F8FAFC] px-4 py-3 text-sm text-[#102C53] placeholder-[#1F4071]/45 outline-none transition-colors focus:border-[#336DE6] focus:bg-white"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-xs font-semibold text-[#1F4071]">
                  {copy.form.companyLabel}
                </span>
                <input
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  placeholder={copy.form.companyPlaceholder}
                  className="rounded-xl border border-[#1F4071]/20 bg-[#F8FAFC] px-4 py-3 text-sm text-[#102C53] placeholder-[#1F4071]/45 outline-none transition-colors focus:border-[#336DE6] focus:bg-white"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-xs font-semibold text-[#1F4071]">
                  {copy.form.detailsLabel}
                </span>
                <textarea
                  rows={4}
                  required
                  value={formState.details}
                  onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                  placeholder={copy.form.detailsPlaceholder}
                  className="resize-none rounded-xl border border-[#1F4071]/20 bg-[#F8FAFC] px-4 py-3 text-sm text-[#102C53] placeholder-[#1F4071]/45 outline-none transition-colors focus:border-[#336DE6] focus:bg-white"
                />
              </label>

              <div className="pt-2">
                <MagneticButton
                  type="submit"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#102C53] via-[#2C56AA] to-[#336DE6] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(44,86,170,0.22)] transition-all hover:shadow-[0_12px_28px_rgba(51,109,230,0.3)] sm:w-auto"
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
