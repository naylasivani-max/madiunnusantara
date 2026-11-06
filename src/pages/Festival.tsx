import React from 'react';
import { Calendar, Users, BookOpen, Heart } from 'lucide-react';
export function Festival() {
  return (
    <div className="py-12 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            2026 Festival
          </h1>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto">
            Pesona Batik Nusantara - A grand celebration of culture, art, and
            community.
          </p>
          <div className="mt-8 inline-flex items-center bg-amber-900/50 border border-amber-700/50 rounded-full px-6 py-3 text-amber-400 font-medium">
            <Calendar className="w-5 h-5 mr-3" />
            October 15 - 20, 2026
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Speakers Section */}
        <section className="mb-24">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-amber-700 mr-4" />
            <h2 className="text-3xl font-bold text-stone-900 font-serif">
              Featured Speakers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              name: 'Dr. Ayu Lestari',
              role: 'Cultural Historian',
              desc: 'Discussing the evolution of Madiun batik motifs.'
            },
            {
              name: 'Bima Satria',
              role: 'Fashion Designer',
              desc: 'Integrating traditional textiles into modern streetwear.'
            },
            {
              name: 'Siti Aminah',
              role: 'Master Artisan',
              desc: 'Preserving natural dyeing techniques.'
            }].
            map((speaker, i) =>
            <div
              key={i}
              className="bg-stone-50 rounded-2xl p-6 border border-stone-200 text-center">
              
                <div className="w-24 h-24 bg-stone-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                  src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&sig=${i + 10}`}
                  alt={speaker.name}
                  className="w-full h-full object-cover" />
                
                </div>
                <h3 className="text-xl font-bold text-stone-900">
                  {speaker.name}
                </h3>
                <p className="text-amber-700 font-medium mb-3">
                  {speaker.role}
                </p>
                <p className="text-stone-600 text-sm">{speaker.desc}</p>
              </div>
            )}
          </div>
        </section>

        {/* Event Schedule */}
        <section className="mb-24">
          <div className="flex items-center mb-8">
            <Calendar className="w-8 h-8 text-amber-700 mr-4" />
            <h2 className="text-3xl font-bold text-stone-900 font-serif">
              Event Highlights
            </h2>
          </div>
          <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
            <div className="divide-y divide-stone-200">
              {[
              {
                date: 'Oct 15',
                title: 'Grand Opening & Fashion Show',
                time: '18:00 - 21:00'
              },
              {
                date: 'Oct 16-19',
                title: 'Batik Exhibition & MSME Bazaar',
                time: '09:00 - 21:00 Daily'
              },
              {
                date: 'Oct 17',
                title: 'Masterclass: Traditional Waxing',
                time: '10:00 - 14:00'
              },
              {
                date: 'Oct 18',
                title: 'Business & Culture Talkshow',
                time: '13:00 - 16:00'
              },
              {
                date: 'Oct 20',
                title: 'Closing Ceremony & Awards',
                time: '19:00 - 22:00'
              }].
              map((event, i) =>
              <div
                key={i}
                className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-white transition-colors">
                
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-lg mr-6 min-w-[100px] text-center">
                      {event.date}
                    </div>
                    <h4 className="text-lg font-bold text-stone-900">
                      {event.title}
                    </h4>
                  </div>
                  <div className="text-stone-500 font-medium md:ml-auto">
                    {event.time}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Articles */}
          <section>
            <div className="flex items-center mb-8">
              <BookOpen className="w-8 h-8 text-amber-700 mr-4" />
              <h2 className="text-3xl font-bold text-stone-900 font-serif">
                Latest Articles
              </h2>
            </div>
            <div className="space-y-6">
              {[
              'The Meaning Behind Madiun Pecel Motif',
              'How MSMEs are Adapting to Digital Markets',
              'Sustainable Practices in Modern Batik Making'].
              map((title, i) =>
              <div key={i} className="group cursor-pointer">
                  <h4 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-2">
                    {title}
                  </h4>
                  <p className="text-stone-500 text-sm mb-2">
                    Published on September {10 + i}, 2026
                  </p>
                  <div className="w-full h-px bg-stone-200 mt-4"></div>
                </div>
              )}
            </div>
          </section>

          {/* CSR */}
          <section>
            <div className="flex items-center mb-8">
              <Heart className="w-8 h-8 text-amber-700 mr-4" />
              <h2 className="text-3xl font-bold text-stone-900 font-serif">
                CSR Initiatives
              </h2>
            </div>
            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
              <h3 className="text-xl font-bold text-stone-900 mb-4">
                Empowering the Next Generation
              </h3>
              <p className="text-stone-700 mb-6 leading-relaxed">
                A portion of all ticket sales and tenant registrations goes
                directly towards funding batik training programs for
                underprivileged youth in the Madiun region.
              </p>
              <ul className="space-y-3 text-stone-700 font-medium">
                <li>&bull; Free workshops for local schools</li>
                <li>&bull; Equipment donations to rural artisans</li>
                <li>&bull; Scholarship fund for textile arts</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>);

}