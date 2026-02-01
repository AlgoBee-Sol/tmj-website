import Link from "next/link";
import siteData from '@/data/site.json';
import servicesData from '@/data/services.json';
import doctorsData from '@/data/doctors.json';
import testimonialsData from '@/data/testimonials.json';
import ServiceCard from "@/components/services/ServiceCard";
import DoctorCard from "@/components/doctors/DoctorCard";

import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Home() {
  const featuredServices = servicesData.slice(0, 3);
  const featuredDoctors = doctorsData.slice(0, 2); 

  return (
    <div className="font-sans overflow-hidden">
      
      {/* Hero Section - Visual Update */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white min-h-[90vh] flex items-center overflow-hidden">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
                <div className="inline-block bg-blue-800/50 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full text-blue-300 text-sm font-semibold tracking-wide uppercase">
                     ✨ Premier Physiotherapy Center
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                    Recover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Faster</span>. <br/>
                    Move <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Better</span>.
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-lg leading-relaxed">
                    {siteData.tagline}. We combine advanced technology with personalized care to help you reclaim your life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/appointment" className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-blue-900/50 text-lg flex items-center justify-center gap-2">
                        Book Appointment
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                    </Link>
                    <Link href="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition text-lg flex items-center justify-center">
                        View Services
                    </Link>
                </div>
                
                <div className="flex items-center gap-8 pt-8 text-slate-400 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <span className="text-blue-400 text-xl">✓</span> Certified Experts
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-blue-400 text-xl">✓</span> Modern Clinic
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-blue-400 text-xl">✓</span> 5k+ Patients
                    </div>
                </div>
            </div>
            
            {/* Visual Right Side */}
            <div className="relative hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                 <div className="relative w-full h-[600px] bg-gradient-to-t from-blue-500/20 to-sky-500/20 rounded-[2rem] border border-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
                    {/* Placeholder for Hero Image - If no image, we use an abstract composition */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <svg className="w-96 h-96 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                             <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    
                    {/* Floating Cards */}
                     <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl animate-bounce-slow" style={{ animationDuration: '6s' }}>
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-lg text-green-600">💪</div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase">Success Rate</p>
                                <p className="text-lg font-bold text-gray-900">98%</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-20 left-10 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl animate-bounce-slow" style={{ animationDuration: '7s', animationDelay: '1s' }}>
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">⭐</div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase">Patient Rating</p>
                                <p className="text-lg font-bold text-gray-900">4.9/5.0</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
      </section>

      {/* Services Section with improved visuals */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">World-Class Physiotherapy Services</h2>
                <p className="text-slate-600 text-lg">We offer a wide range of specialized treatments designed to help you recover from injury and improve your quality of life.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 px-2">
                {featuredServices.map(service => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </div>

            <div className="text-center">
                <Link href="/services" className="inline-block border-2 border-blue-600 text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Explore All Treatments
                </Link>
            </div>
        </div>
      </section>

      {/* Appointment CTA - Visually distinct */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to feel your best?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
                Schedule your consultation today. Our expert team is ready to guide you on your path to recovery.
            </p>
            <Link href="/appointment" className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-2xl text-lg">
                Book Your Appointment Now
            </Link>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                     <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Team</span>
                    <h2 className="text-4xl font-bold text-slate-900">Meet The Experts</h2>
                </div>
                <Link href="/doctors" className="hidden md:block text-blue-700 font-bold hover:text-blue-900 transition">
                    View All Doctors &rarr;
                </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {featuredDoctors.map(doc => (
                    <DoctorCard key={doc.id} {...doc} />
                ))}
            </div>
             <div className="mt-8 text-center md:hidden">
                <Link href="/doctors" className="text-blue-700 font-bold hover:text-blue-900 transition">
                    View All Doctors &rarr;
                </Link>
             </div>
        </div>
      </section>

      {/* Testimonials - Grid Layout */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <header className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              Patient Success Stories
            </h2>
            <p className="text-lg text-slate-600">
              Watch real patient reviews on social media.
            </p>

            <div className="mt-2 flex justify-center gap-4">
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white border text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] opacity-0 group-hover:opacity-100 transition" />
                <FaInstagram className="relative text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white border text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white hover:shadow-lg"
              >
                <FaFacebookF className="text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </header>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonialsData.map((t, i) => (
              <article
                key={t.id}
                className={`relative rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl ${
                  i === 1 ? "md:-mt-8" : ""
                }`}
              >
                <span className="absolute left-6 top-4 text-6xl text-blue-500">
                  “
                </span>
                <p className="relative z-10 mb-8 mt-6 text-slate-600">
                  {t.text}
                </p>
                <footer className="flex items-center gap-4 border-t pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {t.role}
                    </p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
