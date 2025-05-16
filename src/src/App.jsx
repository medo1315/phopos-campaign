import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import facebookImg from './assets/icons/face-removebg-preview.png';
import instagramImg from './assets/icons/insta-removebg-preview.png';
import tiktokImg from './assets/icons/tik-removebg-preview.png';
import CausesPage from './CausesPage.jsx';
import SymptomsPage from './SymptomsPage.jsx';
import TypesPage from './TypesPage.jsx';
import HomePage from './HomePage.jsx';


function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'الرئيسية', path: '/', current: location.pathname === '/' },
    { name: 'أسباب الرهاب', path: '/causes', current: location.pathname === '/causes' },
    { name: 'أعراض الرهاب', path: '/symptoms', current: location.pathname === '/symptoms' },
    { name: 'أنواع الرهاب وتأثيره', path: '/types', current: location.pathname === '/types' },
    { name: 'طرق العلاج', path: '#', current: location.pathname === '/treatment' },
    { name: 'الأطباء', path: '#', current: location.pathname === '/doctors' },
    { name: 'المراكز', path: '#', current: location.pathname === '/centers' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <nav className="bg-sky-700 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
             <div className="flex-shrink-0">
  <Link to="/">
    <div className="bg-sky-100 rounded-full flex items-center justify-center">
      <img className="h-16 w-30 sm:h-18" src="/assets/logo-updated.png" alt="Phopos Campaign Logo" />
    </div>
  </Link>
</div>

            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      item.current ? 'text-white border-b-2 border-white' : 'text-sky-100 hover:text-white hover:bg-sky-600'
                    }`}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="bg-sky-700 inline-flex items-center justify-center p-2 rounded-md text-sky-100 hover:text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-700 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    item.current ? 'bg-sky-800 text-white' : 'text-sky-100 hover:bg-sky-600 hover:text-white'
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/causes" element={<CausesPage />} />
          <Route path="/symptoms" element={<SymptomsPage />} />
          <Route path="/types" element={<TypesPage />} />
        </Routes>
      </main>

  <footer className="bg-sky-700 text-white py-8 text-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className="mb-4">تابعنا على:</p>
    <div className="flex justify-center space-x-6 space-x-reverse mb-4">
      <a href="https://www.facebook.com/share/15LpaHUt1J/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
        <img src={facebookImg} alt="Facebook" className="h-6 w-6" />
      </a>
      <a href="https://www.instagram.com/phopos_campaign?igsh=MzluZ2owOGk1dWx3" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
        <img src={instagramImg} alt="Instagram" className="h-6 w-6" />
      </a>
      <a href="https://www.tiktok.com/@phoposcamping?_t=ZS-8wJxU1mBMLS&_r=1" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
        <img src={tiktokImg} alt="TikTok" className="h-6 w-6" />
      </a>
    </div>
    <p className="text-sm text-sky-200">&copy; {new Date().getFullYear()} Phopos Campaign. جميع الحقوق محفوظة.</p>
  </div>
</footer>

    </div>
  );
}

export default App;
