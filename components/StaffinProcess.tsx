import Link from 'next/link';
import { FiSearch, FiPhone, FiVideo, FiAward, FiUserCheck, FiMail, FiUsers } from 'react-icons/fi';

const StaffingProcess = () => {
  const steps = [
    {
      icon: <FiSearch className="w-6 h-6" />,
      title: "The Resume Hunt!",
      description: "We scan thousands of profiles to find top digital marketing talent"
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Initial Screening Call",
      description: "15-minute phone interview to assess basic qualifications"
    },
    {
      icon: <FiVideo className="w-6 h-6" />,
      title: "Zoom Interview",
      description: "First video interview focusing on experience and cultural fit"
    },
    {
      icon: <FiVideo className="w-6 h-6" />,
      title: "Final Zoom Interview",
      description: "In-depth discussion with our hiring team leads"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "The Skills Showdown!",
      description: "Practical assessment of core competencies"
    },
    {
      icon: <FiUserCheck className="w-6 h-6" />,
      title: "Golden Ticket! You're in!",
      description: "Offer extended to join our talent network"
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Pre-Onboarding Session",
      description: "Paperwork and platform training"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Welcome to Hibsons!",
      description: "Start working with premium marketing agencies"
    }
  ];

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
            Our 8-Step Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Hibsons <span className="text-indigo-600">Staffing Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            How we ensure only the top 3% of talent join our network
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-indigo-200 transform -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:mt-20'}`}
              >
                {/* Number indicator */}
                <div className="absolute top-0 md:left-1/2 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold transform md:-translate-x-1/2 -translate-y-1/2">
                  {index + 1}
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl">
            See All Openings
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StaffingProcess;