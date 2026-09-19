import React from 'react';
import OnlineNikahCityLayout from './OnlineNikahCityLayout.jsx';

export default function OnlineNikahKarachi() {
  const faqs = [
    { q: 'Can Online Nikah be arranged for a Karachi-based couple?', a: 'Yes, subject to legal capacity, free consent, identity verification and a properly structured Nikah process. The facts should be reviewed before deciding how the ceremony, witnesses, Nikah Nama and later registration will be handled.' },
    { q: 'Is a video call alone enough for Online Nikah in Karachi?', a: 'No blanket statement should be made. A video call is only a communication medium. The validity and legal usefulness of the marriage depend on consent, witnesses, the form of Ijab-o-Qabool, documentation and any representation used in the case.' },
    { q: 'Can an overseas bride or groom complete Online Nikah connected with Karachi?', a: 'Many overseas cases can be structured lawfully, but the route depends on nationality, location and the intended use of the marriage documents. Power of attorney, embassy or attestation requirements may need separate review.' },
    { q: 'What documents are usually checked in Karachi Online Nikah cases?', a: 'CNIC, NICOP or passport details, photographs, marital-status documents where applicable, witness details and any authority or foreign-status documents relevant to the case are commonly reviewed.' },
    { q: 'How is the Nikah Nama handled after an Online Nikah in Karachi?', a: 'The Nikah Nama should be prepared with accurate particulars and then dealt with through the competent registration process. The relevant local jurisdiction depends on the facts and the place connected with the marriage record.' },
    { q: 'Can you guarantee same-day marriage registration in Karachi?', a: 'No. Nikah solemnisation and government registration are separate steps. Processing depends on the documents, the competent office, working days and any issue that requires correction or verification.' },
    { q: 'Can a divorcee or widow use the Online Nikah service in Karachi?', a: 'Yes, where legally eligible, but the prior marital status must be documented correctly. Divorce or death-related documents should be reviewed before the new Nikah is arranged.' },
    { q: 'Is a NADRA marriage certificate issued automatically after Online Nikah?', a: 'No. A computerised marriage certificate is an administrative record obtained through the relevant authority after the required registration process. It should not be described as automatic at the moment of the Nikah ceremony.' },
    { q: 'Can foreign documents be used in a Karachi Online Nikah case?', a: 'They may be usable, but the need for attestation, translation or verification depends on the document, issuing country and the purpose for which it will be relied upon in Pakistan.' },
    { q: 'How are Online Nikah fees in Karachi calculated?', a: 'Fees depend on the legal work, documentation, registration assistance, overseas coordination and any authority or attestation work. The case should be reviewed before a final fee is quoted.' },
  ];

  return (
    <OnlineNikahCityLayout
      city="Karachi"
      path="/online-nikah-karachi"
      phone="+923331127834"
      displayPhone="+92 333 1127834"
      intro="Online Nikah in Karachi can be a practical option where one or both parties cannot conveniently attend the same place, but the process should be planned as a complete legal and documentation matter rather than treated as a simple video ceremony. We assist with consent, witnesses, Nikah Nama preparation, local registration guidance and overseas-case coordination."
      localOverview={[
        'Karachi cases often involve couples living in different districts of the city, overseas Pakistanis with family ties in Sindh, or one party working abroad while the other remains in Karachi. These situations can be handled more efficiently when the parties’ identities, marital status and intended registration route are reviewed at the beginning instead of after the Nikah has already taken place.',
        'The term Online Nikah is commonly used for a marriage in which the parties communicate remotely or one party participates through an authorised arrangement. The legal and Sharia structure matters more than the technology used. For that reason, we do not treat a WhatsApp or video call as an automatic substitute for proper consent, witnesses, Ijab-o-Qabool, Mahr terms and accurate documentation.',
        'Karachi also presents a local-jurisdiction issue because the city is divided into multiple districts and local administrative areas. A marriage record should be directed through the authority that is actually competent for the relevant facts. Choosing an office merely because it seems convenient can create later problems with verification or certificate issuance.',
        'For couples who expect to use their marriage documents for immigration, family visa, sponsorship, banking, inheritance or foreign registration, accuracy becomes especially important. Spelling, identity numbers, addresses and previous marital status should be checked before the Nikah Nama is finalised because correcting a record after registration can take additional time and documentation.'
      ]}
      registrationNotes={[
        'In Karachi, solemnisation of the Nikah and registration of the marriage record should be treated as related but distinct stages. The relevant Nikah Nama particulars must be complete and the registration route should match the competent local jurisdiction connected with the parties and the marriage.',
        'A computerised marriage certificate is obtained through the applicable administrative process after the underlying marriage has been properly recorded. We avoid describing this as “NADRA registration at the Nikah” because the certificate process is not the same thing as the religious ceremony itself.',
        'Where a party is overseas or a previous marriage has ended, additional documents may need to be checked before registration. This is particularly important if the resulting record will later be presented to a foreign embassy or immigration authority.'
      ]}
      overseasNotes={[
        'Karachi is frequently the Pakistan-side connection in overseas Online Nikah matters. A bride or groom may be in the United Kingdom, Gulf, North America, Europe or another country while family, witnesses or the documentation process is handled in Karachi. In such cases, the foreign location of the party should be considered from the beginning rather than treated as a minor detail.',
        'If an authority document, affidavit, attestation or embassy-facing record is required, its wording and execution should be reviewed for the country in which it will be used. A document that is sufficient for a local step in Karachi may not automatically satisfy a foreign authority.'
      ]}
      localPracticalNotes={[
        'Karachi applicants should identify the district and local area connected with the marriage record before assuming where registration will be handled.',
        'If one party is abroad, send clear scans of identity and marital-status documents early so any discrepancy can be identified before the ceremony.',
        'Do not leave Mahr terms vague. The amount, prompt/deferred nature and any special conditions should be recorded accurately where applicable.',
        'Where a foreign embassy will later use the marriage record, ask about attestation and translation requirements before ordering unnecessary documents.'
      ]}
      faqs={faqs}
    />
  );
}
