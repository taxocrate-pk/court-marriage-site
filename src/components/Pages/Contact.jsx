import React, { useState } from 'react';
import { Link } from 'react-router';
import { CheckCircle2, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import SEO from '../SEO.jsx';
import WeddingHeroImage from '../WeddingHeroImage.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', service: 'Court Marriage', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = [
      'Assalam-o-Alaikum Shah Sahib, Court Marriage Site se rabta kar raha/rahi hoon.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Service: ${form.service}`,
      `Details: ${form.message || 'Not provided'}`
    ].join('\n');
    window.open(`https://wa.me/923331127834?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Court Marriage Site',
    url: 'https://courtmarriage.site/contact',
    description: 'Contact the Court Marriage Site legal team for Court Marriage, Online Nikah and marriage registration assistance in Pakistan.'
  };

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-300 pt-28 pb-20 overflow-hidden">
      <SEO
        title="Contact Court Marriage Lawyers | Pakistan Marriage Services"
        description="Contact Court Marriage Site for confidential guidance on Court Marriage, Online Nikah, Nikah Nama, registration, fees and overseas marriage cases."
        path="/contact"
        schema={contactSchema}
      />

      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={15} /> Confidential Case Review
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Contact Our <span className="text-blue-500">Marriage Legal Team</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Contact Court Marriage Site for guidance on court marriage, Online Nikah, Nikah Nama documentation and marriage registration. For a useful first review, tell us the city, ages, nationality, current marital status and whether both parties can attend.
            </p>
          </div>

          <WeddingHeroImage
            alt="Wedding couple for Court Marriage and Online Nikah consultation"
            priority
          />
        </header>

        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start mb-24">
          <div className="p-7 md:p-10 rounded-[2.5rem] bg-slate-900/70 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Send your case details</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">The form opens a WhatsApp message with the details you enter. It does not publish your information on the website.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2">Full Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-300 mb-2">Phone / WhatsApp</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="03xx xxxxxxx" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="city" className="block text-sm font-bold text-slate-300 mb-2">City / Country</label>
                  <input id="city" name="city" value={form.city} onChange={handleChange} required placeholder="Karachi, Islamabad, UK, UAE..." className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-300 mb-2">Service Required</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500">
                    <option>Court Marriage</option>
                    <option>Online Nikah</option>
                    <option>Nikah Nama / Marriage Registration</option>
                    <option>Overseas Marriage Documents</option>
                    <option>Other Marriage Legal Advice</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-2">Case Details</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="6" placeholder="Ages, marital status, whether both parties can attend, overseas details and any urgent issue..." className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 resize-y" />
              </div>

              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2">
                <MessageCircle size={19} /> Send on WhatsApp
              </button>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="p-7 rounded-[2rem] bg-slate-900 border border-slate-800">
              <Phone className="text-blue-500 mb-4" size={32} />
              <h2 className="text-2xl font-black text-white mb-4">Direct contact</h2>
              <a href="tel:+923331127834" className="text-blue-400 font-bold text-lg no-underline hover:text-blue-300">+92 333 1127834</a>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">General Court Marriage Site helpline for initial enquiries and WhatsApp case intake.</p>
            </div>

            <div className="p-7 rounded-[2rem] bg-slate-900 border border-slate-800">
              <MapPin className="text-blue-500 mb-4" size={32} />
              <h2 className="text-2xl font-black text-white mb-4">Karachi contact office</h2>
              <p className="text-slate-400 leading-relaxed">Supreme Corner Apartments, Johar Chowrangi, Block 18, Gulistan-e-Johar, Karachi.</p>
              <p className="text-slate-500 text-sm mt-3">Local landline: 021-37451359</p>
            </div>

            <div className="p-7 rounded-[2rem] bg-blue-600/10 border border-blue-500/20">
              <h2 className="text-xl font-black text-white mb-4">City-specific numbers</h2>
              <div className="space-y-3 text-sm">
                <p className="flex justify-between gap-3"><span className="text-slate-400">Islamabad</span><a className="text-blue-400 font-bold" href="tel:+923331127836">+92 333 1127836</a></p>
                <p className="flex justify-between gap-3"><span className="text-slate-400">Rawalpindi</span><a className="text-blue-400 font-bold" href="tel:+923331127831">+92 333 1127831</a></p>
                <p className="flex justify-between gap-3"><span className="text-slate-400">Lahore</span><a className="text-blue-400 font-bold" href="tel:+923331127835">+92 333 1127835</a></p>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-24">
          {[
            ['Tell us the jurisdiction', 'Marriage-age rules and registration practice can differ by province or territory, so the city matters from the start.'],
            ['Tell us the marital status', 'If either party was previously married, the relevant divorce, khula, talaq-effectiveness or death document may need review.'],
            ['Tell us if anyone is abroad', 'Overseas cases may involve passports, NICOP, representation, power of attorney, translation or attestation requirements.']
          ].map(([title, text]) => (
            <div key={title} className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
              <CheckCircle2 className="text-blue-500 mb-4" size={24} />
              <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-3xl font-black text-white mb-6">What happens after you contact us?</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>We first identify the service you actually need. A person asking for “court marriage” may need a local Nikah and registration, an overseas Online Nikah structure, document correction, a computerised marriage certificate or simply legal advice about a previous marriage.</p>
              <p>Once the facts are clear, the legal team can explain the likely documents, the correct city or registration jurisdiction and any issue that should be resolved before the Nikah. A fee or timeline is more useful after that review than before it.</p>
              <p>If the enquiry involves family opposition, threats or coercion, mention that separately. Protection and safety questions may require a different legal response from the marriage documentation itself.</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-white mb-6">Before asking for a fixed fee</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>Court marriage and Online Nikah costs vary because the work varies. Consultation, Nikah arrangements, registration, certified copies, computerised certificate assistance, translation, attestation and urgent handling are separate possible cost heads.</p>
              <p>Overseas and foreign-national cases can require additional documents. The quote should therefore state what is included and whether later certificate, translation, attestation or courier work is separate.</p>
              <p>Mahr is not a professional fee. It is agreed between the parties and should be recorded separately in the Nikah Nama.</p>
            </div>
          </div>
        </section>

        <section className="text-center p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-slate-900 border border-blue-500/20">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Read the process before you proceed</h2>
          <p className="text-slate-400 max-w-3xl mx-auto mb-8">For detailed guidance on legal eligibility, documents, Nikah Nama and registration, review our Court Marriage procedure or Online Nikah guide before contacting the team.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/procedure" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl no-underline">Court Marriage Procedure</Link>
            <Link to="/online-nikah-navigating-the-digital-path-to-marriage" className="px-8 py-4 border border-slate-700 hover:border-blue-500 text-white font-bold rounded-xl no-underline">Online Nikah Guide</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
