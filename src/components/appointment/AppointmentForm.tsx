"use client";

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function AppointmentForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  // Environment variables should be used here in production
  const SERVICE_ID = "YOUR_SERVICE_ID"; 
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current?.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg mx-auto border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book Your Appointment</h2>
      
      {status === 'success' ? (
        <div className="text-center p-6 bg-green-50 rounded-xl">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">Request Sent!</h3>
          <p className="text-gray-600">Appointment confirmation would be given to your WhatsApp and Email.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-6 text-primary font-bold hover:underline"
          >
            Book Another
          </button>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              name="user_name" 
              id="user_name"
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-gray-900"
              placeholder="John Doe"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                name="user_phone" 
                id="user_phone"
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-gray-900"
                placeholder="+91 98765..."
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
              <input 
                type="email" 
                name="user_email" 
                id="user_email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-gray-900"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
            <input 
              type="date" 
              name="date" 
              id="date"
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Issue</label>
            <textarea 
              name="message" 
              id="message"
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-gray-900"
              placeholder="Describe your issue..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'sending' ? (
                <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
                </>
            ) : "Book Appointment"}
          </button>
          
          {status === 'error' && (
             <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or call use directly.</p>
          )}
        </form>
      )}
    </div>
  );
}
