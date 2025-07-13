import Image from 'next/image';

const EoRInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Image (50%) */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/talent-benefits.jpg"
                alt="Global team working remotely"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">150+</p>
                <p className="text-xs opacity-90">Countries Covered</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content (50%) */}
          <div className="lg:w-1/2 lg:pl-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
              Global Hiring Simplified
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ensure Compliance with <span className="text-indigo-600">Every Hire</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Our Employer of Record (EoR) service lets you hire talent anywhere in the world without establishing local entities. We handle all legal, tax, and compliance requirements so you can focus on growing your team.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Global Compliance</h3>
                  <p className="text-gray-600">Full adherence to local labor laws, contracts, and regulations in 150+ countries</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Seamless Payroll</h3>
                  <p className="text-gray-600">Localized payments in preferred currency with tax withholdings handled</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Risk Mitigation</h3>
                  <p className="text-gray-600">Protection against misclassification and employment law violations</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default EoRInfo;