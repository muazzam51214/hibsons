import { FiDollarSign, FiFileText, FiHeart, FiUserPlus, FiHeadphones, FiCheck } from 'react-icons/fi';

const EoRCoverage = () => {
  const services = [
    {
      icon: <FiCheck className="w-8 h-8 text-indigo-600" />,
      title: "Legal Employment & Labor Law Compliance",
      description: "Full adherence to local employment regulations and labor laws in every country"
    },
    {
      icon: <FiDollarSign className="w-8 h-8 text-indigo-600" />,
      title: "Payroll & Tax Management",
      description: "Accurate salary processing, tax withholdings, and filings handled for you"
    },
    {
      icon: <FiFileText className="w-8 h-8 text-indigo-600" />,
      title: "Locally Compliant Contracts",
      description: "Country-specific employment contracts that meet all legal requirements"
    },
    {
      icon: <FiHeart className="w-8 h-8 text-indigo-600" />,
      title: "Health & Statutory Benefits",
      description: "Management of mandatory benefits like insurance, pensions, and leave"
    },
    {
      icon: <FiUserPlus className="w-8 h-8 text-indigo-600" />,
      title: "Seamless Onboarding & Offboarding",
      description: "End-to-end employee setup and termination processes"
    },
    {
      icon: <FiHeadphones className="w-8 h-8 text-indigo-600" />,
      title: "Ongoing HR Support",
      description: "Dedicated HR consultants for day-to-day employee management"
    }
  ];

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
            Comprehensive Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Cover for Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            End-to-end Employer of Record services that remove global hiring complexities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default EoRCoverage;