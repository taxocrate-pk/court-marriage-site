import ServiceLayout from './ServicesLayout.jsx';

const faqs = [
  {
    q: 'What does court marriage in Rawalpindi usually mean?',
    a: 'Court marriage in Rawalpindi is commonly used to describe a free-will marriage completed with legal and documentary assistance. It does not automatically mean that a judge conducts the Nikah. The core work normally involves checking eligibility and identity, arranging a lawful Nikah, completing the Nikah Nama accurately and using the appropriate local registration route.'
  },
  {
    q: 'Is there one fixed minimum age rule that can be assumed for every Rawalpindi case?',
    a: 'No age figure should be copied blindly from another province or territory. Rawalpindi falls in Punjab, so the law currently applicable in Punjab should be checked at the time of the proposed marriage together with the parties’ identity documents. This is especially important where a date of birth is close to the legal threshold.'
  },
  {
    q: 'Can an adult couple marry by choice in Rawalpindi?',
    a: 'Where both parties are legally eligible and genuinely consenting, free consent is central to the marriage. Family disagreement may create practical pressure, but it should not be confused with the parties’ own consent. If there is a genuine threat or coercion issue, the couple should obtain separate advice about safety and protective legal options.'
  },
  {
    q: 'Do we have to appear in the Rawalpindi courts just to get married?',
    a: 'Not merely because the service is called court marriage. A Muslim Nikah and its registration are not the same thing as court litigation. Affidavits or protective proceedings may sometimes be appropriate, but they should be used because the facts require them rather than sold as a compulsory ceremony before a judge.'
  },
  {
    q: 'What documents should we bring for court marriage in Rawalpindi?',
    a: 'Valid identity documents for both parties are normally essential. Witness details and, where relevant, proof concerning a previous marriage may also be required. Overseas or foreign-national cases can involve passports, NICOP, powers of attorney, translations, attestations or other documents depending on the case.'
  },
  {
    q: 'Can a Rawalpindi court marriage be completed in one day?',
    a: 'The Nikah in a straightforward file may sometimes be arranged quickly after documents and eligibility have been checked. Registration and later certificates may follow their own administrative timelines. A proper service should explain the expected timing for each stage separately and should not promise the same completion time for every couple.'
  },
  {
    q: 'Can someone living abroad marry through Rawalpindi?',
    a: 'Many overseas matters can be coordinated through Rawalpindi, but the correct structure depends on where each party is located, who can attend, nationality, prior marital status and the country where the documents will later be used. Remote participation needs a case-specific legal and Sharia review rather than a blanket video-link promise.'
  },
  {
    q: 'Is marriage registration handled by NADRA directly?',
    a: 'It is better to describe the process accurately. The Nikah is registered through the competent Nikah-registration and local-authority framework. A computerised marriage certificate may later be issued through the relevant local system and may use NADRA-linked data, but that does not mean NADRA itself solemnises or registers every marriage.'
  },
  {
    q: 'What affects the fee for court marriage in Rawalpindi?',
    a: 'The fee depends on the services required, including consultation, Nikah arrangements, registration support, certified copies, computerised certificate assistance, translations, attestations and any urgent or overseas work. A clear quotation should identify each included service instead of advertising one universal amount.'
  },
  {
    q: 'Is court marriage in Rawalpindi confidential?',
    a: 'Client communications can be handled discreetly and professionally, but a registered marriage creates an official record. Confidentiality should mean responsible handling of personal information and case communications, not a promise to conceal a lawfully registered marriage from competent authorities.'
  }
];

const CourtMarriageRawalpindi = () => (
  <ServiceLayout
    city="Rawalpindi"
    path="/services/court-marriage-rawalpindi"
    metaTitle="Court Marriage in Rawalpindi | Legal Nikah Guidance"
    metaDescription="Court Marriage in Rawalpindi with guidance on consent, documents, Nikah Nama, registration, fees, timelines and overseas cases. Updated 2026."
    description="Court Marriage in Rawalpindi should begin with a proper legal and documentary review, not a generic promise of same-day processing. We focus on identity, free consent, the marriage-age rule currently applicable in Punjab, prior marital status, accurate Nikah Nama completion and the correct local registration route. Overseas and family-opposition cases receive separate review before any fee or timeline is finalised."
    phone="+923331127831"
    displayPhone="+92 333 1127831"
    areas={['Saddar', 'Satellite Town', 'Chaklala', 'Bahria Town', 'Rawalpindi Cantonment', 'Rawalpindi City', 'Taxila', 'Murree District']}
    localPlanning="Rawalpindi is closely connected with Islamabad, but the two are different legal and administrative jurisdictions. A Rawalpindi marriage file should therefore be assessed under the law and registration practice applicable in Punjab rather than automatically treated as an Islamabad case. Residence, identity documents, previous marital status and the intended registration location should be confirmed before the Nikah Nama is prepared."
    localRegistration="The registration route in Rawalpindi depends on the competent Nikah Registrar and local authority for the relevant area. Couples living in cantonment, municipal or surrounding district areas should not assume that one office handles every registration. The registered Nikah Nama, certified copies and any later computerised certificate should be treated as separate documentary stages."
    localOverview={[
      'Rawalpindi court marriage enquiries frequently involve couples who live or work across the twin cities. That makes jurisdictional clarity important. An Islamabad residence or workplace does not automatically make an Islamabad registration appropriate for a Rawalpindi-based file, and the reverse is also true. The couple’s actual circumstances should determine the documentation strategy.',
      'The first practical task is to verify identity and marital status. CNIC details, spelling of names, dates of birth and addresses should be checked carefully. If either party was previously married, the lawyer should examine the document that proves the current legal status rather than rely on a verbal explanation. Errors at this stage can delay later registration and create difficulties when the marriage documents are used for immigration, inheritance or family litigation.',
      'A free-will marriage can also raise safety concerns where relatives strongly object. In such a case the legal adviser should distinguish the marriage process from any protective legal action. Not every couple requires an affidavit, police application or court petition, while some couples may genuinely need tailored protection. A responsible service should assess that issue instead of adding identical court paperwork to every file.',
      'Rawalpindi is also used by overseas families because of its proximity to Islamabad and major transport links. Where one party is abroad, early planning is particularly important. The legal team should ask how the Nikah will be conducted, who can attend, what authority any representative has, and whether the final documents need translation or attestation. The requirements of the destination country should be checked separately from the validity and registration of the marriage in Pakistan.'
    ]}
    faqs={faqs}
  />
);

export default CourtMarriageRawalpindi;
