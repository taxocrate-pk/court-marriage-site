import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Globe, Heart, MapPin, Scale, Shield, Users } from 'lucide-react';
import SEO from '../SEO.jsx';
import WeddingHeroImage from '../WeddingHeroImage.jsx';

const faqs = [
  {
    q: 'What is court marriage in Pakistan?',
    a: 'Court marriage is a commonly used expression for a marriage chosen by an adult couple and completed with legal and documentary assistance. It does not normally mean that a judge performs the Nikah in a courtroom. For Muslim couples, the practical process usually involves legal eligibility, free consent, Nikah formalities, careful Nikah Nama completion and registration through the competent Nikah-registration framework.'
  },
  {
    q: 'Is court marriage legal in Pakistan?',
    a: 'A marriage that satisfies the applicable legal and religious requirements and is properly registered can be legally recognised in Pakistan. The exact requirements depend on the parties, their religion, age, marital status and province or territory. The phrase court marriage is informal; the legal validity comes from the underlying marriage and registration process, not from the label itself.'
  },
  {
    q: 'Does court marriage require a judge or court appearance?',
    a: 'Not automatically. A Muslim Nikah is not ordinarily solemnised by a judge merely because people call it a court marriage. Lawyers may prepare affidavits or advise on protective proceedings where needed, but litigation and marriage registration are separate matters. Court action should be used only where the facts justify it.'
  },
  {
    q: 'What documents are normally required for court marriage?',
    a: 'Valid identity documents for both parties are the starting point. Witness particulars and previous-marriage documents may also be required. Overseas Pakistanis or foreign nationals can need passports, NICOP, powers of attorney, translations, attestations or other supporting papers depending on the case and intended use of the marriage documents.'
  },
  {
    q: 'What is the legal age for court marriage in Pakistan?',
    a: 'There is no responsible single age answer for every part of Pakistan because child-marriage laws can differ by province or territory and can change. The current rule applicable to the place of marriage should be checked before proceeding. Identity documents should also be reviewed carefully where either party is close to the legal threshold.'
  },
  {
    q: 'Can adults marry without family permission?',
    a: 'Where both parties are legally eligible and genuinely consenting, free consent is central to the marriage. Family disagreement can create practical or safety concerns, but it does not replace the couple’s own consent. If there are threats, coercion, confinement or harassment, separate advice on protection may be required.'
  },
  {
    q: 'Can court marriage be completed on the same day?',
    a: 'A straightforward Nikah may sometimes be arranged quickly after documents and eligibility have been checked, but a blanket same-day promise is not appropriate. Registration, certified copies and later computerised certificates may follow separate administrative timelines. Each stage should be explained separately.'
  },
  {
    q: 'Is Online Nikah valid in Pakistan?',
    a: 'Remote Nikah arrangements can be possible, especially for overseas couples, but the legal and Sharia position depends on how the Nikah is structured, how consent and witnesses are handled, and whether any representative or power of attorney is involved. A video call alone should not be advertised as automatically making every Nikah valid.'
  },
  {
    q: 'Is a Nikah Nama the same as a marriage certificate?',
    a: 'No. The Nikah Nama records the marriage and its particulars. Registration is a separate statutory step. A computerised marriage certificate may later be obtained through the relevant local authority system. Translation or attestation can also be required for overseas use.'
  },
  {
    q: 'Does NADRA directly register every marriage?',
    a: 'It is more accurate to say that Muslim marriages are registered through the competent Nikah Registrar and local-authority framework. Computerised certificates may use NADRA-linked identity data, but the marriage-registration process itself should not be reduced to the phrase NADRA registration.'
  },
  {
    q: 'How much does court marriage cost in Pakistan?',
    a: 'The cost depends on the city, case and services required. Consultation, Nikah arrangements, registration, certified copies, computerised certificate assistance, translation, attestation and urgent handling may be separate items. Overseas or foreign-national cases can require additional work. A transparent quotation should state what is included.'
  },
  {
    q: 'Can court marriage remain confidential?',
    a: 'Consultations can be handled discreetly and personal information should be protected, but a lawfully registered marriage creates an official record. Confidentiality should therefore mean responsible handling of the case, not a promise that a registered marriage will leave no official trace.'
  }
];

const Home = () => {
  const revealVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1.2, ease: 'easeInOut' } }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a }
    }))
  };

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Court Marriage Site',
    url: 'https://courtmarriage.site/',
    telephone: '+92 332 2908556',
    areaServed: 'Pakistan',
    serviceType: ['Court Marriage', 'Online Nikah', 'Nikah Nama Documentation', 'Marriage Registration Assistance'],
    description: 'Legal assistance for court marriage, Online Nikah, Nikah Nama documentation and marriage registration in Pakistan.'
  };

  return (
    <main className="bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      <SEO
        title="Court Marriage in Pakistan | Online Nikah Legal Services"
        description="Court Marriage in Pakistan with legal guidance on consent, documents, Nikah Nama, registration, Online Nikah, fees and overseas cases. Updated 2026."
        path="/"
        schema={[legalServiceSchema, faqSchema]}
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center pb-12 lg:pb-0">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-7 mt-16 lg:mt-20 tracking-tighter">
              <motion.span variants={revealVariants} initial="hidden" animate="visible" className="block pb-2">Court Marriage in Pakistan</motion.span>
              <motion.span variants={revealVariants} initial="hidden" animate="visible" transition={{ delay: 0.35 }} className="text-blue-500 block pb-3">& Online Nikah Services</motion.span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-normal text-blue-300">Legal guidance for Nikah, documentation and marriage registration</h2>

            <p className="text-base md:text-lg text-slate-400 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Court Marriage Site provides legal information and professional assistance for <strong className="text-slate-200">court marriage in Pakistan</strong>, Online Nikah, Nikah Nama documentation and marriage registration. The service is designed for couples who want a lawful, discreet and properly documented process in Karachi, Islamabad, Rawalpindi and Punjab, including overseas and free-will marriage cases.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="tel:+923322908556" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all text-center no-underline">Call for Case Review</a>
              <a href="https://wa.me/923322908556" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 border border-slate-700 hover:border-blue-500 text-white font-bold rounded-xl transition-all text-center no-underline">WhatsApp Now</a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="flex justify-center items-center w-full mt-2 lg:mt-16">
            <WeddingHeroImage
              alt="Court Marriage and Online Nikah legal services in Pakistan"
              priority
              className="max-w-lg mx-auto lg:mx-0"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Court Marriage in Pakistan: what the term really means</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-400 max-w-5xl mx-auto">
            <p>
              The phrase <strong className="text-slate-200">court marriage in Pakistan</strong> is widely used, but it is often misunderstood. It usually describes a marriage chosen by the couple and completed with legal help, especially where the couple wants independent documentation, privacy or advice because their families do not agree. It does not normally mean that a judge conducts a wedding ceremony inside a courtroom. For a Muslim couple, the marriage itself remains a Nikah and must satisfy the applicable legal and religious requirements.
            </p>
            <p>
              The legal work is mainly about getting the process right. The parties’ identity and age should be checked, free consent should be genuine, previous marital status should be clarified, the Nikah Nama should be completed accurately and the marriage should be registered through the competent system. Under the Muslim Family Laws Ordinance, 1961, Muslim marriages are required to be registered. That registration framework uses licensed Nikah Registrars and the relevant local authority rather than a generic national “court marriage office”.
            </p>
            <p>
              The legal age for marriage should also be checked by jurisdiction. Pakistan does not have one safe age statement that should be copied onto every city page without review. Sindh and the Islamabad Capital Territory have legislation treating a male or female under eighteen as a child, while the current rule applicable in Punjab or another jurisdiction should be verified before a proposed marriage. This is why a reliable service should check the place and date of the marriage instead of relying on an old nationwide assumption.
            </p>
            <p>
              Couples should also separate the marriage itself from any safety or protection issue. A couple marrying by choice does not automatically need court proceedings. If there are threats, coercion, confinement, harassment or a genuine risk of violence, however, the protection question may require separate legal advice. Marriage documents should not be used as a substitute for a proper safety assessment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Marriage legal services</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">Each service is handled as a separate legal and documentary task so the couple knows what is being arranged and what may still be required afterwards.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-900 rounded-[2rem] border border-slate-800">
            <Scale className="text-blue-500 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">Court Marriage Legal Assistance</h3>
            <p className="text-slate-400 mb-5 leading-relaxed">Case review for legal eligibility, free consent, identity, previous marital status, Nikah arrangements, Nikah Nama completion and the appropriate local registration route.</p>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex gap-2"><CheckCircle size={17} className="text-blue-500 shrink-0" /> Free-will marriage guidance</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-blue-500 shrink-0" /> Nikah and documentation planning</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-blue-500 shrink-0" /> Registration and certificate assistance</li>
            </ul>
          </div>

          <div className="p-8 bg-slate-900 rounded-[2rem] border border-slate-800">
            <Globe className="text-blue-500 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">Online Nikah & Overseas Cases</h3>
            <p className="text-slate-400 mb-5 leading-relaxed">Remote and overseas Nikah matters are reviewed for identity, consent, witness arrangements, representation, documentation and intended foreign use before a process is proposed.</p>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex gap-2"><CheckCircle size={17} className="text-blue-500 shrink-0" /> Overseas Pakistani coordination</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-blue-500 shrink-0" /> Power of attorney and representation review</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-blue-500 shrink-0" /> Translation and attestation guidance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <Shield className="text-blue-500 mb-5" size={42} />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Core legal checks before a court marriage</h2>
              <div className="space-y-5 text-slate-400 leading-relaxed">
                <p><strong className="text-white">Legal age and capacity:</strong> the current rule for the relevant province or territory must be checked. Identity documents should support the stated age and personal particulars.</p>
                <p><strong className="text-white">Free consent:</strong> both parties should understand the marriage and agree voluntarily. A free-will affidavit, where used, is supporting documentation; it is not a substitute for genuine consent.</p>
                <p><strong className="text-white">Previous marital status:</strong> a divorced, khula or widowed party may need documents establishing the legal position before a new Nikah is prepared.</p>
                <p><strong className="text-white">Mahr and Nikah Nama:</strong> Mahr, witness particulars, addresses and any special conditions should be discussed and recorded carefully rather than left to assumptions.</p>
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800">
              <FileText className="text-blue-500 mb-5" size={38} />
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6">Documents commonly reviewed</h2>
              <div className="space-y-5">
                {[
                  ['CNIC / identity documents', 'Current and legible identity records for both parties.'],
                  ['Witness particulars', 'Identity information for the witnesses required for the proposed Nikah.'],
                  ['Previous-marriage records', 'Relevant divorce, khula, talaq-effectiveness or death documentation where applicable.'],
                  ['Overseas documents', 'Passport, NICOP, visa, authority documents or attestation papers where the facts require them.']
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-4">
                    <CheckCircle className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="text-white font-bold">{title}</h3>
                      <p className="text-slate-500 text-sm mt-1">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-14">Court Marriage procedure in Pakistan</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ['1. Case review', 'Confirm the city, ages, identity, nationality, current marital status, attendance and any safety or overseas issues.'],
            ['2. Document verification', 'Check names, dates of birth, CNIC or passport details and any documents relating to a previous marriage.'],
            ['3. Nikah planning', 'Agree Mahr, witness arrangements, any special conditions and the practical structure of the Nikah.'],
            ['4. Nikah Nama', 'Complete the form carefully so identity particulars, Mahr and agreed conditions are recorded consistently.'],
            ['5. Registration', 'Use the competent Nikah Registrar and local-authority framework for the relevant jurisdiction.'],
            ['6. Post-registration documents', 'Obtain certified copies or a computerised certificate and arrange translation or attestation if required.']
          ].map(([title, text]) => (
            <div key={title} className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-slate-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          <div>
            <Heart className="text-blue-500 mb-5" size={40} />
            <h2 className="text-3xl font-black text-white mb-5">Online Nikah is not simply a video call</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>Online Nikah is useful where one or both parties are abroad or unable to attend the same place. The case still needs a proper structure for consent, witnesses, Mahr, identity and any representative acting on behalf of a party.</p>
              <p>Religious opinions can differ on some forms of remote participation. For that reason, a responsible Online Nikah service should identify the intended method and, where necessary, obtain guidance appropriate to the parties’ school of thought rather than claiming that every video-link Nikah is automatically valid.</p>
              <p>Registration and foreign use are separate questions. A Nikah that is properly solemnised still needs the correct documentation and registration route. If the marriage will be used for immigration or abroad, translation, attestation and destination-specific requirements should be considered separately.</p>
            </div>
            <Link to="/online-nikah-navigating-the-digital-path-to-marriage" className="inline-block mt-7 text-blue-400 font-bold hover:text-blue-300">Read the complete Online Nikah guide →</Link>
          </div>

          <div>
            <Users className="text-blue-500 mb-5" size={40} />
            <h2 className="text-3xl font-black text-white mb-5">City-specific Court Marriage services</h2>
            <p className="text-slate-400 leading-relaxed mb-7">Registration practice and marriage-age rules can vary by jurisdiction. Use the relevant city page for local guidance rather than applying one city’s assumptions everywhere.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ['Karachi', '/services/court-marriage-karachi'],
                ['Islamabad', '/services/court-marriage-islamabad'],
                ['Rawalpindi', '/services/court-marriage-rawalpindi'],
                ['Punjab', '/services/court-marriage-punjab']
              ].map(([city, path]) => (
                <Link key={city} to={path} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-colors no-underline">
                  <MapPin className="text-blue-500 mb-3" size={20} />
                  <span className="text-white font-bold">Court Marriage in {city}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-5 text-center">Frequently asked questions</h2>
        <p className="text-slate-500 text-center mb-12">These answers provide general information. Individual facts and local law can change the correct procedure.</p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl">
              <summary className="text-white font-bold cursor-pointer list-none flex justify-between gap-4">{faq.q}<span className="text-blue-500">+</span></summary>
              <p className="mt-4 text-slate-400 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6 text-center p-12 rounded-[3rem] border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Discuss your Court Marriage case confidentially</h2>
          <p className="text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">Share your city, ages, nationality, marital status and whether both parties can attend. The legal team can then identify the appropriate Nikah, registration and documentation route before giving a fee or timeline.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+923322908556" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl no-underline">Call +92 332 2908556</a>
            <Link to="/contact" className="px-8 py-4 border border-slate-700 hover:border-blue-500 text-white font-bold rounded-xl no-underline">Contact Legal Team</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
