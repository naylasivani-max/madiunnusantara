import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  Users,
  Palette,
  ShoppingBag,
  Mic } from
'lucide-react';
const activities = [
{
  title: 'Batik Product Exhibition',
  description:
  'Showcasing beautiful batik fabrics, clothing, accessories, and creative batik-based products.',
  icon: <ShoppingBag className="w-6 h-6 text-amber-700" />
},
{
  title: 'Batik Workshop',
  description:
  'Experience the traditional process of making batik directly with expert artisans.',
  icon: <Palette className="w-6 h-6 text-amber-700" />
},
{
  title: 'Regional Batik Fashion Show',
  description:
  'Featuring stunning collections from local designers with a modern batik touch.',
  icon: <Users className="w-6 h-6 text-amber-700" />
},
{
  title: 'Culture & Business Talkshow',
  description:
  'Discussions with artisans, academics, creative industry players, and designers.',
  icon: <Mic className="w-6 h-6 text-amber-700" />
},
{
  title: 'Batik MSME Bazaar',
  description:
  'A dedicated area for local MSMEs to sell their authentic regional batik products.',
  icon: <MapPin className="w-6 h-6 text-amber-700" />
}];

const faqs = [
{
  question: 'How can I purchase tickets for the event?',
  answer:
  "You can purchase tickets by clicking the 'Get Tickets' button, which will direct you to our official WhatsApp. Please mention if you are buying a visitor ticket or registering as a tenant."
},
{
  question: 'Where is the festival located?',
  answer:
  'The main event will be held at Pahlawan Street Center Kota Madiun. We also have activities at Galeri Batik Murni Madiun.'
},
{
  question: 'Can I participate as a tenant in the bazaar?',
  answer:
  'Yes! We welcome local MSMEs and batik artisans. Contact us via WhatsApp to inquire about tenant registration and available promo packages.'
},
{
  question: 'Is the workshop suitable for beginners?',
  answer:
  'Absolutely. Our batik workshops are designed for all skill levels, and expert artisans will guide you through every step of the process.'
}];

