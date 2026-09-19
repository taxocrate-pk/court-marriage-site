import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeServiceGroup, setActiveServiceGroup] = useState(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCourtMarriageOpen, setIsMobileCourtMarriageOpen] = useState(false);
  const [isMobileOnlineNikahOpen, setIsMobileOnlineNikahOpen] = useState(false);
  const location = useLocation();

  const courtMarriagePages = [
    { name: 'Court Marriage Karachi', path: '/services/court-marriage-karachi' },
    { name: 'Court Marriage Lahore', path: '/services/court-marriage-lahore' },
    { name: 'Court Marriage Islamabad', path: '/services/court-marriage-islamabad' },
    { name: 'Court Marriage Rawalpindi', path: '/services/court-marriage-rawalpindi' },
    { name: 'Court Marriage Faisalabad', path: '/services/court-marriage-faisalabad' },
  ];

  const onlineNikahPages = [
    { name: 'Online Nikah Pakistan', path: '/online-nikah-navigating-the-digital-path-to-marriage' },
    { name: 'Online Nikah Karachi', path: '/online-nikah-karachi' },
    { name: 'Online Nikah Lahore', path: '/online-nikah-lahore' },
    { name: 'Online Nikah Islamabad', path: '/online-nikah-islamabad' },
    { name: 'Online Nikah Rawalpindi', path: '/online-nikah-rawalpindi' },
  ];

  const isCourtMarriageActive =
    location.pathname.startsWith('/services/court-marriage') || location.pathname === '/procedure';
  const isOnlineNikahActive = location.pathname.startsWith('/online-nikah');
  const isServicesActive = isCourtMarriageActive || isOnlineNikahActive;

  const desktopLinkClass = ({ isActive }) =>
    `relative py-7 text-sm font-medium transition-all duration-300 ${
      isActive ? 'text-blue-500' : 'text-slate-300 hover:text-white'
    }`;

  const closeDesktopServices = () => {
    setIsServicesOpen(false);
    setActiveServiceGroup(null);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileCourtMarriageOpen(false);
    setIsMobileOnlineNikahOpen(false);
  };

  const renderSubmenuLink = (page, onClick) => (
    <NavLink
      key={page.path}
      to={page.path}
      onClick={onClick}
      className={({ isActive }) =>
        `block px-4 py-3 text-sm rounded-xl transition-all ${
          isActive
            ? 'bg-yellow-500/20 text-yellow-500'
            : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`
      }
    >
      {page.name}
    </NavLink>
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800 w-full" role="navigation">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group no-underline" aria-label="Court Marriage Site - Home">
          <div className="relative flex-shrink-0">
            <img
              src={logo}
              alt="Court Marriage Site logo"
              width="48"
              height="48"
              className="h-12 w-12 rounded-full object-cover border-2 border-blue-500/50 group-hover:border-blue-400 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-md -z-10 group-hover:bg-blue-500/30 transition-all" />
          </div>

          <div className="flex flex-col">
            <div className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none">
              Court <span className="text-yellow-500 mx-2">MARRIAGE</span> Site
            </div>
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.18em] mt-1">Professional Legal Services</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 h-full">
          <NavLink to="/" className={desktopLinkClass}>
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  />
                )}
              </>
            )}
          </NavLink>

          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={closeDesktopServices}
          >
            <button
              type="button"
              onClick={() => setIsServicesOpen((value) => !value)}
              className={`relative h-full flex items-center gap-1 text-sm font-medium transition-colors ${
                isServicesActive ? 'text-blue-500' : 'text-slate-300 hover:text-white'
              }`}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Our Services
              <ChevronDown size={15} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              {isServicesActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />
              )}
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-0 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2"
                >
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveServiceGroup('court')}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveServiceGroup((value) => (value === 'court' ? null : 'court'))}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm rounded-xl transition-all ${
                        isCourtMarriageActive || activeServiceGroup === 'court'
                          ? 'bg-blue-500/10 text-blue-300'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                      aria-haspopup="true"
                      aria-expanded={activeServiceGroup === 'court'}
                    >
                      Court Marriage
                      <ChevronRight size={16} />
                    </button>

                    <AnimatePresence>
                      {activeServiceGroup === 'court' && (
                        <motion.div
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -6 }}
                          className="absolute left-full top-0 ml-1 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2"
                        >
                          {courtMarriagePages.map((page) => renderSubmenuLink(page, closeDesktopServices))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div
                    className="relative mt-1"
                    onMouseEnter={() => setActiveServiceGroup('online')}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveServiceGroup((value) => (value === 'online' ? null : 'online'))}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm rounded-xl transition-all ${
                        isOnlineNikahActive || activeServiceGroup === 'online'
                          ? 'bg-blue-500/10 text-blue-300'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                      aria-haspopup="true"
                      aria-expanded={activeServiceGroup === 'online'}
                    >
                      Online Nikah
                      <ChevronRight size={16} />
                    </button>

                    <AnimatePresence>
                      {activeServiceGroup === 'online' && (
                        <motion.div
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -6 }}
                          className="absolute left-full top-0 ml-1 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2"
                        >
                          {onlineNikahPages.map((page) => renderSubmenuLink(page, closeDesktopServices))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/about-us" className={desktopLinkClass}>
            {({ isActive }) => (
              <>
                About Us
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink to="/contact" className={desktopLinkClass}>
            {({ isActive }) => (
              <>
                Contact Us
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  />
                )}
              </>
            )}
          </NavLink>
        </div>

        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) => `text-lg font-medium ${isActive ? 'text-yellow-500' : 'text-slate-300'}`}
              >
                Home
              </NavLink>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`flex items-center justify-between text-lg font-medium w-full ${isServicesActive ? 'text-yellow-500' : 'text-slate-300'}`}
                  aria-expanded={isMobileServicesOpen}
                >
                  Our Services
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-3 pl-4 border-l border-blue-500/30"
                    >
                      <button
                        type="button"
                        onClick={() => setIsMobileCourtMarriageOpen(!isMobileCourtMarriageOpen)}
                        className={`flex items-center justify-between text-base font-semibold w-full py-1 ${isCourtMarriageActive ? 'text-yellow-500' : 'text-slate-300'}`}
                        aria-expanded={isMobileCourtMarriageOpen}
                      >
                        Court Marriage
                        <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileCourtMarriageOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isMobileCourtMarriageOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-3 pl-4 border-l border-slate-800"
                          >
                            {courtMarriagePages.map((page) => (
                              <NavLink
                                key={page.path}
                                to={page.path}
                                onClick={closeMobileMenu}
                                className={({ isActive }) => `text-sm py-1 ${isActive ? 'text-yellow-500 font-semibold' : 'text-slate-400'}`}
                              >
                                {page.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        type="button"
                        onClick={() => setIsMobileOnlineNikahOpen(!isMobileOnlineNikahOpen)}
                        className={`flex items-center justify-between text-base font-semibold w-full py-1 ${isOnlineNikahActive ? 'text-yellow-500' : 'text-slate-300'}`}
                        aria-expanded={isMobileOnlineNikahOpen}
                      >
                        Online Nikah
                        <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileOnlineNikahOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isMobileOnlineNikahOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-3 pl-4 border-l border-slate-800"
                          >
                            {onlineNikahPages.map((page) => (
                              <NavLink
                                key={page.path}
                                to={page.path}
                                onClick={closeMobileMenu}
                                className={({ isActive }) => `text-sm py-1 ${isActive ? 'text-yellow-500 font-semibold' : 'text-slate-400'}`}
                              >
                                {page.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/about-us"
                onClick={closeMobileMenu}
                className={({ isActive }) => `text-lg font-medium ${isActive ? 'text-yellow-500' : 'text-slate-300'}`}
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className={({ isActive }) => `text-lg font-medium ${isActive ? 'text-yellow-500' : 'text-slate-300'}`}
              >
                Contact Us
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
