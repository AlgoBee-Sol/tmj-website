import siteData from '@/data/site.json';

export const metadata = {
  title: "Contact Us - TheMuscularJunction",
  description: "Get in touch with us for appointments and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
        
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-blue-100 max-w-xl mx-auto px-4">
            We are here to help. Reach out to us via phone, email, or visit our clinic.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-full text-primary">
                                <span className="text-xl">📍</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Address</h4>
                                <p className="text-gray-600">{siteData.contact.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                             <div className="bg-blue-100 p-3 rounded-full text-primary">
                                <span className="text-xl">📞</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Phone</h4>
                                <p className="text-gray-600">
                                    <a href={`tel:${siteData.contact.phone}`} className="hover:text-primary transition">{siteData.contact.phone}</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                             <div className="bg-blue-100 p-3 rounded-full text-primary">
                                <span className="text-xl">✉️</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Email</h4>
                                <p className="text-gray-600">
                                    <a href={`mailto:${siteData.contact.email}`} className="hover:text-primary transition">{siteData.contact.email}</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-4">Working Hours</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 8:00 PM</span></li>
                            <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 6:00 PM</span></li>
                            <li className="flex justify-between text-red-500"><span>Sunday</span> <span>Closed</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Large Map */}
            <div className="h-96 lg:h-auto bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <iframe 
                   src={siteData.contact.mapEmbedUrl} 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>
      </div>
    </div>
  );
}
