import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, MapPin } from 'lucide-react';
export function Layout({ children }: {children: React.ReactNode;}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [
  {
    name: 'Product',
    href: '/product'
  },
  {
    name: '2026 Festival',
    href: '/festival'
  },
  {
    name: 'About Us',
    href: '/about'
  },
  {
    name: 'Connect',
    href: '/connect'
  }];

  const isActive = (path: string) => location.pathname === path;
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                className="text-2xl font-bold tracking-tighter text-amber-900">
                
                Madiun Batik
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) =>
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${isActive(item.href) ? 'text-amber-700 border-b-2 border-amber-700' : 'text-stone-600 hover:text-amber-700'}`}>
                
                  {item.name}
                </Link>
              )}
            </nav>

            <div className="hidden md:flex items-center">
              <a
                href="https://wa.me/6281515739606?text=Hello,%20I%20would%20like%20to%20purchase%20a%20ticket/register%20as%20a%20tenant%20for%20Pesona%20Batik%20Nusantara."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 text-white px-6 py-2.5 rounded-full font-medium hover:bg-amber-800 transition-colors shadow-sm">
                
                Get Tickets
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-stone-600 hover:text-amber-700 p-2">
                
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen &&
        <div className="md:hidden bg-white border-b border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) =>
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.href) ? 'text-amber-700 bg-amber-50' : 'text-stone-600 hover:text-amber-700 hover:bg-stone-50'}`}
              onClick={() => setIsMobileMenuOpen(false)}>
              
                  {item.name}
                </Link>
            )}
              <a
              href="https://wa.me/6281515739606?text=Hello,%20I%20would%20like%20to%20purchase%20a%20ticket/register%20as%20a%20tenant%20for%20Pesona%20Batik%20Nusantara."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-amber-700 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-800">
              
                Get Tickets
              </a>
            </div>
          </div>
        }
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link
                to="/"
                className="text-2xl font-bold tracking-tighter text-white mb-4 block">
                
                Madiun Batik
              </Link>
              <p className="text-sm text-stone-400 mb-6">
                Celebrating the rich heritage of Madiun's local culture through
                the art of Batik.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/batikmurnimadiun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-white transition-colors">
                  
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/product"
                    className="hover:text-amber-500 transition-colors">
                    
                    Products & Tenants
                  </Link>
                </li>
                <li>
                  <Link
                    to="/festival"
                    className="hover:text-amber-500 transition-colors">
                    
                    2026 Festival
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-amber-500 transition-colors">
                    
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/connect"
                    className="hover:text-amber-500 transition-colors">
                    
                    Connect
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white font-semibold mb-4">Locations</h3>
              <div className="space-y-4 text-sm">
                <a
                  href="https://www.google.com/maps/place/Pahlawan+Street+Center+Kota+Madiun/@-7.6240997,111.5155556,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group">
                  
                  <MapPin
                    size={18}
                    className="mr-2 mt-0.5 text-amber-600 group-hover:text-amber-500 flex-shrink-0" />
                  
                  <span className="group-hover:text-white transition-colors">
                    Pahlawan Street Center Kota Madiun
                    <br />
                    Main Event Location
                  </span>
                </a>
                <a
                  href="https://www.google.com/maps/place/Galeri+Batik+Murni+Madiun/@-7.6246253,111.5244475,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group">
                  
                  <MapPin
                    size={18}
                    className="mr-2 mt-0.5 text-amber-600 group-hover:text-amber-500 flex-shrink-0" />
                  
                  <span className="group-hover:text-white transition-colors">
                    Galeri Batik Murni Madiun
                    <br />
                    Official Gallery
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-stone-800 text-sm text-center text-stone-500">
            &copy; {new Date().getFullYear()} Madiun Batik. All rights reserved.
          </div>
        </div>
      </footer>
    </div>);

}