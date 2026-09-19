import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, HeartHandshake, MapPin, MessageCircle, Scale, ShieldCheck } from 'lucide-react';
import SEO from '../../SEO.jsx';
import WeddingHeroImage from '../../WeddingHeroImage.jsx';

const BASE_URL = 'https://courtmarriage.site';

const ServiceLayout = ({
  city,
  path,
  metaTitle,
  metaDescription,
  description,
  phone,
  displayPhone,
  localOverview = [],
  areas = [],
  localRegistration,
  localPlanning,
  faqs = []
}) => {
  const waNumber = phone.replace(/\D/g, '');
  const waMessage = encodeURIComponent(`Assalam-o-Alaikum, mujhe Court Marriage in ${city} ke process, documents aur fee ke bare mein maloomat chahiye.`);
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  const steps = [
    {
      title: 'Confidential case review',
      text: `The first step is to review the couple’s circumstances, identity documents, marital status, applicable minimum-age law and the place where the marriage will be registered. A responsible Court Marriage in ${city} service should identify any special issue before making a timeline or fee promise.`
    },
    {
      title: 'Identity and eligibility check',
      text: 'CNICs, passports or other identity documents are checked for correct names, dates of birth and current particulars. If either party was previously married, the relevant divorce, talaq, khula or death documentation may also need to be reviewed before the Nikah Nama is prepared.'
    },
    {
      title: 'Nikah arrangements and free consent',
      text: 'The marriage must be based on free consent. The Nikah arrangements should address Ijab-o-Qabool, Mahr, witnesses and any agreed special conditions. Religious questions can differ by school of thought and personal circumstances, so blanket answers should be avoided where genuine differences exist.'
    },
    {
      title: 'Nikah Nama completion',
      text: 'The Nikah Nama should be completed carefully and consistently. Names, CNIC details, addresses, Mahr, marital status and agreed conditions deserve particular attention because mistakes can create difficulty later in registration, immigration, banking, inheritance or family proceedings.'
    },
    {
      title: 'Registration with the competent authority',
      text: 'For Muslim marriages, registration is dealt with through the statutory Nikah registration framework. The appropriate Nikah Registrar and local authority depend on the relevant jurisdiction and registration practice. The legal team should confirm the competent registration channel for the particular case.'
    },
    {
      title: 'Certificate and post-marriage guidance',
      text: 'After registration, couples may require certified copies, a computerised marriage certificate, translation or attestation for overseas use. These are separate post-marriage requirements and should not be confused with the Nikah itself or with the original Nikah Nama.'
    }
  ];

  const requirements = [
    {
      title: 'Identity documents',
      text: 'Valid CNICs for Pakistani citizens are normally central to the documentation process. Passports, NICOP or other documents may be relevant for overseas or foreign-national cases.'
    },
    {
      title: 'Lawful age and capacity',
      text: 'Both parties must satisfy the minimum marriage-age and capacity requirements applicable to the relevant province or territory. The rule should be checked for the specific jurisdiction rather than assumed from a nationwide age figure.'
    },
    {
      title: 'Free consent',
      text: 'A marriage should not be based on force, coercion or misrepresentation. Where family opposition or a safety concern exists, the legal strategy should be considered separately from the marriage ceremony itself.'
    },
    {
      title: 'Witnesses and Mahr',
      text: 'Witness arrangements and Mahr should be settled before the Nikah. The details should be accurately entered in the Nikah Nama and explained to the parties before signatures are obtained.'
    }
  ];

  const faqSchema = faqs.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  } : null;

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `Court Marriage in ${city} - Court Marriage Site`,
    url: `${BASE_URL}${path}`,
    areaServed: city,
    serviceType: `Court Marriage legal assistance in ${city}`,
    telephone: displayPhone,
    description: metaDescription
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: `Court Marriage in ${city}`, item: `${BASE_URL}${path}` }
    ]
  };

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-300 overflow-hidden pt-32 pb-20">
      <SEO
        title={metaTitle}
        description={metaDescription}
        path={path}
        schema={[legalServiceSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
              Marriage Legal Services in {city}
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter">
              Court Marriage <span className="text-blue-500">in {city}</span>
            </h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-lg mb-7 leading-relaxed">
              {description}
            </motion.p>

            <p className="text-slate-400 leading-relaxed mb-8">
              The expression <strong className="text-slate-200">court marriage in {city}</strong> is commonly used for a marriage chosen by an adult couple and completed with legal and documentary assistance. It does not automatically mean that a judge performs the marriage inside a courtroom. For a Muslim couple, the practical work normally centres on lawful consent, Nikah requirements, accurate Nikah Nama documentation and registration through the competent Nikah-registration channel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={`tel:${phone}`} className="px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-center transition-all no-underline">
                Call {displayPhone}
              </a>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-7 py-4 border border-slate-700 hover:border-blue-500 text-white font-bold rounded-xl text-center transition-all no-underline flex items-center justify-center gap-2">
                <MessageCircle size={18} /> WhatsApp Case Review
              </a>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Local planning for Court Marriage in {city}</h2>
              <p className="text-slate-400 leading-relaxed">{localPlanning}</p>
              {areas.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {areas.map((area) => (
                    <span key={area} className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
                      {area}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <WeddingHeroImage
                alt={`Wedding couple for Court Marriage services in ${city}`}
                priority
              />
            </motion.div>

            <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">
              <FileText className="text-blue-500 mb-5" size={38} />
              <h2 className="text-2xl font-bold text-white mb-6">Documents commonly reviewed</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold">Bride and groom</h3>
                  <p className="text-sm text-slate-400 mt-1">CNIC or other valid identity document, current particulars and contact information.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold">Previous marital status</h3>
                  <p className="text-sm text-slate-400 mt-1">Where applicable, relevant divorce, khula, talaq-effectiveness or death documentation should be reviewed.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold">Witness information</h3>
                  <p className="text-sm text-slate-400 mt-1">Identity particulars for the witnesses required for the proposed Nikah arrangements.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold">Overseas or foreign cases</h3>
                  <p className="text-sm text-slate-400 mt-1">Passport, visa, NICOP, power of attorney or consular documents may become relevant depending on the facts.</p>
                </div>
              </div>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="w-full mt-9 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 no-underline">
                <HeartHandshake size={19} /> Discuss Your Case
              </a>
              <p className="text-xs text-slate-500 mt-5 leading-relaxed">Document requirements vary by nationality, marital history, registration jurisdiction and intended overseas use. A case review should come before any fixed promise.</p>
            </motion.aside>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="text-blue-500" />
              <h2 className="text-3xl md:text-4xl font-black text-white">What Court Marriage in {city} actually involves</h2>
            </div>
            <div className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed">
              {localOverview.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              <p>
                Legal assistance is most useful when it prevents avoidable mistakes. Names and identity numbers should match the source documents, free consent should be clear, Mahr and agreed conditions should be recorded carefully, and the registration route should be confirmed before the couple relies on a certificate for immigration, employment, inheritance or any other official purpose.
              </p>
              <p>
                Couples should also distinguish between the <strong className="text-slate-200">Nikah ceremony</strong>, the <strong className="text-slate-200">registered Nikah Nama</strong> and any later <strong className="text-slate-200">computerised marriage certificate</strong>. These are connected stages, but they are not the same document and should not be described as though a single national authority performs every step.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 border-y border-slate-900">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ShieldCheck className="text-blue-500 mx-auto mb-4" size={40} />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Legal requirements for Court Marriage in {city}</h2>
            <p className="text-slate-400 leading-relaxed">The exact legal position depends on the parties and the applicable jurisdiction. These are the core points normally checked before proceeding.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((item) => (
              <div key={item.title} className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="text-blue-500 mb-4" size={26} />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-14">Step-by-step Court Marriage procedure in {city}</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.title} className="grid md:grid-cols-[90px_1fr] gap-5 p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                  <div className="text-4xl font-black text-blue-500/50">{String(index + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30 -mx-6 px-6 md:rounded-[3rem] md:mx-0 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <MapPin className="text-blue-500 mb-4" size={34} />
              <h2 className="text-3xl font-black text-white mb-5">Marriage registration in {city}</h2>
              <p className="text-slate-400 leading-relaxed mb-5">{localRegistration}</p>
              <p className="text-slate-400 leading-relaxed">
                Registration should be planned around the competent local authority and the correct Nikah Registrar rather than a generic promise of “NADRA registration”. NADRA-linked identity data may be relevant to official records, but the marriage-registration process itself should be described accurately according to the applicable local framework.
              </p>
            </div>
            <div>
              <Scale className="text-blue-500 mb-4" size={34} />
              <h2 className="text-3xl font-black text-white mb-5">Fees and completion time</h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                There is no responsible single fee or guaranteed completion time for every Court Marriage in {city} matter. Professional fee, Nikah arrangements, registration charges, certified copies, translations, attestation and urgent document handling are different cost heads. Overseas and foreign-national cases can require additional work.
              </p>
              <p className="text-slate-400 leading-relaxed">
                A clear quotation should state what is included and what is not. Likewise, “same-day court marriage” should not be used as a blanket promise: a Nikah may be arranged quickly in a straightforward case, while registration or later certificates can follow their own administrative timelines.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-5">Frequently asked questions about Court Marriage in {city}</h2>
          <p className="text-slate-500 text-center mb-12">General information only; individual facts can change the legal and documentary requirements.</p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl">
                <summary className="text-white font-bold cursor-pointer list-none flex justify-between gap-5">
                  {faq.q}<span className="text-blue-500">+</span>
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="text-center p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-slate-900 border border-blue-500/20">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Need a confidential Court Marriage case review in {city}?</h2>
          <p className="text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">Share your city, ages, nationality, current marital status and whether both parties can attend. The legal team can then identify the appropriate Nikah, registration and documentation route before giving a fee or timeline.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${phone}`} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl no-underline">Call {displayPhone}</a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-blue-500 text-white font-bold rounded-xl no-underline">WhatsApp Now</a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServiceLayout;
