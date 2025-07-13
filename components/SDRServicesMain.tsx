import Image from "next/image";
import Link from "next/link";
import {
  FiCheck,
  FiDollarSign,
  FiUsers,
  FiCalendar,
  FiTarget,
  FiTrendingUp,
  FiPhone,
  FiMail
} from "react-icons/fi";

const SDRServicesMain = () => {
  const benefits = [
    {
      icon: <FiUsers className="w-6 h-6 text-indigo-600" />,
      title: "Develop Future Closers",
      description: "Grow high-performing sales talent from within your team"
    },
    {
      icon: <FiDollarSign className="w-6 h-6 text-indigo-600" />,
      title: "Fill Your Pipeline",
      description: "Consistent flow of qualified sales appointments"
    },
    {
      icon: <FiCalendar className="w-6 h-6 text-indigo-600" />,
      title: "Streamline Scheduling",
      description: "Professional handling of all appointment coordination"
    },
    {
      icon: <FiTarget className="w-6 h-6 text-indigo-600" />,
      title: "Reduce Outreach Burden",
      description: "Take cold calling and emailing off your plate"
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 text-indigo-600" />,
      title: "Boost Conversions",
      description: "Trained in conversion-focused outreach techniques"
    },
    {
      icon: <FiPhone className="w-6 h-6 text-indigo-600" />,
      title: "Cold Calling Experts",
      description: "Skilled at opening doors and setting appointments"
    },
    {
      icon: <FiMail className="w-6 h-6 text-indigo-600" />,
      title: "Email Outreach",
      description: "Compelling email sequences that get responses"
    },
    {
      icon: <FiCheck className="w-6 h-6 text-indigo-600" />,
      title: "CRM Management",
      description: "Meticulous lead tracking and follow-up systems"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center mb-20">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-indigo-600">Hibsons SDRs</span> - Start as Setters, Grow into Closers
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our Sales Development Reps begin by filling your pipeline with qualified leads and setting appointments, then evolve into full closers as they master your sales process—creating a seamless growth path for your sales team.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/get-started"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                Book A Discovery Call
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/sdr-team.jpg"
                alt="Sales development team making calls"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-12 bg-indigo-50 rounded-xl mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
              The Setter-to-Closer Advantage
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Hire a <span className="text-indigo-600">Hibsons SDR</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {benefits.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                  {point.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {point.title}
                </h4>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/sdr-skills.jpg"
                alt="SDR using CRM and making calls"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Our <span className="text-indigo-600">SDRs</span> Deliver
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Outbound prospecting and lead generation
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Cold calling and email outreach campaigns
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Appointment setting and calendar management
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  CRM management and lead tracking
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Sales pipeline development and nurturing
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Gradual transition to closing roles
                </span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/get-started"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                Book A Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDRServicesMain;