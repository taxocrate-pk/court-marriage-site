import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { CheckCircle, FileCheck2, Globe, MessageCircle, Scale, ShieldCheck, Users } from 'lucide-react';
import SEO from '../SEO.jsx';
import WeddingHeroImage from '../WeddingHeroImage.jsx';

const faqs = [
  {
    q: 'What is Online Nikah in Pakistan?',
    a: 'Online Nikah is a remote marriage arrangement used when one or both parties cannot be physically present in the same place. The legal and Sharia position depends on how consent, witnesses, identity, Mahr and any representative are handled. A video call by itself should not be described as automatically making every Nikah valid.'
  },
  {
    q: 'Is Online Nikah legally recognised in Pakistan?',
    a: 'Recognition depends on whether the underlying marriage satisfies the applicable legal and religious requirements and whether the marriage is properly documented and registered. Remote participation does not remove the need for legal eligibility, free consent, accurate Nikah Nama documentation and registration through the competent framework.'
  },
  {
    q: 'Is Online Nikah Sharia compliant?',
    a: 'The answer can depend on the structure of the Nikah and the religious school or scholarly view followed by the parties. Ijab-o-Qabool, witnesses, Mahr, identity and the role of any representative need to be clear. Where the method of remote participation raises a genuine religious question, case-specific guidance should be obtained rather than relying on a marketing claim.'
  },
  {
    q: 'Can an overseas Pakistani perform Online Nikah with someone in Pakistan?',
    a: 'Yes, overseas cases can often be arranged, but the correct structure depends on who is abroad, who can attend in Pakistan, whether a representative will act, and how the final documents will be used. Passport, NICOP, power of attorney, translation or attestation requirements may also become relevant.'
  },
  {
    q: 'Can both bride and groom be outside Pakistan?',
    a: 'That can be possible in some arrangements, but the legal, Sharia and registration structure needs careful review. The parties’ locations, nationality, identity documents, witness arrangements, authority of any representative and intended registration jurisdiction all affect the correct process.'
  },
  {
    q: 'What documents are required for Online Nikah?',
    a: 'The usual starting point is valid identity documentation for both parties, such as CNIC, NICOP or passport as applicable. Witness particulars and previous-marriage documents may also be required. Overseas and foreign-national cases can require powers of attorney, translations, attestations or additional declarations depending on the facts.'
  },
  {
    q: 'Do we need a power of attorney for Online Nikah?',
    a: 'Not every remote arrangement uses the same method. A power of attorney may be relevant where a representative is authorised to act for a party, but the document and its scope should be reviewed carefully. The need for attestation or consular formalities can depend on where the document is executed and how it will be used.'
  },
  {
    q: 'Can Online Nikah be completed in one day?',
    a: 'A straightforward Nikah may sometimes be arranged quickly once eligibility, documents and the remote structure are clear. Registration, certified copies and later marriage certificates may take additional time. The timeline should therefore separate the Nikah stage from registration and post-registration documentation.'
  },
  {
    q: 'What is the Online Nikah fee in Pakistan?',
    a: 'There is no responsible single fee for every case. Professional consultation, Nikah arrangements, registration, representative documents, certified copies, translation, attestation and urgent handling can be separate items. Overseas and foreign-national matters can require additional work. A quotation should state what is included.'
  },
  {
    q: 'Is the Nikah Nama enough for a spouse visa?',
    a: 'A registered Nikah Nama is an important marriage record, but an embassy or immigration authority may require a computerised marriage certificate, translation, attestation, photographs, relationship evidence or other documents. Requirements vary by country and visa category, and no marriage service can guarantee a visa outcome.'
  },
  {
    q: 'Can Online Nikah be registered in Karachi, Islamabad or Rawalpindi?',
    a: 'Registration depends on the facts and the competent local framework. The place of the parties, the Nikah arrangements and the intended registration jurisdiction should be reviewed before a route is selected. One city’s registration practice should not be assumed to apply identically everywhere.'
  },
  {
    q: 'Is Online Nikah private and confidential?',
    a: 'Consultations and document handling can be managed discreetly, but a lawfully registered marriage creates an official record. Confidentiality should mean careful handling of personal information and communications, not a promise that a registered marriage will remain invisible to competent authorities.'
  }
];

