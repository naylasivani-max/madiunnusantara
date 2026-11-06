import React from 'react';
import { Award, Target, Eye } from 'lucide-react';
export function About() {
  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Profile & Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 mt-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-serif">
              Our Story
            </h1>
            <div className="w-20 h-1 bg-amber-600 mb-8"></div>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Madiun Batik was born from a deep-seated passion to preserve and
              elevate the unique cultural identity of Madiun. For years, local
              artisans have quietly crafted masterpieces that tell the stories
              of our region, from the iconic Pecel motifs to the historical
              landmarks woven into fabric.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              We serve as a bridge between these traditional craftsmen and the
              modern world. By organizing events like Pesona Batik Nusantara, we
              aim to create a sustainable ecosystem where art thrives, MSMEs
              grow, and the younger generation finds pride in their heritage.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-amber-700 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1580196969807-cc6de06c05be?q=80&w=1000&auto=format&fit=crop"
              alt="Batik Artisan"
              className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[500px]" />
            
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-200">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-3xl font-bold text-stone-900 mb-4 font-serif">
              Our Vision
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              To make Madiun a globally recognized hub for authentic,
              high-quality batik, where traditional artistry meets modern
              innovation, ensuring the prosperity of local artisans for
              generations to come.
            </p>
          </div>

          <div className="bg-stone-900 text-white p-10 rounded-3xl shadow-lg border border-stone-800">
            <div className="w-16 h-16 bg-stone-800 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4 font-serif">Our Mission</h2>
            <ul className="space-y-4 text-stone-300 text-lg">
              <li className="flex items-start">
                <span className="text-amber-500 mr-3 font-bold">01.</span>
                Empower local MSMEs through comprehensive exhibition platforms.
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3 font-bold">02.</span>
                Educate the public on the cultural significance of batik making.
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3 font-bold">03.</span>
                Foster collaborations between traditional artisans and modern
                designers.
              </li>
            </ul>
          </div>
        </div>

        {/* Awards */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 font-serif">
            Recognition & Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              year: '2025',
              title: 'Best Cultural Initiative',
              org: 'East Java Tourism Board'
            },
            {
              year: '2024',
              title: 'Excellence in MSME Support',
              org: 'Ministry of Cooperatives'
            },
            {
              year: '2023',
              title: 'Heritage Preservation Award',
              org: 'National Arts Council'
            }].
            map((award, i) =>
            <div key={i} className="flex flex-col items-center p-6">
                <Award className="w-12 h-12 text-amber-600 mb-4" />
                <div className="text-2xl font-bold text-stone-900 mb-2">
                  {award.year}
                </div>
                <h3 className="text-lg font-semibold text-stone-800 text-center mb-2">
                  {award.title}
                </h3>
                <p className="text-stone-500 text-sm text-center">
                  {award.org}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}