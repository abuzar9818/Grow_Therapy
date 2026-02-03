export default function Footer() {
  return (
    <footer className="bg-(--bg-footer) px-6 sm:px-8 md:px-12 py-12 md:py-16 border-t border-gray-200 mt-0">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Dr. Maya Reynolds, PsyD
            </h3>
            
            <div className="space-y-3">
              <p className="text-gray-700 font-medium">Licensed Clinical Psychologist</p>
              <p className="text-gray-600">California License: PSY 12345</p>
              
              <div className="pt-3 border-t border-gray-200">
                <p className="text-gray-700 font-medium mb-2">Practice Location</p>
                <p className="text-gray-600">Santa Monica, CA 90401</p>
                <p className="text-gray-600 mt-1">Serving all of California via Telehealth</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:dr.maya@therapypractice.com" 
                className="block text-gray-700 hover:text-(--primary) transition-colors duration-200 underline decoration-gray-300 hover:decoration-(--primary)"
              >
                dr.maya@therapypractice.com
              </a>
              <a 
                href="tel:+13105550123" 
                className="block text-gray-700 hover:text-(--primary) transition-colors duration-200 underline decoration-gray-300 hover:decoration-(--primary)"
              >
                (310) 555-0123
              </a>
              
              <div className="pt-3">
                <p className="text-gray-700 font-medium mb-2">Response Time</p>
                <p className="text-gray-600 text-sm">Typically within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Hours & Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Practice Hours</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-700">In-Person Sessions</p>
                <p className="text-gray-600">Monday – Friday: 10am – 4pm</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Telehealth Sessions</p>
                <p className="text-gray-600">Monday – Friday: 9am – 6pm</p>
              </div>
              <div className="pt-3">
                <p className="text-sm text-gray-600">Emergency support available through crisis lines</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Quick Links</h4>
              <div className="flex flex-wrap gap-4">
                <a href="#home" className="text-gray-700 hover:text-(--primary) transition-colors duration-200">Home</a>
                <a href="#about" className="text-gray-700 hover:text-(--primary) transition-colors duration-200">About</a>
                <a href="#services" className="text-gray-700 hover:text-(--primary) transition-colors duration-200">Services</a>
                <a href="#faq" className="text-gray-700 hover:text-(--primary) transition-colors duration-200">FAQ</a>
                <a href="#contact" className="text-gray-700 hover:text-(--primary) transition-colors duration-200">Contact</a>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-(--primary)">🌿</p>
                <p className="text-xs text-gray-600">Mindful Therapy</p>
              </div>
            </div>
          </div>
        </div>


        <div className="border-t border-gray-200 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">HIPAA Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
