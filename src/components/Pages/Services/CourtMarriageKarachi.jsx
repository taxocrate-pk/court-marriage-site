import ServiceLayout from './ServicesLayout.jsx';

const faqs = [
  {
    q: 'What does court marriage in Karachi mean?',
    a: 'Court marriage in Karachi is a commonly used expression for a free-will marriage completed with legal and documentary assistance. It does not necessarily mean that a judge performs the Nikah in a courtroom. For Muslim couples, the practical process usually involves consent, Nikah formalities, completion of the Nikah Nama and registration through the competent Nikah-registration system.'
  },
  {
    q: 'What is the minimum marriage age in Karachi?',
    a: 'Karachi falls within Sindh. The Sindh Child Marriages Restraint Act, 2013 defines a child as a male or female under eighteen years of age. Age documents should therefore be checked before any marriage arrangement is made, particularly where a CNIC, B-Form or passport shows a date of birth close to the legal threshold.'
  },
  {
    q: 'Can an adult couple marry in Karachi by their own choice?',
    a: 'Free consent is central to a lawful marriage. Where both parties are legally eligible and genuinely consenting, family disagreement does not by itself replace the parties’ own consent. If there is a threat, harassment or safety concern, however, the protection issue should be assessed separately and should not be reduced to a standard marriage-package promise.'
  },
  {
    q: 'Do we have to go before a judge for court marriage in Karachi?',
    a: 'Not ordinarily merely to solemnise a Muslim Nikah. The phrase court marriage often causes confusion. Depending on the case, lawyers may prepare affidavits or advise on protective legal remedies, but the Nikah and its registration are distinct from court litigation. A court application is only appropriate where the facts create a genuine legal need.'
  },
  {
    q: 'Which documents are normally required for court marriage in Karachi?',
    a: 'Valid identity documents for both parties are the starting point. Witness particulars and previous-marriage documents may also be required. Overseas Pakistanis or foreign nationals may need passports, NICOP, powers of attorney, translations, attestations or other supporting documents depending on the intended registration and later use.'
  },
  {
    q: 'Can court marriage in Karachi be completed on the same day?',
    a: 'A straightforward Nikah may sometimes be arranged quickly after eligibility and documents are confirmed, but a blanket same-day promise is not responsible. Registration, certified copies and computerised certificates can follow separate administrative timelines. The case should be reviewed first and the couple should be told which stage is expected to finish when.'
  },
  {
    q: 'Is the Nikah Nama the same as a computerised marriage certificate?',
    a: 'No. The Nikah Nama records the marriage and its agreed particulars. Registration is completed through the competent local framework, and a computerised marriage certificate may be obtained as a later official record. Couples using documents abroad may also need translation or attestation depending on the destination and purpose.'
  },
  {
    q: 'Can an overseas Pakistani arrange court marriage in Karachi?',
    a: 'Yes, many overseas cases can be coordinated in Karachi, but the correct process depends on who can attend, the parties’ nationality and marital status, and the country where the documents will later be used. A video call by itself should not be described as automatically solving every Sharia or legal issue; the structure of the particular Nikah must be reviewed.'
  },
  {
    q: 'How much does court marriage in Karachi cost?',
    a: 'The total depends on the work actually required. Professional consultation, Nikah arrangements, registration, certified copies, computerised certificate assistance, translation, attestation and urgent handling are separate possible cost heads. A written quotation should make clear what is included rather than advertising one universal figure for every couple.'
  },
  {
    q: 'Is court marriage in Karachi confidential?',
    a: 'Lawyers and service providers can handle consultations discreetly, but official marriage registration creates an official legal record. Confidential service should therefore mean careful handling of personal information and communications, not a promise that a legally registered marriage will leave no official record.'
  }
];

const CourtMarriageKarachi = () => (
  <ServiceLayout
    city="Karachi"
    path="/services/court-marriage-karachi"
    metaTitle="Court Marriage in Karachi | Nikah & Registration Help"
    metaDescription="Court Marriage in Karachi with legal guidance on consent, Nikah Nama, registration, documents, fees and overseas cases. Updated 2026."
    description="Court Marriage in Karachi requires more than a short ceremony and a generic affidavit. A sound process starts with legal age, free consent, identity and marital-status checks, then moves to the Nikah, accurate Nikah Nama completion and registration through the competent local channel. Our approach is designed for couples who want lawful, discreet and properly documented marriage assistance without misleading courtroom or same-day promises."
    phone="+923331127834"
    displayPhone="+92 333 1127834"
    areas={['Gulistan-e-Johar', 'Gulshan-e-Iqbal', 'Clifton', 'DHA', 'Karachi East', 'Karachi South', 'Karachi Central', 'Malir']}
    localPlanning="Karachi cases should be planned around the parties’ actual residence, identity documents and the place of registration rather than around the nearest court building. The city has several districts and local-government jurisdictions, so the competent registration route should be confirmed before forms are filled. For couples facing family opposition, a separate safety and legal-protection assessment may also be appropriate."
    localRegistration="In Karachi, the registration stage should be matched to the competent Nikah Registrar and local authority for the relevant area. The Nikah Nama must be completed accurately before later certificate work is undertaken. Sindh also has its own child-marriage law, so age verification is not a formality: the Sindh Child Marriages Restraint Act, 2013 treats a male or female under eighteen as a child."
    localOverview={[
      'Karachi couples often contact a lawyer because they want to marry by choice, because their families disagree, or because one party lives outside the city or outside Pakistan. These are different situations and should not be processed as though they are one identical package. A local couple with complete CNICs and no previous marriage may have a relatively straightforward file, while an overseas, divorced, widowed or foreign-national case can require additional review.',
      'A careful Karachi court marriage file begins by matching names, dates of birth and identity numbers across the available documents. If either party has been married before, the legal status of that earlier marriage should be established before a new Nikah Nama is prepared. This matters because a document that merely shows that a case was filed is not always the same thing as a document proving that a prior marital status has legally changed.',
      'The Nikah itself should reflect genuine Ijab-o-Qabool, agreed Mahr, witness arrangements and any special conditions that the parties want recorded. The couple should understand the entries before signing. Empty columns, inconsistent names or assumptions about delegated divorce, Mahr or residence can cause disputes later, so speed should never replace accurate completion of the form.',
      'Karachi is also a common starting point for marriages that will later be used for immigration, spouse visas, foreign registration, banking, inheritance or employment benefits. In those cases the marriage should be documented with the destination requirement in mind. Translation and attestation needs can differ by country, and no ethical service should promise that a marriage certificate by itself guarantees a visa or immigration outcome.'
    ]}
    faqs={faqs}
  />
);

export default CourtMarriageKarachi;
