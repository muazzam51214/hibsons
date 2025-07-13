import Image from 'next/image';
import { FiCheckCircle, FiDollarSign, FiClock, FiGlobe, FiUsers, FiAward } from 'react-icons/fi';

const TalentBenefits = () => {
  const benefits = [
    {
      icon: <FiDollarSign className="w-6 h-6 text-indigo-600" />,
      title: "Competitive Pay",
      description: "Earn 20-30% more than freelance platforms with reliable payments"
    },
    {
      icon: <FiClock className="w-6 h-6 text-indigo-600" />,
      title: "Flexible Hours",
      description: "Choose projects that fit your schedule and timezone"
    },
    {
      icon: <FiGlobe className="w-6 h-6 text-indigo-600" />,
      title: "Global Clients",
      description: "Work with exciting marketing agencies worldwide"
    },
    {
      icon: <FiUsers className="w-6 h-6 text-indigo-600" />,
      title: "Dedicated Support",
      description: "Get assistance from our talent success team"
    },
    {
      icon: <FiAward className="w-6 h-6 text-indigo-600" />,
      title: "Skill Development",
      description: "Access exclusive training and certifications"
    },
    {
      icon: <FiCheckCircle className="w-6 h-6 text-indigo-600" />,
      title: "Steady Workflow",
      description: "Continuous projects without client hunting"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Content (50%) */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
              Why Join Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Grow Your Career with <span className="text-indigo-600">Hibsons</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide digital professionals with better opportunities, support, 
              and compensation than traditional freelance platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column - Image (50%) */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/talent-benefits.jpg"
                alt="Happy remote worker collaborating"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 flex items-end p-6">
                <div className="bg-white rounded-lg p-4 max-w-xs">
                  <div className="flex items-center">
                    <FiCheckCircle className="w-5 h-5 text-indigo-600 inline-block mr-2" />
                    <span className="text-sm font-medium">95% talent retention rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentBenefits;