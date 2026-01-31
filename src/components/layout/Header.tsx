"use client";

import { useState } from 'react';
import Link from 'next/link';
import siteData from '@/data/site.json';
import footerData from '@/data/footer.json';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
           {/* Placeholder Logo Icon */}
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              TJ
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold text-primary leading-tight">{siteData.name}</span>
                <span className="text-xs text-gray-500 hidden sm:block">{siteData.tagline}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {footerData.links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-gray-700 hover:text-primary font-medium transition"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/appointment" 
              className="bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-800 transition shadow-lg font-medium"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              {footerData.links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-gray-700 hover:text-primary font-medium px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/appointment" 
                className="bg-primary text-white text-center px-4 py-2 rounded-lg hover:bg-blue-800 transition mx-2"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
