import { Link } from 'react-router';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group no-underline">
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
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">Professional Legal Services</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Legal information and professional assistance for court marriage, Online Nikah, Nikah Nama documentation and marriage registration in Pakistan.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Quick Navigation</h2>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/procedure" className="hover:text-blue-500 transition-colors">Marriage Procedure</Link></li>
              <li><Link to="/online-nikah-navigating-the-digital-path-to-marriage" className="hover:text-blue-500 transition-colors">Online Nikah</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Expert</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact Details</h2>
            <div className="space-y-3">
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <span className="text-blue-500">📞</span> 021-37451359
              </p>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <span className="text-blue-500">💬</span> +92 333 1127834
              </p>
              <p className="text-slate-400 text-sm flex items-start gap-2">
                <span className="text-blue-500">📍</span>
                Supreme Corner Apartments, Johar Chowrangi, Block 18, Gulistan-e-Johar, Karachi
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Available on WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-slate-600 uppercase font-bold tracking-[0.2em]">
          <p>© 2026 Court Marriage Site. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