const OnlineNikah = () => {
  const waNumber = '923322908556';
  const waMessage = encodeURIComponent('Assalam-o-Alaikum Shah Sahib, mujhe Online Nikah ke process, documents aur fees ke bare mein maloomat chahiye.');
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a }
    }))
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Online Nikah in Pakistan - Court Marriage Site',
    url: 'https://courtmarriage.site/online-nikah-navigating-the-digital-path-to-marriage',
    telephone: '+92 332 2908556',
    areaServed: 'Pakistan',
    serviceType: 'Online Nikah legal and documentation assistance',
    description: 'Online Nikah assistance for Pakistan and overseas cases, including legal review, documents, registration and post-marriage certificate guidance.'
  };

  const steps = [
    ['1. Initial legal review', 'Confirm the parties’ ages, nationality, identity documents, marital status, current locations and the jurisdiction in which the marriage is expected to be registered.'],
    ['2. Choose the remote structure', 'Decide whether the parties will participate directly, whether any representative will act, and whether a power of attorney or other authority document is needed.'],
    ['3. Confirm Sharia arrangements', 'Clarify Ijab-o-Qabool, witnesses, Mahr and any school-of-thought issue created by the proposed remote method.'],
    ['4. Prepare Nikah Nama details', 'Check names, identity numbers, addresses, Mahr, marital status and special conditions before the document is signed.'],
    ['5. Conduct the Nikah', 'Carry out the Nikah using the agreed method with clear consent, identity and witness arrangements.'],
    ['6. Complete registration', 'Use the competent Nikah Registrar and local-authority framework for the particular case rather than assuming one nationwide registration office.'],
    ['7. Obtain later documents', 'Where needed, obtain certified copies, a computerised marriage certificate, translation or attestation for use in Pakistan or abroad.']
  ];

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-300 overflow-hidden pt-24 md:pt-32 pb-20">
      <SEO
        title="Online Nikah in Pakistan | Process, Fees & Registration"
        description="Online Nikah in Pakistan with legal guidance on remote consent, witnesses, documents, registration, fees, overseas cases and marriage certificates."
        path="/online-nikah-navigating-the-digital-path-to-marriage"
        schema={[serviceSchema, faqSchema]}
      />

      <div className="absolute top-0 -left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-600/10 rounded-full blur-[100px] md:blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-72 md:w-96 h-72 md:h-96 bg-blue-900/10 rounded-full blur-[100px] md:blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {['Overseas Support', 'Case-Specific Sharia Review', 'Marriage Registration Guidance'].map((item) => (
                <span key={item} className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/5 px-3 py-1.5 rounded-full border border-blue-400/20">{item}</span>
              ))}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                Online Nikah <span className="text-blue-500 block">in Pakistan</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-300">Remote Nikah, legal documentation and registration guidance</h2>
            </div>

            <div className="space-y-5 text-slate-400 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-slate-200">Online Nikah in Pakistan</strong> is commonly used where one or both parties cannot attend the same place for the marriage. It can be particularly useful for overseas Pakistanis, couples living in different cities and families managing time-sensitive travel or immigration arrangements. The process, however, should not be reduced to a video call and a scanned Nikah Nama.
              </p>
              <p>
                A responsible Online Nikah service first examines legal eligibility, identity, free consent, previous marital status and the intended registration jurisdiction. It then considers how Ijab-o-Qabool, witnesses, Mahr and any representative will be handled. Where the chosen remote method raises a genuine religious question, the parties should receive guidance suitable to their school of thought instead of a blanket claim that every digital format is automatically valid.
              </p>
              <p>
                Registration is a separate step. For Muslim marriages in Pakistan, the marriage should be documented and registered through the competent Nikah Registrar and local-authority framework. A later computerised marriage certificate, translation or attestation may also be required depending on how and where the marriage documents will be used.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-center no-underline flex items-center justify-center gap-2"><MessageCircle size={18} /> Discuss Online Nikah</a>
              <a href="tel:+923322908556" className="px-7 py-4 border border-slate-700 hover:border-blue-500 text-white font-bold rounded-xl text-center no-underline">Call +92 332 2908556</a>
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <WeddingHeroImage
                alt="Online Nikah and wedding legal services in Pakistan"
                priority
              />
            </motion.div>

            <motion.aside initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-800 shadow-2xl">
              <FileCheck2 className="text-blue-500 mb-5" size={38} />
              <h2 className="text-2xl font-bold text-white mb-7">Online Nikah documents commonly reviewed</h2>
              <div className="space-y-6">
                {[
                  ['Identity documents', 'CNIC, NICOP or passport as appropriate for each party.'],
                  ['Previous-marriage records', 'Relevant divorce, khula, talaq-effectiveness or death documentation where applicable.'],
                  ['Witness information', 'Identity particulars for witnesses arranged for the proposed Nikah.'],
                  ['Authority documents', 'Power of attorney or representative authority where the chosen structure requires it.'],
                  ['Overseas formalities', 'Translation, attestation or consular requirements depending on the destination and purpose.']
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-4">
                    <CheckCircle size={20} className="text-blue-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-bold">{title}</h3>
                      <p className="text-sm text-slate-500 mt-1">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-8 leading-relaxed">Exact documents depend on nationality, location, marital history, representation and the intended use of the marriage record. A case review should come before a fixed checklist.</p>
            </motion.aside>
          </div>
        </section>

        <section className="py-24 max-w-5xl">
          <Globe className="text-blue-500 mb-5" size={42} />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-7">How Online Nikah works for Pakistan and overseas couples</h2>
          <div className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed">
            <p>
              Online Nikah cases usually begin because distance makes a conventional gathering difficult. One person may be in Pakistan and the other in the United Kingdom, United States, Canada, UAE, Saudi Arabia or another country. In other cases both parties are abroad but want the marriage connected with Pakistan for family or registration reasons. These situations look similar from a distance, but the legal and documentary structure can be very different.
            </p>
            <p>
              The first question is who will actually participate in the Nikah. Some arrangements involve both parties communicating directly. Others use a properly authorised representative for one party. Where representation is used, the authority document should be clear about the acts the representative may perform and should be prepared in a form suitable for the place where it will be relied upon. If the authority is executed abroad, attestation or consular requirements may also need to be considered.
            </p>
            <p>
              Identity is equally important. Names on passports, CNICs and NICOP cards should be checked for spelling and consistency. Dates of birth matter because the applicable marriage-age law must be satisfied. Previous marital status also matters: if either party is divorced, has obtained khula or is widowed, the relevant document should be examined before a new Nikah Nama is prepared.
            </p>
            <p>
              The religious structure should then be agreed. Ijab-o-Qabool must be clear, Mahr should be settled and witness arrangements should be appropriate to the method used. Some forms of remote participation are treated differently by different scholars or schools of thought. A professional service should acknowledge that difference where it matters and help the parties choose a structure they are comfortable relying upon.
            </p>
          </div>
        </section>

        <section className="py-20 border-y border-slate-900">
          <div className="text-center mb-14">
            <Scale className="text-blue-500 mx-auto mb-4" size={40} />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Online Nikah process step by step</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">The correct route should be chosen before the ceremony so the Nikah, registration and later documents fit together.</p>
          </div>
          <div className="max-w-5xl mx-auto space-y-5">
            {steps.map(([title, text]) => (
              <div key={title} className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 grid lg:grid-cols-2 gap-12">
          <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] border border-slate-800">
            <Users className="text-blue-500 mb-5" size={38} />
            <h2 className="text-3xl font-black text-white mb-6">Consent, witnesses and Mahr</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>Online Nikah does not reduce the importance of free consent. The identity of each party should be clear and the acceptance of the marriage should be deliberate, not inferred from a message sent by someone else.</p>
              <p>Witness arrangements should be decided according to the proposed Nikah method and the religious guidance followed by the parties. Where there is uncertainty, the question should be resolved before the ceremony rather than after the documents are signed.</p>
              <p>Mahr should be agreed clearly and entered correctly in the Nikah Nama. If any payment is prompt, deferred, property-based or subject to a special condition, the wording should be precise enough to avoid future disagreement.</p>
            </div>
          </div>

          <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] border border-slate-800">
            <ShieldCheck className="text-blue-500 mb-5" size={38} />
            <h2 className="text-3xl font-black text-white mb-6">Registration and official documents</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>The Nikah ceremony and marriage registration are connected but distinct. For Muslim marriages, the registration stage should be completed through the competent Nikah Registrar and local-authority framework for the relevant case.</p>
              <p>A registered Nikah Nama may later support issuance of a computerised marriage certificate. That later document is often useful for immigration, banking and other official purposes, but it should not be confused with the Nikah itself.</p>
              <p>If the marriage will be used abroad, translation, Ministry of Foreign Affairs attestation or destination-country requirements may need to be considered. No service should promise embassy or visa acceptance without checking the relevant foreign authority’s rules.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600/5 -mx-6 px-6 md:rounded-[3rem] md:mx-0 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Online Nikah fees in Pakistan</h2>
              <div className="space-y-5 text-slate-400 leading-relaxed">
                <p>Online Nikah fees should be quoted according to the work actually required. A local case where both parties have clear documents is not the same as a case involving a foreign national, an overseas power of attorney, urgent registration, translation and attestation.</p>
                <p>A transparent quotation may separate professional consultation, Nikah Khawan or ceremony arrangements, registration support, certified copies, computerised certificate assistance, translation, attestation and courier work. The couple should know which of these items are included before proceeding.</p>
                <p>Mahr is not a professional fee. It is a marital obligation agreed between the parties and should be recorded separately in the Nikah Nama.</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">How long does Online Nikah take?</h2>
              <div className="space-y-5 text-slate-400 leading-relaxed">
                <p>A straightforward Nikah can sometimes be arranged quickly once identity, eligibility and the remote structure are confirmed. That does not mean every later document can be completed at the same time.</p>
                <p>Registration, certified copies, computerised certificates, translations and attestations can each have their own processing time. Overseas cases can also be delayed if an authority document must first be executed and attested abroad.</p>
                <p>A useful timeline should therefore identify the expected date of the Nikah separately from the expected completion of registration and post-registration documents.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-6">Online Nikah services by location</h2>
          <p className="text-slate-400 text-center max-w-3xl mx-auto mb-10">If the marriage will be registered in Pakistan, local jurisdiction still matters. These Court Marriage city pages explain the related in-person and registration considerations.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              ['Karachi', '/services/court-marriage-karachi'],
              ['Islamabad', '/services/court-marriage-islamabad'],
              ['Rawalpindi', '/services/court-marriage-rawalpindi'],
              ['Punjab', '/services/court-marriage-punjab']
            ].map(([city, path]) => (
              <Link key={city} to={path} className="p-5 bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl text-center text-white font-bold no-underline transition-colors">{city}</Link>
            ))}
          </div>
        </section>

        <section className="py-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-5">Online Nikah FAQs</h2>
          <p className="text-slate-500 text-center mb-12">General guidance only; remote marriage arrangements should be reviewed on their own facts.</p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl">
                <summary className="text-white font-bold cursor-pointer list-none flex justify-between gap-4">{faq.q}<span className="text-blue-500">+</span></summary>
                <p className="mt-4 text-slate-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="text-center p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-slate-900 border border-blue-500/20">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Need an Online Nikah case review?</h2>
          <p className="text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">Share where both parties are located, their nationality, ages, marital status and whether anyone will act through a representative. The legal team can then suggest a suitable Nikah, registration and documentation route.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl no-underline">WhatsApp Online Nikah Team</a>
            <Link to="/contact" className="px-8 py-4 border border-slate-700 hover:border-blue-500 text-white font-bold rounded-xl no-underline">Contact Legal Team</Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OnlineNikah;
