import { useState } from 'react';
import { CheckCircle2, ChevronRight, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export function ContactSection({ copy }) {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    vertical: '',
    details: '',
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
    }, 500);
  };

  const resetForm = () => {
    setFormState({
      name: '',
      company: '',
      email: '',
      vertical: '',
      details: '',
    });
    setStatus('idle');
  };

  return (
    <section
      id="contacto"
      className="border-t border-slate-200/80 bg-transparent py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Left: Brief Info + Direct Contact Cards */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <div className="font-mono text-xs font-medium text-[#475569]">
              {copy.eyebrow}
            </div>
            <h2 className="mt-3 text-3xl leading-[1.12] font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {copy.titleLine1}
              <br />
              {copy.titleLine2}
            </h2>
            <p className="font-subtitle mt-4 text-base leading-relaxed text-[#475569]">
              {copy.subtitle}
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${copy.emailValue}`}
              className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-slate-300"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4F6F8] text-[#0F2744]">
                <Mail className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="text-xs font-medium text-[#64748B]">
                  {copy.emailLabel}
                </div>
                <div className="truncate text-sm font-semibold text-[#0F172A]">
                  {copy.emailValue}
                </div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/ergotechnology_devs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-slate-300"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4F6F8] text-[#0F2744]">
                <FontAwesomeIcon icon={faInstagram} className="text-base" />
              </span>
              <div className="min-w-0">
                <div className="text-xs font-medium text-[#64748B]">
                  {copy.igLabel}
                </div>
                <div className="truncate text-sm font-semibold text-[#0F172A]">
                  {copy.igValue}
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right: White Form Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.04)] sm:p-8 lg:col-span-7">
          {status === 'sent' ? (
            <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#0F172A]">
                {copy.form.successTitle}
              </h3>
              <p className="font-subtitle mt-2 max-w-md text-sm text-[#475569]">
                {copy.form.successDesc}
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="mt-6 cursor-pointer rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-[#0F172A] transition-colors hover:bg-slate-50"
              >
                {copy.form.reset}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-medium text-[#334155]">
                    {copy.form.nameLabel}
                  </span>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder={copy.form.namePlaceholder}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 outline-none transition-colors focus:border-[#0F2744]"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-[#334155]">
                    {copy.form.companyLabel}
                  </span>
                  <input
                    type="text"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    placeholder={copy.form.companyPlaceholder}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 outline-none transition-colors focus:border-[#0F2744]"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-medium text-[#334155]">
                    {copy.form.emailLabel}
                  </span>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder={copy.form.emailPlaceholder}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 outline-none transition-colors focus:border-[#0F2744]"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-[#334155]">
                    {copy.form.verticalLabel}
                  </span>
                  <select
                    required
                    value={formState.vertical}
                    onChange={(e) => setFormState({ ...formState, vertical: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0F172A] outline-none transition-colors focus:border-[#0F2744]"
                  >
                    <option value="" disabled>
                      {copy.form.verticalPlaceholder}
                    </option>
                    {copy.form.verticalOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-xs font-medium text-[#334155]">
                  {copy.form.detailsLabel}
                </span>
                <textarea
                  rows={4}
                  required
                  value={formState.details}
                  onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                  placeholder={copy.form.detailsPlaceholder}
                  className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 outline-none transition-colors focus:border-[#0F2744]"
                />
              </label>

              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#16375E]"
                >
                  <span>
                    {status === 'sending' ? copy.form.sending : copy.form.submit}
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
