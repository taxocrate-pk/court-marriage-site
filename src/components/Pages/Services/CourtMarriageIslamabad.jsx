import ServiceLayout from './ServicesLayout.jsx';

const faqs = [
  {
    q: 'What is meant by court marriage in Islamabad?',
    a: 'Court marriage in Islamabad is a common expression for a free-will marriage handled with legal and documentary assistance. It does not automatically mean that a judge solemnises the Nikah inside a courtroom. For Muslim couples, the important stages are consent, lawful eligibility, Nikah formalities, accurate Nikah Nama completion and registration through the competent framework in the Islamabad Capital Territory.'
  },
  {
    q: 'What is the minimum marriage age in Islamabad in 2026?',
    a: 'The Islamabad Capital Territory Child Marriage Restraint Act, 2025 defines a child as a male or female under eighteen years of age. Both parties’ dates of birth should therefore be checked from reliable identity documents before any marriage arrangement is made.'
  },
  {
    q: 'Can two adults marry by choice in Islamabad?',
    a: 'Where both parties are legally eligible and freely consenting, the marriage decision is fundamentally theirs. Family disagreement may create practical or safety concerns, but it should not be confused with the couple’s own legal capacity. If there is a threat, coercion or harassment issue, separate legal advice on protection may be needed.'
  },
  {
    q: 'Is a court appearance always required for court marriage in Islamabad?',
    a: 'No. A court appearance is not automatically required simply because people use the phrase court marriage. Lawyers may prepare affidavits or advise on protection where the facts justify it, but litigation and the Nikah-registration process are different things. Unnecessary court proceedings should not be marketed as a compulsory step.'
  },
  {
    q: 'Which documents are normally reviewed for court marriage in Islamabad?',
    a: 'The usual starting point is valid identity documentation for both parties, together with witness particulars. If either party has been married before, the relevant divorce, khula, talaq-effectiveness or death documentation may need review. Overseas or foreign-national cases can require passports, NICOP, powers of attorney, translations or attestations.'
  },
  {
    q: 'Can an overseas Pakistani arrange a marriage in Islamabad?',
    a: 'Many overseas matters can be coordinated in Islamabad, but the correct process depends on who can attend, where each party is located, nationality, prior marital status and how the documents will be used afterwards. A remote appearance or video call should not be treated as a one-size-fits-all solution without reviewing the legal and Sharia structure of the case.'
  },
  {
    q: 'How quickly can court marriage in Islamabad be arranged?',
    a: 'A straightforward Nikah may sometimes be organised quickly once documents and eligibility are clear. Registration and later certificates can take their own administrative time. A responsible service should explain the expected timing of each stage separately rather than advertising a guaranteed same-day completion for every file.'
  },
  {
    q: 'What is the difference between the Nikah Nama and a marriage certificate?',
    a: 'The Nikah Nama records the marriage, Mahr and other particulars. Registration is a separate legal step under the applicable marriage-registration framework. A computerised marriage certificate may be obtained after registration for official use. For foreign use, translation and attestation may also be required.'
  },
  {
    q: 'How are fees calculated for court marriage in Islamabad?',
    a: 'Fees depend on the actual work. Consultation, Nikah arrangements, registration, certified copies, computerised certificate assistance, translations, attestations and urgent handling can be separate items. An overseas or foreign-national matter may require additional work. The quotation should state clearly what is included.'
  },
  {
    q: 'Can court marriage in Islamabad remain private?',
    a: 'Consultations and communications can be handled discreetly, but a lawfully registered marriage creates an official record. Confidentiality should therefore mean responsible handling of personal information, not a promise that a registered marriage will be invisible to every competent public authority.'
  }
];

const CourtMarriageIslamabad = () => (
  <ServiceLayout
    city="Islamabad"
    path="/services/court-marriage-islamabad"
    metaTitle="Court Marriage in Islamabad | Legal Nikah Assistance"
    metaDescription="Court Marriage in Islamabad with guidance on legal age, consent, Nikah Nama, registration, documents, fees and overseas cases. Updated 2026."
    description="Court Marriage in Islamabad should be handled as a complete legal-documentary process rather than as a quick courtroom formality. We focus on lawful age, genuine consent, correct identity and marital-status records, careful Nikah Nama completion and the proper registration route for the Islamabad Capital Territory. Overseas, foreign-national and family-opposition cases are reviewed individually before any timeline is promised."
    phone="+923331127836"
    displayPhone="+92 333 1127836"
    areas={['G-9', 'G-10', 'G-11', 'F-8', 'F-10', 'F-11', 'I-8', 'Islamabad Capital Territory']}
    localPlanning="Islamabad cases should be planned with the Capital Territory’s current legal framework in mind. The Islamabad Capital Territory Child Marriage Restraint Act, 2025 sets eighteen as the threshold below which a male or female is treated as a child. Residence, identity particulars, prior marital status and the intended place of registration should all be checked before the Nikah Nama is prepared."
    localRegistration="Marriage registration in Islamabad should be handled through the competent Nikah Registrar and local registration framework for the relevant area. Couples should not assume that a generic ‘NADRA registration’ label identifies the whole process. The registered Nikah Nama and any later computerised certificate serve different documentary functions, and overseas use may require additional attestation or translation."
    localOverview={[
      'Islamabad receives a significant number of marriage enquiries involving professionals, students, government employees, overseas Pakistanis and couples living in different cities. A good court marriage service therefore needs more than a standard checklist. The legal team should first determine where the parties live, whether both can attend, whether either person has been married before and whether the final documents are intended only for Pakistan or also for immigration and foreign authorities.',
      'Age verification is particularly important in the Capital Territory because the 2025 child-marriage legislation expressly defines a child as a male or female under eighteen. This makes it important to examine the date of birth shown on the CNIC, passport or other reliable record rather than rely on an oral statement. If there is any discrepancy in age or identity data, it should be resolved before the marriage is arranged.',
      'Free consent must also be treated as a substantive issue, not a line in a template affidavit. If one party is under pressure, if identity documents are being withheld or if there is a genuine threat from relatives, the legal response may require separate advice about safety, police interaction or protective proceedings. Those questions are different from the mechanics of the Nikah itself and should be handled on their own facts.',
      'For overseas Islamabad cases, the document chain deserves early planning. The couple may later need certified copies, a computerised marriage certificate, translation, Ministry of Foreign Affairs attestation or destination-country formalities. Requirements differ by country and purpose. No marriage-service provider can responsibly guarantee a visa, immigration approval or embassy acceptance merely because a Nikah has been registered.'
    ]}
    faqs={faqs}
  />
);

export default CourtMarriageIslamabad;
