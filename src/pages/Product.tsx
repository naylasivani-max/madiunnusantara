import React from 'react';
import { ShoppingBag, Tag, Grid } from 'lucide-react';
export function Product() {
  const whatsappLink =
  'https://wa.me/6281515739606?text=Hello,%20I%20would%20like%20to%20inquire%20about%20products/tenant%20registration.';
  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">
            Products & Tenants
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover authentic batik products or join us as a tenant to showcase
            your own creations at the festival.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* All Products */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col h-full">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <ShoppingBag className="w-7 h-7 text-amber-700" />
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              All Products
            </h2>
            <p className="text-stone-600 mb-8 flex-grow">
              Explore our curated selection of premium batik fabrics,
              ready-to-wear fashion, and unique accessories crafted by local
              Madiun artisans.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 font-semibold hover:text-amber-800 flex items-center">
              
              Inquire via WhatsApp &rarr;
            </a>
          </div>

          {/* Promo Tenant */}
          <div className="bg-stone-900 text-white p-8 rounded-2xl shadow-lg border border-stone-800 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              HOT PROMO
            </div>
            <div className="w-14 h-14 bg-stone-800 rounded-xl flex items-center justify-center mb-6">
              <Tag className="w-7 h-7 text-amber-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Tenant Registration</h2>
            <p className="text-stone-400 mb-8 flex-grow">
              Special early bird pricing for MSMEs and local brands. Secure your
              booth at the bazaar and reach thousands of potential customers.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
              
              Register as Tenant
            </a>
          </div>

          {/* Categories */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col h-full">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <Grid className="w-7 h-7 text-amber-700" />
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              Product Categories
            </h2>
            <ul className="space-y-3 text-stone-600 mb-8 flex-grow">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>{' '}
                Traditional Fabrics
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>{' '}
                Modern Apparel
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>{' '}
                Handicrafts & Decor
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>{' '}
                Accessories
              </li>
            </ul>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 font-semibold hover:text-amber-800 flex items-center">
              
              View Catalog &rarr;
            </a>
          </div>
        </div>

        {/* Featured Preview */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-stone-900 mb-8 font-serif text-center">
            Sneak Peek of Exhibition Products
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) =>
            <div
              key={i}
              className="aspect-square bg-stone-200 rounded-xl overflow-hidden">
              
                <img
                src={`https://images.unsplash.com/photo-1605813811281-79133170f807?q=80&w=500&auto=format&fit=crop&sig=${i}`}
                alt={`Batik Product ${i}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}