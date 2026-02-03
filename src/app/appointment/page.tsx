"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";


const AppointmentPageNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full px-10 py-5 flex justify-between items-center backdrop-blur-md bg-white/70 border-b border-black/10 z-50">
      <Link href="/" className="text-2xl font-semibold tracking-wide hover:text-(--primary) transition-colors duration-200">
        Dr. Maya Reynolds
      </Link>

      <div className="hidden md:flex gap-10 text-lg">
        <Link href="/" className="text-gray-700 hover:text-(--primary) transition-colors duration-200">
          Home
        </Link>
        <Link href="/#about" className="text-gray-700 hover:text-(--primary) transition-colors duration-200">
          About
        </Link>
        <Link href="/#services" className="text-gray-700 hover:text-(--primary) transition-colors duration-200">
          Services
        </Link>
        <Link href="/#faq" className="text-gray-700 hover:text-(--primary) transition-colors duration-200">
          FAQs
        </Link>
        <Link href="/appointment" className="text-(--primary) font-semibold">
          Schedule
        </Link>
      </div>
    </nav>
  );
};

export default function Appointment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    preferredContact: "email",
    appointmentType: "initial",
    preferredTime: "morning",
    concerns: "",
    insurance: "",
    heardAbout: "",
    additionalInfo: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        preferredContact: "email",
        appointmentType: "initial",
        preferredTime: "morning",
        concerns: "",
        insurance: "",
        heardAbout: "",
        additionalInfo: ""
      });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <>
        <AppointmentPageNavbar />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h1 className="text-3xl font-bold text-green-800 mb-4">Appointment Request Received!</h1>
              <p className="text-lg text-green-700 mb-6">
                Thank you for reaching out, {formData.firstName}. Dr. Reynolds will review your information and contact you within 24 hours to schedule your consultation.
              </p>
              <div className="bg-white rounded-lg p-6 text-left">
                <h2 className="font-semibold text-green-800 mb-3">What to expect next:</h2>
                <ul className="text-green-700 space-y-2">
                  <li>• Confirmation email sent to {formData.email}</li>
                  <li>• Dr. Reynolds will call you at {formData.phone} to discuss availability</li>
                  <li>• Initial consultation typically scheduled within 1-2 weeks</li>
                  <li>• You'll receive preparation materials before your first session</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AppointmentPageNavbar />
      <main className="pt-24 pb-16 bg-(--bg)">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Your Consultation
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Take the first step toward feeling more grounded and supported. 
              Dr. Reynolds offers compassionate therapy for anxiety, trauma, and burnout.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-(--secondary) rounded-xl p-8 mb-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Phone:</span> (310) 555-0123
                  </div>
                  <div>
                    <span className="font-medium">Email:</span> dr.maya@therapypractice.com
                  </div>
                  <div>
                    <span className="font-medium">Location:</span> Santa Monica, CA
                  </div>
                  <div>
                    <span className="font-medium">Response Time:</span> Within 24 hours
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Practice Hours</h2>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">In-Person:</span> Mon-Fri 10am-4pm
                  </div>
                  <div>
                    <span className="font-medium">Telehealth:</span> Mon-Fri 9am-6pm
                  </div>
                  <div className="pt-3 text-sm text-gray-600">
                    Evening and weekend appointments available by request
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div>
                  <label htmlFor="firstName" className="block text-lg font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-lg font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="dateOfBirth" className="block text-lg font-medium mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-lg font-medium mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-transparent transition"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-semibold mb-6">Appointment Preferences</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="appointmentType" className="block text-lg font-medium mb-2">
                      Type of Appointment
                    </label>
                    <select
                      id="appointmentType"
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-transparent transition"
                    >
                      <option value="initial">Initial Consultation (50 minutes)</option>
                      <option value="followup">Follow-up Session (50 minutes)</option>
                      <option value="extended">Extended Session (80 minutes)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-lg font-medium mb-2">
                      Preferred Time of Day
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-transparent transition"
                    >
                      <option value="morning">Morning (9am-12pm)</option>
                      <option value="afternoon">Afternoon (12pm-5pm)</option>
                      <option value="evening">Evening (5pm-8pm)</option>
                      <option value="any">Any Time</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="concerns" className="block text-lg font-medium mb-2">
                    What brings you to therapy? (Please share your main concerns)
                  </label>
                  <textarea
                    id="concerns"
                    name="concerns"
                    value={formData.concerns}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-transparent transition"
                    placeholder="e.g., Anxiety, trauma, burnout, relationship issues..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="insurance" className="block text-lg font-medium mb-2">
                      Insurance Provider
                    </label>
                    <input
                      type="text"
                      id="insurance"
                      name="insurance"
                      value={formData.insurance}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-transparent transition"
                      placeholder="Leave blank if paying out-of-pocket"
                    />
                  </div>

                  <div>
                    <label htmlFor="heardAbout" className="block text-lg font-medium mb-2">
                    How did you hear about Dr. Reynolds?
                  </label>
                  <select
                    id="heardAbout"
                    name="heardAbout"
                    value={formData.heardAbout}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-transparent transition"
                  >
                    <option value="">Select an option</option>
                    <option value="search">Online Search</option>
                    <option value="referral">Referral from Healthcare Provider</option>
                    <option value="friend">Friend/Family Recommendation</option>
                    <option value="social">Social Media</option>
                    <option value="previous">Previous Client</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-lg font-medium mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-transparent transition"
                  placeholder="Any specific scheduling needs, accessibility requirements, or other details..."
                />
              </div>
            </div>

              {/* Privacy Notice */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">HIPAA Privacy Notice</h3>
                <p className="text-gray-700 text-sm">
                  All information shared through this form is confidential and protected under HIPAA regulations. 
                  Your personal health information will not be shared without your explicit consent.
                </p>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-8 py-4 rounded-full text-lg font-semibold uppercase tracking-wide transition-all duration-300 ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-(--primary) text-white hover:bg-(--button-hover) hover:scale-105 hover:shadow-lg'
                  }`}
                >
                  {isLoading ? 'Sending Request...' : 'Schedule Consultation'}
                </button>
                <p className="mt-4 text-gray-600 text-sm">
                  By submitting this form, you consent to initial contact and acknowledge our privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}