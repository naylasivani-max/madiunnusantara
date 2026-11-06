import React from 'react';
import { MapPin, Phone, Mail, Instagram, Handshake } from 'lucide-react';
export function Connect() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">
            Connect With Us
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Whether you want to attend, partner, or just say hello, we'd love to
            hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6 font-serif">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">
                      WhatsApp (Tickets & Tenants)
                    </h3>
                    <a
                      href="https://wa.me/6281515739606"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 hover:text-amber-700 transition-colors">
                      
                      +62 815-1573-9606
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">Email</h3>
                    <a
                      href="mailto:hello@madiunbatik.com"
                      className="text-stone-600 hover:text-amber-700 transition-colors">
                      
                      hello@madiunbatik.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Instagram className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">
                      Social Media
                    </h3>
                    <a
                      href="https://www.instagram.com/batikmurnimadiun/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 hover:text-amber-700 transition-colors">
                      
                      @batikmurnimadiun
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-900 text-white p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Handshake className="w-8 h-8 text-amber-500 mr-4" />
                <h2 className="text-2xl font-bold font-serif">
                  Partnership & Sponsorship
                </h2>
              </div>
              <p className="text-stone-400 mb-6">
                Join us in making Pesona Batik Nusantara a success. We offer
                various sponsorship tiers with excellent brand visibility.
              </p>
              <a
                href="https://wa.me/6281515739606?text=Hello,%20I%20am%20interested%20in%20partnership/sponsorship%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
                
                Discuss Partnership
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-6 font-serif">
              Festival Locations
            </h2>

            <div className="space-y-8">
              {/* Main Location */}
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                <div className="flex items-start mb-4">
                  <MapPin className="w-6 h-6 text-amber-700 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">
                      Main Event: Pahlawan Street Center
                    </h3>
                    <p className="text-stone-600 text-sm mt-1">
                      Kota Madiun, East Java
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/place/Pahlawan+Street+Center+Kota+Madiun/@-7.6240997,111.5155556,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 text-sm font-semibold hover:text-amber-800 flex items-center">
                  
                  Open in Google Maps &rarr;
                </a>
              </div>

              {/* Gallery Location */}
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                <div className="flex items-start mb-4">
                  <MapPin className="w-6 h-6 text-amber-700 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">
                      Official Gallery: Galeri Batik Murni
                    </h3>
                    <p className="text-stone-600 text-sm mt-1">
                      Madiun, East Java
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/place/Galeri+Batik+Murni+Madiun/@-7.6246253,111.5244475,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 text-sm font-semibold hover:text-amber-800 flex items-center">
                  
                  Open in Google Maps &rarr;
                </a>
              </div>

              {/* Map Placeholder Image */}
              <div className="w-full h-64 bg-stone-200 rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-80" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg font-medium text-stone-800 flex items-center">
                    <MapPin className="w-4 h-4 text-amber-600 mr-2" />
                    Madiun City
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}