"use client"
import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiBook, FiLinkedin, FiFile, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const ApplyJobSection = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 Fields
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    dob: '',
    education: '',
    linkedin: '',
    resume: null as File | null,
    
    // Step 2 Fields
    experienceLevel: '',
    skills: [] as string[],
    availability: '',
    salaryExpectation: '',
    noticePeriod: '',
    visaStatus: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, name]
        : prev.skills.filter(skill => skill !== name)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Application submitted successfully!');
    // Reset form or redirect
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 border border-gray-200">
          <div className="flex items-center mb-8">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 1 ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600'}`}>
              1
            </div>
            <div className={`mx-2 h-1 w-8 ${step === 2 ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 2 ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600'}`}>
              2
            </div>
            <h3 className="ml-4 text-lg font-medium text-gray-900">
              {step === 1 ? 'Personal Information' : 'Professional Details'}
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="123 Main St"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="New York"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiCalendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                    Highest Education
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiBook className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="education"
                      name="education"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
                      value={formData.education}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your education</option>
                      <option value="high_school">High School</option>
                      <option value="associate">Associate Degree</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn Profile URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLinkedin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedin}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume (PDF, max 5MB)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiFile className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      className="block w-full pl-10 pr-3 py-2 text-gray-600 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    Next Step <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Professional Experience
                  </label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Technical Skills (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Digital Marketing",
                      "Social Media Management",
                      "SEO/SEM",
                      "Content Writing",
                      "Graphic Design",
                      "Web Development",
                      "Data Analysis",
                      "Project Management",
                      "CRM Software",
                      "Email Marketing"
                    ].map(skill => (
                      <div key={skill} className="flex items-center">
                        <input
                          type="checkbox"
                          id={skill}
                          name={skill}
                          checked={formData.skills.includes(skill)}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor={skill} className="ml-2 text-sm text-gray-700">
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                      Availability
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your availability</option>
                      <option value="full_time">Full-time (40+ hrs/week)</option>
                      <option value="part_time">Part-time (20-30 hrs/week)</option>
                      <option value="flexible">Flexible hours</option>
                      <option value="project_basis">Project basis</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="salaryExpectation" className="block text-sm font-medium text-gray-700 mb-1">
                      Salary Expectations
                    </label>
                    <select
                      id="salaryExpectation"
                      name="salaryExpectation"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      value={formData.salaryExpectation}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select expected salary</option>
                      <option value="10-15">$10-$15/hour</option>
                      <option value="15-20">$15-$20/hour</option>
                      <option value="20-30">$20-$30/hour</option>
                      <option value="30-40">$30-$40/hour</option>
                      <option value="40+">$40+/hour</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700 mb-1">
                      Notice Period
                    </label>
                    <select
                      id="noticePeriod"
                      name="noticePeriod"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      value={formData.noticePeriod}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select notice period</option>
                      <option value="immediately">Immediately available</option>
                      <option value="1_week">1 week</option>
                      <option value="2_weeks">2 weeks</option>
                      <option value="1_month">1 month</option>
                      <option value="2_months">2 months</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="visaStatus" className="block text-sm font-medium text-gray-700 mb-1">
                      Work Authorization
                    </label>
                    <select
                      id="visaStatus"
                      name="visaStatus"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      value={formData.visaStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your work status</option>
                      <option value="citizen">Citizen</option>
                      <option value="permanent_resident">Permanent Resident</option>
                      <option value="work_visa">Work Visa</option>
                      <option value="student_visa">Student Visa</option>
                      <option value="requires_sponsorship">Requires Sponsorship</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
                  >
                    <FiArrowLeft className="mr-2" /> Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyJobSection;