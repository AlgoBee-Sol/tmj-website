import Link from 'next/link';
import siteData from '@/data/site.json';
import footerData from '@/data/footer.json';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200 text-gray-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Clinic Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">{siteData.name}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {footerData.about}
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder - Using clear text/SVGs for now */}
              <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md text-blue-600 transition">
                F
              </a>
              <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md text-pink-600 transition">
                I
              </a>
              <a href={siteData.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md text-green-500 transition">
                W
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {footerData.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">📍</span>
                <span>{siteData.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                 <span className="text-primary">📞</span>
                <a href={`tel:${siteData.contact.phone}`} className="hover:text-primary">
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                 <span className="text-primary">✉️</span>
                <a href={`mailto:${siteData.contact.email}`} className="hover:text-primary">
                  {siteData.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div className="lg:col-span-1 h-64 md:h-auto rounded-xl overflow-hidden shadow-lg border border-gray-100">
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

        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
