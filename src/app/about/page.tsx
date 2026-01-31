import siteData from '@/data/site.json';

export const metadata = {
  title: "About Us - TheMuscularJunction",
  description: "Learn more about our mission and history.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
          Dedicated to restoring your health through advanced physiotherapy and compassionate care.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                 <img 
                    src="/images/clinic-interior.jpg" 
                    alt="Clinic Interior" 
                    className="rounded-2xl shadow-xl w-full h-auto object-cover"
                    // Placeholder fallback style
                    style={{ minHeight: '300px', backgroundColor: '#e2e8f0' }}
                 />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    At {siteData.name}, our mission is to provide world-class rehabilitation services that empower our patients to live pain-free, active lives. We believe in a holistic approach, treating not just the symptoms but the root cause of the problem.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Established with a vision to bridge the gap between injury and recovery, we utilize the latest evidence-based techniques and state-of-the-art equipment to ensure faster and safer recovery for our patients.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <span className="block text-4xl font-bold text-primary mb-1">10+</span>
                        <span className="text-gray-600 font-medium">Years Experience</span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <span className="block text-4xl font-bold text-primary mb-1">5000+</span>
                        <span className="text-gray-600 font-medium">Happy Patients</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Patient-Centric Care", desc: "Your health and comfort are our top priorities. We tailor every session to your unique needs." },
                    { title: "Integrity & Trust", desc: "We believe in honest communication and transparent treatment plans with no hidden costs." },
                    { title: "Continuous Innovation", desc: "We stay updated with the latest advancements in physiotherapy to provide the best care." }
                ].map((value, idx) => (
                    <div key={idx} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition border border-gray-100">
                        <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                        <p className="text-gray-600">{value.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
