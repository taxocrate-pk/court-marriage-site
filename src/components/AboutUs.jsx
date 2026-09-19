import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Globe, MapPin, Scale, ShieldCheck } from 'lucide-react';
import SEO from './SEO.jsx';

const standards = [
  {
    title: 'Legal accuracy before speed',
    text: 'We do not treat every court marriage as one identical package. Age, identity, previous marital status, jurisdiction and registration route are reviewed before a timeline is promised.'
  },
  {
    title: 'Clear distinction between stages',
    text: 'Nikah, Nikah Nama, marriage registration, computerised marriage certificate, translation and attestation are related but different stages. Clients should know which service they are receiving.'
  },
  {
    title: 'Respect for free consent',
    text: 'A marriage should reflect genuine consent. Where a couple faces family opposition, the marriage process is kept distinct from any separate safety or protection issue that may require legal advice.'
  },
  {
    title: 'Case-specific Online Nikah guidance',
    text: 'Remote Nikah matters are reviewed for consent, witnesses, representation, documentation and religious-method questions rather than being reduced to a generic video-link claim.'
  }
];

const AboutUs = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Court Marriage Site',
    url: 'https://courtmarriage.site/',
    telephone: '+92 332 2908556',
    areaServed: 'Pakistan',
    serviceType: ['Court Marriage', 'Online Nikah', 'Marriage Registration Assistance'],
    description: 'Professional legal assistance for court marriage, Online Nikah, Nikah Nama documentation and marriage registration in Pakistan.'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://courtmarriage.site/' },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://courtmarriage.site/about-us' }
    ]
  };

  return (
    <main className="bg-slate-950 text-slate-300 pt-32 pb-20 overflow-hidden min-h-screen relative">
      <SEO
        title="About Court Marriage Site | Marriage Legal Services Pakistan"
        description="About Court Marriage Site: legal guidance for court marriage, Online Nikah, Nikah Nama and marriage registration across Pakistan with 40+ years' experience."
        path="/about-us"
        schema={[organizationSchema, breadcrumbSchema]}
      />

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="text-center mb-24 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            Professional Marriage Legal Services
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            About <span className="text-blue-500">Court Marriage Site</span>
          </h1>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
            Court Marriage Site is a Pakistan-focused legal information and professional-services platform for <strong className="text-slate-200">court marriage</strong>, <strong className="text-slate-200">Online Nikah</strong>, Nikah Nama documentation and marriage registration. Our objective is simple: explain the process accurately, identify the correct legal route for the particular couple and avoid the exaggerated promises that often surround marriage-service advertising.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-12 mb-28 items-start">
          <div className="space-y-6">
            <Scale className="text-blue-500" size={42} />
            <h2 className="text-3xl md:text-4xl font-black text-white">A legal service built around the real marriage process</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                The expression court marriage is widely used in Pakistan, but it can create the wrong impression that an adult couple simply walks into a courtroom and a judge performs the marriage. For Muslim couples, the actual legal and documentary process normally centres on free consent, legal eligibility, Nikah requirements, accurate Nikah Nama completion and registration through the competent Nikah-registration framework.
              </p>
              <p>
                Our content and case handling are structured around those real stages. We distinguish the Nikah ceremony from marriage registration, and we distinguish both from later documents such as a computerised marriage certificate, certified copy, translation or attestation. This helps couples understand what has been completed and what remains to be done.
              </p>
              <p>
                We also avoid a one-size-fits-all view of marriage age and jurisdiction. Child-marriage laws can differ by province or territory and can change. The correct rule should therefore be checked for the place and date of the proposed marriage. Identity documents, previous marital status and local registration practice must be reviewed with the same care.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/20">
              <Award className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">40+ Years of Legal Experience</h3>
              <p className="text-sm text-slate-500">Marriage-service work is supported by senior legal experience across family, property, corporate and civil matters.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800">
              <ShieldCheck className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Confidential Case Handling</h3>
              <p className="text-sm text-slate-500">Personal information and communications are handled discreetly while recognising that a registered marriage creates an official record.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 sm:col-span-2">
              <Globe className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Pakistan & Overseas Support</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Local and overseas cases are reviewed for identity, attendance, representation, registration, translation and attestation requirements before a route is suggested.</p>
            </div>
          </div>
        </section>

        <section className="py-20 border-y border-slate-900 mb-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Our legal-service standards</h2>
            <p className="text-slate-400 leading-relaxed">Good marriage legal assistance is not only about arranging a ceremony. It is about reducing legal and documentary risk before it becomes a dispute.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {standards.map((item) => (
              <div key={item.title} className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="text-blue-500 mb-4" size={26} />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-14 mb-28">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Court Marriage services</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                A typical court marriage enquiry begins with legal eligibility and consent. We ask where the couple intends to marry, how old both parties are, what identity documents they hold and whether either person has been married before. These questions determine the correct next steps more reliably than a generic fee package.
              </p>
              <p>
                We then help the couple plan the Nikah, Mahr, witness arrangements and Nikah Nama details. Where a free-will marriage involves family opposition, we consider whether there is a genuine protection issue. Not every couple requires a court petition or police application, while some couples may need tailored protective advice. The facts should control the response.
              </p>
              <p>
                Registration is treated as a separate and important stage. Muslim marriages are registered through the competent Nikah Registrar and local-authority framework. Later certificate, translation and attestation work is explained separately so the couple understands the complete document chain.
              </p>
            </div>
            <Link to="/procedure" className="inline-block mt-7 text-blue-400 font-bold hover:text-blue-300">Read the Court Marriage procedure →</Link>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Online Nikah & overseas marriage cases</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                Online Nikah is particularly relevant where one or both parties live abroad. These cases require more than a video call. The legal team should identify how consent will be expressed, how witnesses will participate, whether a representative will act and whether any power of attorney needs translation or attestation.
              </p>
              <p>
                Remote Nikah can also raise genuine differences of religious opinion depending on the method used. We therefore favour case-specific guidance instead of claiming that every digital format is automatically Sharia compliant. Couples should understand the structure they are relying upon before the ceremony takes place.
              </p>
              <p>
                Overseas use adds another layer. Embassies, immigration authorities and foreign civil registries can request computerised certificates, translations, attestations or relationship evidence. Marriage registration in Pakistan does not by itself guarantee a visa or foreign administrative outcome.
              </p>
            </div>
            <Link to="/online-nikah-navigating-the-digital-path-to-marriage" className="inline-block mt-7 text-blue-400 font-bold hover:text-blue-300">Read the Online Nikah guide →</Link>
          </div>
        </section>

        <section className="bg-slate-900/30 border border-slate-800 rounded-[3rem] p-8 md:p-14 mb-28">
          <div className="text-center mb-12">
            <MapPin className="text-blue-500 mx-auto mb-4" size={38} />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Service coverage</h2>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">City-specific guidance matters because marriage-age rules and local registration practice can differ. Our existing service pages focus on the jurisdictions below.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ['Karachi', '/services/court-marriage-karachi'],
              ['Islamabad', '/services/court-marriage-islamabad'],
              ['Rawalpindi', '/services/court-marriage-rawalpindi'],
              ['Punjab', '/services/court-marriage-punjab']
            ].map(([city, path]) => (
              <Link key={city} to={path} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 text-center no-underline transition-colors">
                <span className="text-white font-bold">Court Marriage in {city}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-12 mb-28">
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800">
            <h2 className="text-3xl font-black text-white mb-6">What we do not promise</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>We do not promise that every marriage, registration and certificate will be completed on the same day.</p>
              <p>We do not describe every remote video Nikah as automatically valid without looking at the method used.</p>
              <p>We do not claim that one national office directly handles every marriage registration.</p>
              <p>We do not guarantee visas, immigration approvals or embassy acceptance merely because a marriage has been registered.</p>
              <p>We do not treat every family-opposition case as though it automatically requires court proceedings.</p>
            </div>
          </div>

          <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800">
            <h2 className="text-3xl font-black text-white mb-6">What clients can expect</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>A clear explanation of the legal and documentary steps relevant to the particular case.</p>
              <p>Review of identity, legal age, marital status and jurisdiction before the Nikah Nama is finalised.</p>
              <p>Transparent separation between professional services, registration work and later certificate or attestation requirements.</p>
              <p>City-specific guidance where local law or registration practice matters.</p>
              <p>Respectful and discreet communication about sensitive family and marriage issues.</p>
            </div>
          </div>
        </section>

        <section className="text-center p-12 rounded-[3rem] bg-gradient-to-t from-blue-600/10 to-transparent border border-blue-500/10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Speak with the Court Marriage legal team</h2>
          <p className="text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">Tell us your city, ages, nationality, current marital status and whether both parties can attend. That information allows a useful first assessment of the Nikah, registration and documentation route.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+923322908556" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-600/30 inline-block no-underline">Call +92 332 2908556</a>
            <a href="https://wa.me/923322908556" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-slate-900 border border-slate-800 text-white font-black rounded-2xl hover:bg-slate-800 transition-all no-underline">WhatsApp Support</a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
