interface DoctorCardProps {
  name: string;
  designation: string;
  specializations: string[];
  experienceYears: number;
  bio: string;
  image?: string;
}

export default function DoctorCard({ name, designation, specializations, experienceYears, bio, image }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row h-full group">
       {/* Image Side */}
      <div className="md:w-2/5 relative h-72 md:h-auto overflow-hidden">
         {image ? (
            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${image})`, backgroundColor: '#e2e8f0' }}></div>
         ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-slate-400">
                <span className="text-6xl">👨‍⚕️</span>
            </div>
         )}
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10"></div>
      </div>
      
      {/* Content Side */}
      <div className="md:w-3/5 p-8 flex flex-col justify-center">
        <div className="mb-4">
            <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">{name}</h3>
            <div className="h-1 w-12 bg-blue-500 rounded-full mt-2 mb-1"></div>
            <p className="text-blue-600 font-semibold">{designation}</p>
        </div>
        
        <div className="mb-6 space-y-2 text-sm text-slate-600">
            <div className="flex items-center gap-2">
                <span className="bg-blue-50 text-blue-700 p-1 rounded">🏆</span>
                <span>{specializations.join(", ")}</span>
            </div>
            <div className="flex items-center gap-2">
                 <span className="bg-blue-50 text-blue-700 p-1 rounded">⏳</span>
                <span>{experienceYears}+ Years Experience</span>
            </div>
        </div>
        
        <p className="text-slate-500 text-sm leading-relaxed italic border-l-4 border-blue-100 pl-4">
            &quot;{bio}&quot;
        </p>
      </div>
    </div>
  );
}
