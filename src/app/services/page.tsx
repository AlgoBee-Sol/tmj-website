import ServiceCard from '@/components/services/ServiceCard';
import servicesData from '@/data/services.json';

export const metadata = {
  title: "Our Services - TheMuscularJunction",
  description: "Explore our range of physiotherapy and rehabilitation services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-blue-100 max-w-2xl mx-auto px-4">
            We provide specialized care tailored to your specific needs using advanced techniques and equipment.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
                <div key={service.id} id={service.id}>
                    <ServiceCard 
                        id={service.id}
                        title={service.title}
                        shortDesc={service.shortDesc}
                        image={service.image}
                    />
                </div>
            ))}
        </div>

        {/* Detailed Sections (Optional - if we want more text per service below the grid) */}
        <div className="mt-20 space-y-16">
            {servicesData.map((service, index) => (
                <div key={service.id + '_detail'} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                         <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner">
                            {service.image && (
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>
                            )}
                         </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {service.fullDesc}
                        </p>
                        <a href="/appointment" className="btn-primary inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                            Book for {service.title}
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
