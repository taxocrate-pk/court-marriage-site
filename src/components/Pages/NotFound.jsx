import React from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-slate-950 text-slate-300 flex items-center justify-center px-6 py-24">
      <Helmet>
        <title>Page Not Found | Court Marriage Site</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <div className="max-w-2xl text-center p-10 md:p-14 rounded-[3rem] bg-slate-900 border border-slate-800">
        <div className="text-blue-500 font-black text-7xl mb-5">404</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-5">Page not found</h1>
        <p className="text-slate-400 leading-relaxed mb-8">The page you requested does not exist or may have moved. Use the main Court Marriage guides below instead.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl no-underline">Return Home</Link>
          <Link to="/procedure" className="px-7 py-4 border border-slate-700 hover:border-blue-500 text-white font-bold rounded-xl no-underline">Marriage Procedure</Link>
        </div>
      </div>
    </main>
  );
}
