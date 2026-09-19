import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Scale, ShieldCheck } from 'lucide-react';
import SEO from '../SEO.jsx';
import WeddingHeroImage from '../WeddingHeroImage.jsx';

const faqs = [
  {
    q: 'What is the first step in the court marriage procedure in Pakistan?',
    a: 'The first step is a legal and documentary review. The couple should confirm the relevant city, their ages, identity documents, current marital status, nationality and whether both can attend. Any overseas, protection or previous-marriage issue should be identified before the Nikah Nama is prepared.'
  },
  {
    q: 'Does the court marriage procedure require a court hearing?',
    a: 'Not automatically. The term court marriage is commonly used for a free-will marriage handled with legal assistance, but a Muslim Nikah is not ordinarily performed by a judge merely because of that label. Court proceedings may be relevant only where a separate legal issue, such as protection, actually requires them.'
  },
  {
    q: 'What documents are checked before court marriage?',
    a: 'Valid identity documents for both parties are normally essential. Witness particulars and previous-marriage documents may also be required. Overseas Pakistanis or foreign nationals can need passports, NICOP, powers of attorney, translations, attestations or other supporting papers depending on the case.'
  },
  {
    q: 'How is legal age checked for court marriage?',
    a: 'The current marriage-age law applicable in the relevant province or territory should be checked at the time of the proposed marriage. Dates of birth should be verified from reliable identity documents. A single nationwide age statement should not be assumed where local laws differ or have changed.'
  },
  {
    q: 'What happens if either party was married before?',
    a: 'The present legal status should be confirmed before a new Nikah Nama is prepared. Depending on the facts, the lawyer may need to review divorce, khula, talaq-effectiveness or death documentation. A pending case or informal separation should not automatically be treated as proof that a previous marriage has legally ended.'
  },
  {
    q: 'When is the Nikah Nama completed?',
    a: 'The relevant particulars should be reviewed before signatures are obtained. Names, identity numbers, addresses, Mahr, witness details, marital status and any agreed conditions should be entered carefully. The couple should understand the entries rather than signing a partially completed form without review.'
  },
  {
    q: 'How is a Muslim marriage registered in Pakistan?',
    a: 'The marriage is registered through the competent Nikah Registrar and local-authority framework. The correct registration route depends on the relevant jurisdiction. A computerised marriage certificate can be a later official record, but it should not be confused with the Nikah ceremony or the original Nikah Nama.'
  },
  {
    q: 'Can the whole court marriage procedure be completed in one day?',
    a: 'A straightforward Nikah may sometimes be arranged quickly once documents and eligibility are clear, but registration, certified copies and later certificates can take additional time. A responsible timeline should explain each stage separately instead of making a universal same-day promise.'
  },
  {
    q: 'What if the couple faces family opposition?',
    a: 'Family disagreement does not automatically change the couple’s own consent where both are legally eligible, but a genuine threat, confinement or harassment issue may require separate legal advice. Protection should be assessed on its own facts rather than treated as a standard part of every marriage package.'
  },
  {
    q: 'How does the court marriage procedure work for overseas Pakistanis?',
    a: 'The legal team should determine where each party is located, who can attend, whether a representative will act and how the final documents will be used. A power of attorney, translation, attestation or destination-country requirement may need to be addressed separately from the Nikah itself.'
  },
  {
    q: 'How much does the court marriage procedure cost?',
    a: 'The fee depends on the actual work. Consultation, Nikah arrangements, registration, certified copies, computerised certificate assistance, translation, attestation and urgent handling may be separate cost heads. A clear quotation should state what is included before the couple proceeds.'
  },
  {
    q: 'What should we receive after the procedure is complete?',
    a: 'The expected documents depend on the service requested. The couple may receive the completed and registered Nikah Nama and, where requested and available through the relevant authority, a later computerised marriage certificate or certified copies. Overseas use may require further translation or attestation.'
  }
];

const Procedure = () => {
  const waNumber = '923331127834';
  const waMessage = encodeURIComponent('Assalam-o-Alaikum Shah Sahib, Procedure page dekh kar rabta kar raha hoon. Mujhe Court Marriage process aur documents ki details chahiye.');
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  const steps = [
    {
      number: '01',
      title: 'Confidential case review',
      tag: 'Planning',
      description: 'Confirm the city, ages, nationality, identity documents, current marital status, attendance and intended use of the marriage documents. Any overseas, protection or previous-marriage issue should be identified before a process or timeline is promised.'
    },
    {
      number: '02',
      title: 'Legal eligibility and identity verification',
      tag: 'Eligibility',
      description: 'Check the marriage-age law currently applicable in the relevant province or territory, then match names, dates of birth and identity numbers across CNICs, passports or other reliable documents.'
    },
    {
      number: '03',
      title: 'Previous marital status review',
      tag: 'Status',
      description: 'If either party has been married before, review the relevant divorce, khula, talaq-effectiveness or death documentation. The legal position should be clear before a new Nikah Nama is prepared.'
    },
    {
      number: '04',
      title: 'Nikah arrangements and free consent',
      tag: 'Nikah',
      description: 'Confirm genuine consent, Mahr, witness arrangements and any special conditions. If the couple is using a remote or representative structure, the legal and Sharia method should also be settled in advance.'
    },
    {
      number: '05',
      title: 'Nikah Nama preparation',
      tag: 'Documents',
      description: 'Complete names, identity particulars, addresses, marital status, Mahr and agreed conditions carefully. The parties should understand the entries before signatures are obtained.'
    },
    {
      number: '06',
      title: 'Nikah solemnisation',
      tag: 'Ceremony',
      description: 'Conduct the Nikah using the agreed lawful structure with clear consent and witness arrangements. The phrase court marriage does not normally mean that a judge conducts the ceremony inside a courtroom.'
    },
    {
      number: '07',
      title: 'Marriage registration',
      tag: 'Registration',
      description: 'Submit the marriage through the competent Nikah Registrar and local-authority framework for the relevant jurisdiction. Registration should not be described inaccurately as though one national office handles every case.'
    },
    {
      number: '08',
      title: 'Post-registration documents',
      tag: 'Certificates',
      description: 'Where required, obtain certified copies or a computerised marriage certificate and arrange translation or attestation for overseas use. These later documents are separate from the Nikah itself.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a }
    }))
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Court Marriage Procedure in Pakistan',
    description: 'A step-by-step legal and documentary guide to court marriage in Pakistan.',
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.description
    }))
  };

  return (
    <main className="bg-slate-950 min-h-screen py-24 px-6 relative overflow-hidden text-slate-300">
      <SEO
        title="Court Marriage Procedure in Pakistan | Step-by-Step Guide"
        description="Court Marriage procedure in Pakistan explained step by step: age, consent, documents, Nikah Nama, registration, fees, overseas cases and certificates."
        path="/procedure"
        schema={[howToSchema, faqSchema]}
      />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/5 rounded-full blur-[100px] -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-20">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">Updated 2026</div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Court Marriage <span className="text-blue-500">Procedure in Pakistan</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              A practical step-by-step guide to legal eligibility, free consent, Nikah arrangements, Nikah Nama documentation, marriage registration and post-registration certificates. The correct procedure depends on the couple’s city, age, marital status, nationality and whether the case is local, overseas or affected by a genuine protection issue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <a href="tel:+923331127834" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl no-underline">Call +92 333 1127834</a>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-slate-700 hover:border-blue-500 text-white font-bold rounded-xl no-underline">WhatsApp Case Review</a>
            </div>
          </div>

          <WeddingHeroImage
            alt="Wedding couple illustrating the Court Marriage procedure in Pakistan"
            priority
          />
        </motion.header>

        <section className="grid lg:grid-cols-2 gap-12 mb-24">
          <div>
            <Scale className="text-blue-500 mb-5" size={40} />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Before starting the court marriage procedure</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                The court marriage procedure should begin with the facts of the couple, not with a standard affidavit or a pre-printed package. The legal adviser should first ask where the marriage will take place, how old both parties are, what identity documents they have, whether either person has been married before and whether both can attend in person.
              </p>
              <p>
                The phrase <strong className="text-slate-200">court marriage</strong> is informal. It usually describes a marriage by choice where the couple seeks legal assistance with documentation and registration. A Muslim Nikah is not ordinarily performed by a judge simply because people use the word court. Court proceedings become relevant only where a separate legal issue genuinely requires them.
              </p>
              <p>
                Legal age must be checked according to the current law of the relevant province or territory. Pakistan should not be treated as though every jurisdiction has always had one identical age rule. This is particularly important where the date of birth on a CNIC, B-Form or passport is close to the legal threshold.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800">
            <ShieldCheck className="text-blue-500 mb-5" size={40} />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">Core checks before the Nikah</h2>
            <div className="space-y-5">
              {[
                ['Free consent', 'Both parties should understand and voluntarily accept the marriage.'],
                ['Identity', 'Names, dates of birth and identity numbers should match reliable documents.'],
                ['Marital status', 'Any previous marriage should be legally and documentarily clarified.'],
                ['Mahr', 'Prompt or deferred Mahr and any agreed property or amount should be recorded clearly.'],
                ['Witnesses', 'Witness arrangements should be settled before the Nikah is conducted.'],
                ['Jurisdiction', 'The intended place of registration should be identified before forms are finalised.']
              ].map(([title, text]) => (
                <div key={title} className="flex gap-4">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-bold">{title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-14">Court Marriage procedure step by step</h2>
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12 space-y-12">
            {steps.map((step, index) => (
              <motion.div key={step.number} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="relative pl-10 group">
                <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                  <span className="text-5xl font-black text-slate-900 group-hover:text-blue-600/30 transition-all duration-500 leading-none">{step.number}</span>
                  <span className="inline-block px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest w-fit">{step.tag}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 border-y border-slate-900 mb-24">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <FileText className="text-blue-500 mb-5" size={40} />
              <h2 className="text-3xl font-black text-white mb-6">Documents in the court marriage process</h2>
              <div className="space-y-5 text-slate-400 leading-relaxed">
                <p>Valid identity documents for the bride and groom are normally the foundation of the file. Witness identity particulars are also commonly required. If either party is divorced, has obtained khula or is widowed, documents relating to that previous marital status should be reviewed before a new Nikah Nama is prepared.</p>
                <p>Overseas and foreign-national cases can require additional papers. These may include passports, NICOP, visas, powers of attorney, translations, attestations or consular documents. No single checklist should be presented as universal because nationality, location and intended use can change the documentary requirements.</p>
                <p>Documents should also be internally consistent. A difference in name spelling, date of birth or identity number between a passport and CNIC can cause difficulty later. It is better to identify such discrepancies before the Nikah rather than after the marriage documents are needed for immigration, inheritance or another official purpose.</p>
              </div>
            </div>

            <div>
              <Scale className="text-blue-500 mb-5" size={40} />
              <h2 className="text-3xl font-black text-white mb-6">Nikah Nama and marriage registration</h2>
              <div className="space-y-5 text-slate-400 leading-relaxed">
                <p>The Nikah Nama is not merely a formality. It records identity information, Mahr, marital status and other important conditions. Empty columns or incorrect entries can create later disputes. The parties should understand the entries before the document is signed.</p>
                <p>For Muslim marriages, registration is completed through the competent Nikah Registrar and local-authority framework. The appropriate registration channel depends on the jurisdiction. This is more accurate than saying that NADRA directly registers every marriage.</p>
                <p>A computerised marriage certificate may be obtained after registration through the relevant local system. It can be useful for official and overseas purposes, but it is a later record and should not be confused with the Nikah ceremony or the original Nikah Nama.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 mb-24">
          <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] border border-slate-800">
            <h2 className="text-3xl font-black text-white mb-6">Court Marriage fees</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>There is no responsible universal fee for every court marriage procedure. A simple local file is different from an overseas or foreign-national matter that requires representation, translation, attestation or urgent handling.</p>
              <p>A transparent quotation should identify the professional fee and, where relevant, separate charges for Nikah arrangements, registration, certified copies, computerised certificate assistance, translation, attestation and courier work.</p>
              <p>Mahr is not a lawyer’s fee or registration charge. It is an obligation agreed between the parties and should be recorded separately in the Nikah Nama.</p>
            </div>
          </div>

          <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] border border-slate-800">
            <h2 className="text-3xl font-black text-white mb-6">Timeline and same-day claims</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>A straightforward Nikah can sometimes be arranged quickly once documents and eligibility are clear. That does not mean registration and all later certificates will necessarily be ready at the same time.</p>
              <p>Registration, certified copies, computerised certificates and overseas attestations may each have their own processing time. The timeline should therefore identify the Nikah date separately from completion of later documents.</p>
              <p>Where an urgent marriage is genuinely needed, the first priority should still be legal eligibility and accurate documentation. Speed should not be achieved by ignoring age, identity or previous-marriage issues.</p>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-6">Procedure by city</h2>
          <p className="text-slate-400 text-center max-w-3xl mx-auto mb-10">Local marriage-age rules and registration practice can differ. Use the city-specific guide for the relevant jurisdiction.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ['Karachi', '/services/court-marriage-karachi'],
              ['Islamabad', '/services/court-marriage-islamabad'],
              ['Rawalpindi', '/services/court-marriage-rawalpindi'],
              ['Punjab', '/services/court-marriage-punjab']
            ].map(([city, path]) => (
              <Link key={city} to={path} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-white font-bold text-center no-underline transition-colors">{city}</Link>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-5">Court Marriage procedure FAQs</h2>
          <p className="text-slate-500 text-center mb-12">General information only; the correct procedure depends on the facts and current local law.</p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl">
                <summary className="text-white font-bold cursor-pointer list-none flex justify-between gap-4">{faq.q}<span className="text-blue-500">+</span></summary>
                <p className="mt-4 text-slate-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center relative overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">Confidential Court Marriage consultation</h2>
          <p className="text-slate-400 mb-8 relative z-10 max-w-3xl mx-auto">Share your city, ages, nationality, marital status and whether both parties can attend. The legal team can identify the appropriate procedure before giving a fee or timeline.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a href="tel:+923331127834" className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all text-center no-underline">Call Now</a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white font-bold rounded-xl transition-all text-center no-underline">Message on WhatsApp</a>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Procedure;
