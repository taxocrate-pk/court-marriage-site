import ServiceLayout from './ServicesLayout.jsx';

const faqs = [
  {
    q: 'What does Court Marriage in Lahore mean?',
    a: 'Court Marriage in Lahore is a commonly used expression for a free-will marriage completed with legal and documentary assistance. It does not normally mean that a judge performs the Nikah in a courtroom. For Muslim couples, the practical process usually involves checking legal eligibility, confirming free consent, arranging the Nikah, completing the Nikah Nama accurately and registering the marriage through the competent Lahore registration framework.'
  },
  {
    q: 'What is the minimum legal age for marriage in Lahore in 2026?',
    a: 'Lahore is governed by Punjab law. Under the Punjab Child Marriage Restraint Act, 2026, a person under eighteen years of age is treated as a child for marriage purposes, so both parties should be at least eighteen. Identity documents and dates of birth should be checked before a Nikah is arranged.'
  },
  {
    q: 'Is a court appearance compulsory for Court Marriage in Lahore?',
    a: 'No. A court appearance is not automatically required merely because a couple describes the marriage as a court marriage. Nikah and registration are separate from litigation. A court petition, police application or other protective step may be relevant where there is a genuine threat or legal dispute, but it should not be treated as a compulsory part of every marriage.'
  },
  {
    q: 'Can an adult couple marry by choice in Lahore?',
    a: 'Where both parties are legally eligible and genuinely consenting, their free consent is central to the marriage. Family disagreement does not replace the couple’s own consent. Where there are threats, confinement, coercion or harassment, separate advice about safety or protective remedies may also be required.'
  },
  {
    q: 'Which documents are usually reviewed for a Lahore court marriage?',
    a: 'Valid identity documents for both parties are normally essential, together with witness particulars. If either party was married before, the relevant divorce, khula, talaq-effectiveness or death documentation should be reviewed. Overseas Pakistanis and foreign nationals can require passports, NICOP, powers of attorney, translations or attestations depending on the case.'
  },
  {
    q: 'How is a Muslim marriage registered in Lahore?',
    a: 'Registration is handled through the competent Nikah Registrar and local-authority framework connected with the relevant Lahore jurisdiction. The registered Nikah Nama and any later computerised marriage certificate are connected but separate stages. The exact registration route should be confirmed for the particular locality and facts of the case.'
  },
  {
    q: 'Can Court Marriage in Lahore be completed on the same day?',
    a: 'A straightforward Nikah can sometimes be arranged quickly once identity, legal age, marital status and consent are clear. Registration, certified copies and later computerised certificates can follow separate administrative timelines. A responsible service should therefore distinguish the Nikah date from the completion date of later documents.'
  },
  {
    q: 'Can an overseas Pakistani arrange a Lahore marriage remotely?',
    a: 'Many overseas matters can be coordinated, but the correct structure depends on where each party is located, whether anyone will act through authority, the form of consent and witnesses, and how the final marriage documents will be used. Power-of-attorney, translation, attestation or destination-country requirements may need separate review.'
  },
  {
    q: 'Is a registered Nikah Nama enough for a spouse visa?',
    a: 'A registered Nikah Nama is an important marriage record, but an embassy or immigration authority may require a computerised marriage certificate, translation, attestation or additional relationship documents. Requirements differ by country and visa category, and no marriage service can guarantee a visa result.'
  },
  {
    q: 'How much does Court Marriage in Lahore cost?',
    a: 'The total cost depends on the work required. Professional consultation, Nikah arrangements, registration, certified copies, computerised certificate assistance, translation, attestation and urgent handling can be separate items. A quotation should identify what is included before the couple proceeds.'
  }
];

const CourtMarriageLahore = () => (
  <ServiceLayout
    city="Lahore"
    path="/services/court-marriage-lahore"
    metaTitle="Court Marriage in Lahore | Legal Nikah & Registration"
    metaDescription="Court Marriage in Lahore with legal guidance on age 18+, free consent, documents, Nikah Nama, registration, fees and overseas marriage cases."
    description="Court Marriage in Lahore should begin with a proper legal and documentary review. Under the Punjab Child Marriage Restraint Act, 2026, both parties must be at least eighteen years old. Identity, free consent, previous marital status, witness arrangements, Mahr and the intended Lahore registration jurisdiction should be checked before the Nikah Nama is finalised."
    phone="+923331127835"
    displayPhone="+92 333 1127835"
    areas={['Lahore District', 'Gulberg', 'Johar Town', 'Model Town', 'DHA Lahore', 'Cantt', 'Wapda Town', 'Bahria Town Lahore']}
    localPlanning="A Lahore court marriage file should identify the exact local jurisdiction before the ceremony is arranged. The couple’s CNIC or passport details, ages, marital status, Mahr, witnesses and any overseas element should be reviewed together. This reduces the risk of preparing a Nikah Nama that later conflicts with registration, certificate or foreign-document requirements."
    localRegistration="For Muslim marriages in Lahore, the Nikah should be registered through the competent Nikah Registrar and the relevant local-authority framework for the particular locality. The registered Nikah Nama is the primary marriage record, while a later computerised marriage certificate, certified copy, translation or attestation may be required for other official or overseas purposes."
    localOverview={[
      'Lahore receives court marriage enquiries from couples living across the city as well as from overseas Pakistanis whose families or documents are connected with Lahore. The first legal question is not which court building should be visited. It is whether both parties are legally eligible, genuinely consenting and properly identified, and which local registration jurisdiction applies to the marriage.',
      'The Punjab Child Marriage Restraint Act, 2026 is especially important for Lahore cases. It sets the legal threshold at eighteen years for both males and females. A date of birth should therefore be checked from reliable identity documents before a Nikah is planned. Where an identity record is inconsistent or unclear, the discrepancy should be resolved rather than ignored for the sake of speed.',
      'Free consent remains central to a lawful marriage. Couples approaching a lawyer because their families disagree should be treated respectfully and privately, but family opposition should not automatically be converted into unnecessary litigation. If there is a real threat, coercion, confinement or harassment, the safety issue should be assessed separately and an appropriate protective remedy considered on its own facts.',
      'The Nikah Nama deserves careful attention. Names, CNIC numbers, addresses, marital status, Mahr, witness information and any agreed special conditions should be entered accurately. A mistake in the marriage document can later affect registration, immigration, inheritance, banking or family proceedings, so the parties should understand the entries before signing.',
      'Overseas Lahore cases can involve additional planning. Where one party is abroad, the legal team should establish how consent and witnesses will be handled, whether a representative will act, and whether any power of attorney requires attestation. The destination country may also require a computerised certificate, translation, Ministry of Foreign Affairs attestation or other supporting documents after registration.'
    ]}
    faqs={faqs}
  />
);

export default CourtMarriageLahore;
