import React from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Pages/Home.jsx';
import Procedure from './components/Pages/Procedure.jsx';
import Contact from './components/Pages/Contact.jsx';
import OnlineNikah from './components/Pages/OnlineNikkah.jsx';
import OnlineNikahKarachi from './components/Pages/OnlineNikahKarachi.jsx';
import OnlineNikahLahore from './components/Pages/OnlineNikahLahore.jsx';
import OnlineNikahIslamabad from './components/Pages/OnlineNikahIslamabad.jsx';
import OnlineNikahRawalpindi from './components/Pages/OnlineNikahRawalpindi.jsx';
import AboutUs from './components/AboutUs.jsx';
import PrivacyPolicy from './components/Pages/PrivacyPolicy.jsx';
import TermsOfService from './components/Pages/TermsOfService.jsx';
import NotFound from './components/Pages/NotFound.jsx';
import CourtMarriageKarachi from './components/Pages/Services/CourtMarriageKarachi.jsx';
import CourtMarriageLahore from './components/Pages/Services/CourtMarriageLahore.jsx';
import CourtMarriageIslamabad from './components/Pages/Services/CourtMarriageIslamabad.jsx';
import CourtMarriageRawalpindi from './components/Pages/Services/CourtMarriageRawalpindi.jsx';
import CourtMarriageFaisalabad from './components/Pages/Services/CourtMarriageFaisalabad.jsx';
import CourtMarriagePunjab from './components/Pages/Services/CourtMarriagePunjab.jsx';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/online-nikah-navigating-the-digital-path-to-marriage" element={<OnlineNikah />} />
        <Route path="/online-nikah-karachi" element={<OnlineNikahKarachi />} />
        <Route path="/online-nikah-lahore" element={<OnlineNikahLahore />} />
        <Route path="/online-nikah-islamabad" element={<OnlineNikahIslamabad />} />
        <Route path="/online-nikah-rawalpindi" element={<OnlineNikahRawalpindi />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/services/court-marriage-karachi" element={<CourtMarriageKarachi />} />
        <Route path="/services/court-marriage-lahore" element={<CourtMarriageLahore />} />
        <Route path="/services/court-marriage-islamabad" element={<CourtMarriageIslamabad />} />
        <Route path="/services/court-marriage-rawalpindi" element={<CourtMarriageRawalpindi />} />
        <Route path="/services/court-marriage-faisalabad" element={<CourtMarriageFaisalabad />} />
        <Route path="/services/court-marriage-punjab" element={<CourtMarriagePunjab />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
