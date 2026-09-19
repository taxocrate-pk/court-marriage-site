import ServiceLayout from './ServicesLayout.jsx';

const faqs = [
  {
    q: 'What does court marriage in Punjab mean?',
    a: 'Court marriage in Punjab is a commonly used expression for a free-will marriage completed with legal and documentary assistance. It does not necessarily involve a judge performing the marriage. For Muslim couples, the practical work usually involves checking eligibility, arranging the Nikah, completing the Nikah Nama correctly and registering the marriage through the competent local framework.'
  },
  {
    q: 'Does the same local registration office handle every Punjab marriage?',
    a: 'No. Punjab is a large province with many districts, municipal areas and local registration jurisdictions. The appropriate Nikah Registrar and local authority depend on the actual place and facts of the marriage. A Lahore file should not be treated as though its local registration route is automatically identical to Faisalabad, Multan, Gujranwala or another district.'
  },
  {
    q: 'What minimum marriage age applies in Punjab?',
    a: 'The current law applicable in Punjab should be checked at the time of the proposed marriage rather than copied from Sindh or Islamabad. Identity documents should be examined carefully, especially where either party is close to the statutory age threshold. A responsible service should verify the current provincial position before proceeding.'
  },
  {
    q: 'Can an adult couple marry by choice in Punjab?',
    a: 'Free consent is a central part of a lawful marriage. Where both parties are legally eligible and genuinely consenting, family disagreement does not replace the couple’s own decision. If there is pressure, confinement, threats or harassment, the couple may also need separate advice about safety or protective legal remedies.'
  },
  {
    q: 'Is a court appearance compulsory for court marriage in Punjab?',
    a: 'Not merely because the phrase court marriage is used. The Nikah and marriage registration process are distinct from court litigation. Affidavits, police applications or protective court proceedings may sometimes be appropriate, but they should be used only where the facts justify them rather than sold as compulsory steps in every marriage.'
  },
  {
    q: 'Which documents are normally required for a Punjab court marriage?',
    a: 'Valid identity documents for the bride and groom are normally essential, together with witness particulars. Previous-marriage documentation may be required where relevant. Overseas Pakistanis and foreign nationals can need passports, NICOP, powers of attorney, translations, attestations or other case-specific documents.'
  },
  {
    q: 'Can court marriage in Punjab be completed the same day?',
    a: 'A straightforward Nikah may sometimes be arranged quickly after documents and eligibility are verified, but registration and later certificates may take additional time. Different districts can also have different administrative practices. A proper quotation and timeline should therefore separate the Nikah stage from registration and certificate work.'
  },
  {
    q: 'Can overseas Pakistanis arrange a Punjab marriage remotely?',
    a: 'Many overseas matters can be coordinated, but the correct structure depends on where the parties are located, nationality, prior marital status, whether anyone will act through authority and how the final documents will be used. Remote participation should be reviewed case by case from both legal and Sharia perspectives.'
  },
  {
    q: 'Is a Nikah Nama enough for immigration or a spouse visa?',
    a: 'A registered Nikah Nama is an important marriage record, but immigration authorities may require a computerised certificate, translation, attestation or additional civil documents. Requirements vary by destination and visa category. No legal service should guarantee a visa outcome merely because a marriage has been registered.'
  },
  {
    q: 'How much does court marriage in Punjab cost?',
    a: 'The cost depends on the city, documents and services needed. Professional consultation, Nikah arrangements, registration, certified copies, computerised certificate assistance, translation, attestation and urgent handling can be separate items. A transparent quotation should state what is included before the couple proceeds.'
  }
];

const CourtMarriagePunjab = () => (
  <ServiceLayout
    city="Punjab"
    path="/services/court-marriage-punjab"
    metaTitle="Court Marriage in Punjab | Legal Nikah & Registration"
    metaDescription="Court Marriage in Punjab with legal guidance on free consent, documents, Nikah Nama, registration, fees and overseas cases across major cities."
    description="Court Marriage in Punjab requires a city- and district-aware approach. Punjab is not one registration jurisdiction, so couples in Lahore, Faisalabad, Multan, Gujranwala, Sialkot, Bahawalpur and other districts should have their identity, legal eligibility, prior marital status and local registration route reviewed before the Nikah Nama is prepared. We avoid generic claims that every Punjab marriage follows one office, one fee or one timeline."
    phone="+923331127834"
    displayPhone="+92 333 1127834"
    areas={['Lahore', 'Faisalabad', 'Multan', 'Gujranwala', 'Sialkot', 'Bahawalpur', 'Rawalpindi Division', 'Punjab districts']}
    localPlanning="Punjab-wide planning begins by identifying the exact city and district. The current provincial marriage-age law, the competent Nikah Registrar, local authority, residence details and any previous marital status should all be checked before the ceremony is arranged. A province-wide page can explain the general process, but the final registration plan must always be local to the particular district."
    localRegistration="Marriage registration in Punjab is not a single province-level counter. The competent Nikah Registrar and local authority depend on the place and jurisdiction of the case. Couples should also distinguish the registered Nikah Nama from later computerised certificate, translation or attestation requirements. Overseas use should be planned separately according to the destination country."
    localOverview={[
      'Punjab contains many major cities with different local administrative structures, so a province-wide court marriage service should never be presented as though every couple reports to the same court or council. The legal framework may be provincial, but the practical registration route is local. The first question should therefore be where the couple intends to complete and register the marriage, not which court building appears closest on a map.',
      'The second issue is legal eligibility. Identity documents should be checked for names, dates of birth and marital status. Because marriage-age laws can change and are not identical across Pakistan, the current Punjab position should be verified for the date of the proposed marriage instead of relying on an outdated nationwide assumption. If identity records conflict, the discrepancy should be addressed before the Nikah is arranged.',
      'A Punjab free-will marriage should also be documented carefully. Mahr, witness details, addresses and any agreed special conditions should be entered accurately in the Nikah Nama. The parties should understand what they are signing. Speed is useful only when it does not create mistakes that later affect registration, family litigation, inheritance, banking or immigration.',
      'Couples contacting from overseas frequently ask whether they can complete everything remotely through Lahore or another Punjab city. The answer depends on the facts. The legal adviser should determine who is abroad, who can attend in Pakistan, whether a representative will act, what authority that representative has and whether the destination country has special documentary expectations. Remote Nikah questions may also involve genuine differences of religious opinion and should not be reduced to a marketing slogan.',
      'Where family opposition is the reason for seeking a court marriage, the couple may also need advice on privacy and personal safety. Not every case needs police involvement or court proceedings. Some do. The correct approach is to separate the marriage documentation from any actual protection issue, assess the facts and use legal remedies only where they are justified.'
    ]}
    faqs={faqs}
  />
);

export default CourtMarriagePunjab;
