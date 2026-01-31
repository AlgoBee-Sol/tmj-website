import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  icon?: string;
  image?: string;
}

export default function ServiceCard({ id, title, shortDesc, image }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 h-full flex flex-col transform hover:-translate-y-1">
      {/* Image Section with Overlay */}
      <div className="h-56 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
        {image ? (
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundImage: `url(${image})`, backgroundColor: '#cbd5e1' }}
            ></div>
        ) : (
             <div className="w-full h-full bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center text-white">
               <svg className="w-16 h-16 opacity-50" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/></svg>
             </div>
        )}
        
        {/* Title Overlay on Image for Mobile/Design Pop */}
        <div className="absolute bottom-4 left-4 z-20">
           <h3 className="text-xl font-bold text-white drop-shadow-md">{title}</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed line-clamp-3">
          {shortDesc}
        </p>
        
        <Link 
          href={`/services#${id}`} 
          className="inline-flex items-center justify-center w-full py-3 px-4 bg-slate-50 text-blue-700 font-bold rounded-xl hover:bg-blue-50 hover:text-blue-800 transition-colors duration-200 border border-slate-200 group-hover:border-blue-200"
        >
          <span>Learn More</span>
          <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </Link>
      </div>
    </div>
  );
}