export function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 17,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  // Simple countdown simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0)
        return {
          ...prev,
          seconds: prev.seconds - 1
        };
        if (prev.minutes > 0)
        return {
          ...prev,
          minutes: prev.minutes - 1,
          seconds: 59
        };
        if (prev.hours > 0)
        return {
          ...prev,
          hours: prev.hours - 1,
          minutes: 59,
          seconds: 59
        };
        if (prev.days > 0)
        return {
          ...prev,
          days: prev.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59
        };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const whatsappLink =
  'https://wa.me/6281515739606?text=Hello,%20I%20would%20like%20to%20purchase%20a%20ticket/register%20as%20a%20tenant%20for%20Pesona%20Batik%20Nusantara.';
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1605813811281-79133170f807?q=80&w=2070&auto=format&fit=crop"
            alt="Batik Pattern Background"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}>
            
            <span className="inline-block py-1 px-3 rounded-full bg-amber-900/50 border border-amber-700/50 text-amber-400 text-sm font-medium tracking-wider mb-6 uppercase">
              Madiun Batik Presents
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-serif">
              Pesona Batik <span className="text-amber-500">Nusantara</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto mb-10 font-light">
              Celebrate the rich heritage of Madiun's local culture through an
              immersive exhibition of art, fashion, and tradition.
            </p>

            {/* Countdown */}
            <div className="flex justify-center gap-4 mb-12">
              {[
              {
                label: 'Days',
                value: timeLeft.days
              },
              {
                label: 'Hours',
                value: timeLeft.hours
              },
              {
                label: 'Minutes',
                value: timeLeft.minutes
              },
              {
                label: 'Seconds',
                value: timeLeft.seconds
              }].
              map((item, i) =>
              <div key={i} className="flex flex-col items-center">
                  <div className="bg-stone-800/80 backdrop-blur-sm border border-stone-700 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold text-amber-500 shadow-lg">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-xs md:text-sm text-stone-400 mt-2 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-500 transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)] flex items-center justify-center group">
                
                Get Tickets Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-stone-500 text-stone-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-amber-500 hover:text-amber-400 transition-colors flex items-center justify-center">
                
                Register as Tenant
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Target Audience / Companies (Social Proof) */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-stone-500 uppercase tracking-widest mb-8">
            Welcoming all communities
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-stone-400 font-medium text-sm md:text-base">
            {[
            'General Public',
            'Batik Lovers',
            'Tourists',
            'Artisans',
            'Fashion Designers',
            'MSMEs',
            'Media Partners',
            'Art Communities'].
            map((audience, i) =>
            <span
              key={i}
              className="px-4 py-2 bg-stone-50 rounded-full border border-stone-100">
              
                {audience}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 3. Problem/Agitation Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 font-serif">
            Preserving Our Heritage in a Modern World
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Traditional batik artistry is facing challenges in the fast-paced
            modern fashion industry. Local artisans in Madiun hold incredible
            skills and stories that risk being forgotten. We need a platform to
            bridge the gap between traditional craftsmanship and contemporary
            appreciation.
          </p>
        </div>
      </section>

      {/* 4. Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1580196969807-cc6de06c05be?q=80&w=2000&auto=format&fit=crop"
                alt="Batik Making Process"
                className="rounded-2xl shadow-2xl" />
              
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 font-serif">
                The Grand Celebration of Madiun Batik
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                Pesona Batik Nusantara is our definitive answer. A comprehensive
                festival designed to elevate local artisans, educate the public,
                and create sustainable business opportunities for MSMEs in the
                batik industry.
              </p>
              <ul className="space-y-4">
                {[
                'Empowering local Madiun artisans',
                'Connecting creators with buyers directly',
                'Educating the next generation of batik lovers'].
                map((item, i) =>
                <li key={i} className="flex items-center text-stone-700">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Features/Benefits Section (Activities) */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Festival Highlights
            </h2>
            <p className="text-stone-400 text-lg">
              Experience a diverse range of activities designed to immerse you
              in the world of Madiun Batik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, i) =>
            <div
              key={i}
              className="bg-stone-800 p-8 rounded-2xl border border-stone-700 hover:border-amber-700/50 transition-colors">
              
                <div className="w-12 h-12 bg-amber-900/30 rounded-xl flex items-center justify-center mb-6">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                <p className="text-stone-400 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Testimonial Section */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-amber-600 mb-6">
            <svg
              className="w-12 h-12 mx-auto opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24">
              
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-2xl md:text-3xl font-medium text-stone-800 mb-8 font-serif leading-relaxed">
            "This festival is a crucial stepping stone for Madiun's batik
            industry. It brings our heritage to the forefront and opens up
            incredible opportunities for local artisans."
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-stone-300 rounded-full overflow-hidden mr-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                alt="Portrait"
                className="w-full h-full object-cover" />
              
            </div>
            <div className="text-left">
              <div className="font-bold text-stone-900">Budi Santoso</div>
              <div className="text-sm text-stone-500">Local Batik Artisan</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">
              How to Join the Event
            </h2>
            <p className="text-stone-600">
              Three simple steps to be part of Pesona Batik Nusantara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-stone-200 z-0"></div>

            {[
            {
              step: '01',
              title: 'Contact Us',
              desc: 'Click the Get Tickets button to reach our official WhatsApp.'
            },
            {
              step: '02',
              title: 'Choose Pass',
              desc: 'Select between a visitor pass or register for a tenant booth.'
            },
            {
              step: '03',
              title: 'Attend & Enjoy',
              desc: 'Join us at Pahlawan Street Center and immerse in the culture.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center">
              
                <div className="w-24 h-24 bg-white border-4 border-amber-100 rounded-full flex items-center justify-center text-2xl font-bold text-amber-700 mb-6 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-600">{item.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. Objection Handling / FAQ */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600">
              Everything you need to know about the festival.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) =>
            <div
              key={i}
              className="bg-white border border-stone-200 rounded-xl overflow-hidden">
              
                <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                
                  <span className="font-semibold text-stone-900">
                    {faq.question}
                  </span>
                  {openFaq === i ?
                <ChevronUp className="w-5 h-5 text-stone-500" /> :

                <ChevronDown className="w-5 h-5 text-stone-500" />
                }
                </button>
                {openFaq === i &&
              <div className="px-6 pb-4 text-stone-600">{faq.answer}</div>
              }
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="py-24 bg-amber-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse">
                
                <path
                  d="M0 40L40 0H20L0 20M40 40V20L20 40"
                  fill="currentColor" />
                
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Don't Miss the Biggest Batik Event in Madiun
          </h2>
          <p className="text-xl text-amber-100 mb-10">
            Join thousands of visitors, artisans, and culture enthusiasts.
            Secure your spot today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-colors shadow-lg">
              
              Buy Tickets via WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-amber-200">
            Only 17 days left until the grand opening!
          </p>
        </div>
      </section>
    </div>);

}