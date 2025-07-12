import Image from 'next/image';
import { FiCheckCircle, FiClock, FiDollarSign, FiShield, FiUserCheck, FiTrendingUp } from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiUserCheck className="w-6 h-6 text-indigo-600" />,
      title: "Pre-Vetted Talent",
      description: "Only top 3% of applicants make it through our 5-stage screening process."
    },
    {
      icon: <FiClock className="w-6 h-6 text-indigo-600" />,
      title: "Fast Hiring",
      description: "Average time to hire is just 3 days compared to industry standard of 4 weeks."
    },
    {
      icon: <FiDollarSign className="w-6 h-6 text-indigo-600" />,
      title: "Cost Effective",
      description: "Save up to 40% compared to traditional hiring and agency fees."
    },
    {
      icon: <FiShield className="w-6 h-6 text-indigo-600" />,
      title: "Risk-Free Trial",
      description: "30-day trial period for all hires - we'll cover replacements if needed."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Content (50%) */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
              Our Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why <span className="text-indigo-600">Choose Hibsons</span> for Your Digital Staffing Needs
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We've redefined digital staffing to give you access to exceptional talent with 
              none of the traditional hiring headaches.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-indigo-50 rounded-lg p-6 border border-indigo-100">
              <div className="flex">
                <FiTrendingUp className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">
                    "Hibsons clients see 2.5x faster team scaling with 30% lower turnover rates."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image (50%) */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/why-choose-us-img.jpg"
                alt="Team collaborating in modern office"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 flex items-end p-6">
                <div className="bg-white rounded-lg p-4 max-w-xs">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium text-gray-600">Trusted by industry leaders</span>
                  </div>
                  <FiCheckCircle className="w-5 h-5 text-indigo-600 inline-block mr-1" />
                  <span className="text-sm font-medium">98% client satisfaction rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;