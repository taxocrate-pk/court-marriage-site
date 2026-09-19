import React from 'react';
import { Link } from 'react-router';
import { CheckCircle2, FileText, Globe2, MapPin, MessageCircle, Scale, ShieldCheck, Users } from 'lucide-react';
import SEO from '../SEO.jsx';

const BASE_URL = 'https://courtmarriage.site';

export default function OnlineNikahCityLayout({
  city,
  path,
  phone,
  displayPhone,
  intro,
  localOverview,
  registrationNotes,
  overseasNotes,
  localPracticalNotes,
  faqs,
}) {
  const title = `Online Nikah in ${city} | Legal & Sharia Guidance 2026`;
  const description = `Online Nikah in ${city} with legal guidance on consent, witnesses, Nikah Nama, registration, overseas cases and documentation. Confidential consultation available.`;

  const waMessage = encodeURIComponent(`Assalam-o-Alaikum Shah Sahib, mujhe Online Nikah in ${city} ke process, documents aur fees ke bare mein maloomat chahiye.`);
  const waUrl = `https://wa.me/${phone.replace(/\D/g, '')}?text=${waMessage}`;

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `Online Nikah in ${city} - Court Marriage Site`,
    url: `${BASE_URL}${path}`,
    areaServed: city,
    serviceType: 'Online Nikah legal assistance and marriage documentation guidance',
    telephone: displayPhone,
    description,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Online Nikah', item: `${BASE_URL}/online-nikah-navigating-the-digital-path-to-marriage` },
      { '@type': 'ListItem', position: 3, name: `Online Nikah in ${city}`, item: `${BASE_URL}${path}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const steps = [
    {
      title: 'Initial legal review',
      text: `The first step for Online Nikah in ${city} is a case review covering identity, age, marital status, nationality, location of both parties and any previous marriage. The correct process depends on the actual facts, so documents should be reviewed before promises are made about timing or registration.`,
    },
    {
      title: 'Consent and Sharia arrangements',
      text: 'Free consent, Ijab-o-Qabool, witnesses, Mahr and the role of any authorised representative must be arranged according to the applicable legal and religious requirements. A video call by itself should not be treated as a complete legal solution without reviewing the full structure of the Nikah.',
    },
    {
      title: 'Identity and supporting documents',
      text: 'CNIC or passport details, photographs and any supporting proof relating to divorce, widowhood, nationality or overseas residence may be required. The exact checklist varies according to the couple’s circumstances and the authority that will later deal with registration or certification.',
    },
    {
      title: 'Nikah solemnisation and Nikah Nama',
      text: 'Once the case is properly structured, the Nikah is solemnised and the Nikah Nama is prepared with accurate particulars. Names, CNIC numbers, addresses, Mahr terms and marital status should be checked carefully because mistakes at this stage can create difficulty during later registration or foreign use.',
    },
    {
      title: 'Registration and certificate assistance',
      text: `After solemnisation, the marriage may need registration with the competent local authority connected with ${city}. Registration and any computerised marriage certificate are separate administrative steps and should not be described as automatically completed merely because the Nikah ceremony occurred online.`,
    },
    {
      title: 'Overseas and attestation follow-up',
      text: 'For couples abroad, further steps may include power-of-attorney review, embassy or consular requirements, foreign-document verification, translation or attestation. These requirements depend on the destination country and the purpose for which the marriage record will be used.',
    },
  ];

  const documents = [
    'CNIC/NICOP or passport of bride and groom',
    'Recent photographs where required for the relevant process',
    'Contact and address details of both parties',
    'Witness identity documents where required',
    'Divorce deed/certificate or death certificate if previously married',
    'Power of attorney or authority documents in appropriate overseas cases',
    'Any foreign-status, visa or embassy document relevant to the case',
    'Correct Mahr and Nikah particulars for preparation of the Nikah Nama',
  ];

  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen overflow-hidden">
      <SEO title={title} description={description} path={path} schema={[legalServiceSchema, breadcrumbSchema, faqSchema]} />

      <section className="relative pt-28 md:pt-36 pb-20">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin size={14} /> Online Nikah Services in {city}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
              Online Nikah in <span className="text-blue-500">{city}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mb-8">{intro}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-center transition-all shadow-xl shadow-blue-600/20">
                WhatsApp for Online Nikah
              </a>
              <a href={`tel:${phone}`} className="px-7 py-4 border border-slate-700 hover:border-blue-500 text-white font-bold rounded-xl text-center transition-all">
                Call {displayPhone}
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2rem] border border-slate-800 p-7 md:p-9 shadow-2xl lg:sticky lg:top-28">
            <ShieldCheck className="text-blue-500 mb-5" size={34} />
            <h2 className="text-2xl font-bold text-white mb-4">Case Review Before the Nikah</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Online Nikah cases should be structured around the actual facts, not a generic promise. We review identity, consent, witnesses, marital status, local registration requirements and any overseas element before recommending the practical route.
            </p>
            <div className="space-y-3 text-sm">
              {['Confidential consultation', 'Document checklist', 'Nikah Nama guidance', 'Registration assistance', 'Overseas-case review'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={17} className="text-blue-500 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/25 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Online Nikah in {city}: Local Legal and Practical Context</h2>
          <div className="space-y-6 text-base md:text-lg text-slate-400 leading-relaxed">
            {localOverview.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Scale className="text-blue-500 mx-auto mb-4" size={36} />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Online Nikah Process in {city}</h2>
          <p className="text-slate-400 leading-relaxed">The sequence below is a practical framework. Particular cases may require additional steps depending on the parties, jurisdiction and intended use of the marriage documents.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <article key={step.title} className="p-7 rounded-3xl bg-slate-900 border border-slate-800">
              <div className="text-blue-500 font-black text-3xl mb-4">0{index + 1}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-900/25">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <FileText className="text-blue-500 mb-4" size={34} />
            <h2 className="text-3xl font-black text-white mb-5">Documents Commonly Reviewed</h2>
            <p className="text-slate-400 leading-relaxed mb-7">There is no responsible one-size-fits-all document list. These are the documents commonly reviewed before an Online Nikah case is finalised.</p>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc} className="flex gap-3 items-start p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-slate-300">{doc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-7 rounded-3xl bg-slate-950 border border-slate-800">
              <Users className="text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Consent, Witnesses and Representation</h3>
              <p className="text-slate-400 leading-relaxed">Free consent is fundamental. Witness arrangements, the mode of Ijab-o-Qabool and any representation through an authorised person should be reviewed in advance. Where one or both parties are abroad, a properly drafted authority document may be relevant, but whether it is needed depends on the structure of the case.</p>
            </div>
            <div className="p-7 rounded-3xl bg-slate-950 border border-slate-800">
              <ShieldCheck className="text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Age and Legal Capacity</h3>
              <p className="text-slate-400 leading-relaxed">Marriage-age rules and other capacity requirements can differ by jurisdiction and may change through legislation. We therefore avoid blanket national age claims on a city service page and verify the law applicable to the parties before advising on eligibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <MapPin className="text-blue-500 mb-4" />
            <h2 className="text-2xl font-black text-white mb-5">Registration and Marriage Certificate in {city}</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              {registrationNotes.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <Globe2 className="text-blue-500 mb-4" />
            <h2 className="text-2xl font-black text-white mb-5">Overseas Online Nikah Connected With {city}</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              {overseasNotes.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/25">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Practical Points for Online Nikah Clients in {city}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {localPracticalNotes.map((note, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-400 leading-relaxed">
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-7">
          <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800">
            <MessageCircle className="text-blue-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">Online Nikah Fees</h2>
            <p className="text-slate-400 leading-relaxed">Fees depend on the legal work required, documentation, local registration, overseas coordination and any attestation or authority document. A fixed price should not be quoted until the case facts are reviewed.</p>
          </div>
          <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800">
            <ShieldCheck className="text-blue-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">Confidentiality</h2>
            <p className="text-slate-400 leading-relaxed">Marriage matters often involve sensitive family circumstances. Identification documents and personal facts should be shared only through the agreed channel and handled strictly for the legal and documentation purpose of the case.</p>
          </div>
          <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800">
            <Scale className="text-blue-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">No Blanket Promises</h2>
            <p className="text-slate-400 leading-relaxed">Same-day completion, embassy acceptance or automatic certificate issuance should not be promised across all cases. The correct timeline depends on documents, jurisdiction, office processing and the intended use of the marriage record.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/25">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10 text-center">Frequently Asked Questions: Online Nikah in {city}</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6 bg-slate-950 border border-slate-800 rounded-2xl">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-white font-bold">
                  {faq.q}<span className="text-blue-500 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-6 text-center">
        <div className="p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-blue-600/15 to-slate-900 border border-blue-500/20">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Discuss Your Online Nikah in {city}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">Share the parties’ locations, nationality, marital status and intended use of the marriage documents. We can then identify the appropriate legal and documentation route.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all">WhatsApp Consultation</a>
            <Link to="/online-nikah-navigating-the-digital-path-to-marriage" className="px-8 py-4 border border-slate-700 hover:border-blue-500 text-white font-bold rounded-xl transition-all">Online Nikah Pakistan Guide</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
