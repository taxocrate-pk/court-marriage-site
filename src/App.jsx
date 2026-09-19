import React from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Pages/Home.jsx';
import Procedure from './components/Pages/Procedure.jsx';
import Contact from './components/Pages/Contact.jsx';
import OnlineNikah from './components/Pages/OnlineNikkah.jsx';
import AboutUs from './components/AboutUs.jsx';
import PrivacyPolicy from './components/Pages/PrivacyPolicy.jsx';
import TermsOfService from './components/Pages/TermsOfService.jsx';
import NotFound from './components/Pages/NotFound.jsx';
import CourtMarriageKarachi from './components/Pages/Services/CourtMarriageKarachi.jsx';
import CourtMarriageIslamabad from './components/Pages/Services/CourtMarriageIslamabad.jsx';
import CourtMarriageRawalpindi from './components/Pages/Services/CourtMarriageRawalpindi.jsx';
import CourtMarriagePunjab from './components/Pages/Services/CourtMarriagePunjab.jsx';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/online-nikah-navigating-the-digital-path-to-marriage" element={<OnlineNikah />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/services/court-marriage-karachi" element={<CourtMarriageKarachi />} />
        <Route path="/services/court-marriage-islamabad" element={<CourtMarriageIslamabad />} />
        <Route path="/services/court-marriage-rawalpindi" element={<CourtMarriageRawalpindi />} />
        <Route path="/services/court-marriage-punjab" element={<CourtMarriagePunjab />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
