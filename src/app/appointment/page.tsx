import AppointmentForm from "@/components/appointment/AppointmentForm";

export const metadata = {
  title: "Book Appointment - TheMuscularJunction",
  description: "Schedule your physiotherapy session today.",
};

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="hidden lg:block">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Start Your Recovery Journey</h1>
            <p className="text-xl text-gray-600 mb-8">
                Our expert therapists are ready to help you regain your strength and mobility. 
                Book your session now and take the first step towards a pain-free life.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">✅ Certified Expert Therapists</li>
                    <li className="flex items-center gap-2">✅ Advanced Equipment</li>
                    <li className="flex items-center gap-2">✅ Personalized Care Plans</li>
                    <li className="flex items-center gap-2">✅ Affordable & Transparent Pricing</li>
                </ul>
            </div>
        </div>
        
        <div>
           <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
