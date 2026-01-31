import DoctorCard from '@/components/doctors/DoctorCard';
import doctorsData from '@/data/doctors.json';

export const metadata = {
  title: "Our Team - TheMuscularJunction",
  description: "Meet our experienced team of physiotherapists.",
};

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Meet Our Experts</h1>
        <p className="text-blue-100 max-w-2xl mx-auto px-4">
            Highly qualified professionals dedicated to your recovery and well-being.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {doctorsData.map((doc) => (
                <DoctorCard 
                    key={doc.id}
                    {...doc}
                />
            ))}
        </div>
      </div>
    </div>
  );
}
