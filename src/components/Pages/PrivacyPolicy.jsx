import React from 'react';
import SEO from '../SEO.jsx';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 pt-28 pb-20 px-6">
      <SEO
        title="Privacy Policy | Court Marriage Site"
        description="Privacy Policy for Court Marriage Site, including how enquiry information, contact details, website data and confidential legal communications are handled."
        path="/privacy-policy"
      />
      <div className="max-w-4xl mx-auto">
        <header className="mb-14">
          <div className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Legal Information</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Privacy Policy</h1>
          <p className="text-slate-400 leading-relaxed">Last updated: September 2026. This policy explains how Court Marriage Site handles information submitted through the website, telephone, WhatsApp or other enquiry channels.</p>
        </header>

        <div className="space-y-10 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information you choose to provide</h2>
            <p>When you contact Court Marriage Site, you may provide your name, telephone number, city or country, service required and details about your marriage or documentation matter. If you use the website enquiry form, the information you enter is used to prepare a WhatsApp message that you send to our contact number. Do not include passwords, banking PINs or other information that is not necessary for the legal enquiry.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why information is used</h2>
            <p>Information is used to understand the enquiry, identify the relevant service, communicate with you, review possible document requirements and provide legal or administrative guidance. Marriage matters can involve sensitive personal circumstances. We aim to limit requests to information that is reasonably relevant to the service being discussed.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Legal and professional confidentiality</h2>
            <p>Legal communications are handled discreetly. However, confidentiality should not be confused with a promise that an officially registered marriage will have no public or governmental record. Where a matter proceeds to registration, attestation, litigation or another official process, relevant information may need to be supplied to the competent authority in accordance with law and procedure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Website and technical data</h2>
            <p>The website may receive ordinary technical information such as browser type, device information, pages visited, referring source or approximate location through hosting, security or analytics services. Such information can be used to maintain the website, improve performance, detect abuse and understand which legal-information pages are useful to visitors.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-party services</h2>
            <p>The website may link to WhatsApp, telephone services, maps or other external platforms. When you choose to use an external service, that provider may process information under its own privacy terms. Court Marriage Site does not control the privacy practices of third-party platforms merely because a link appears on this website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Documents and identity information</h2>
            <p>If a matter proceeds, the legal team may ask to review CNICs, passports, NICOP, previous-marriage records, Nikah Nama or other documents. Such material should be shared only through the communication channel agreed for the matter. Clients should redact information that is not relevant where appropriate and should verify that they are sending documents to the correct contact.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Retention and security</h2>
            <p>Reasonable steps are taken to protect enquiry and case information, but no internet, messaging or electronic-storage system can be guaranteed to be completely secure. Information may be retained for as long as reasonably required for the enquiry, legal service, record-keeping or compliance purpose, subject to applicable professional and legal obligations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Children and marriage-age enquiries</h2>
            <p>Court Marriage Site does not encourage or facilitate child marriage. Marriage-age laws can differ by province or territory and should be checked for the relevant jurisdiction. Where the identity documents show that a party does not satisfy the applicable legal age, the service should not proceed merely because an online enquiry has been submitted.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact about privacy</h2>
            <p>If you believe information has been sent in error or you have a question about how an enquiry is being handled, contact the legal team through the main website number, +92 332 2908556, and identify the communication or matter concerned.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
