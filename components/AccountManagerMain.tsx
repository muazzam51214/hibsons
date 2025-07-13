import Image from "next/image";
import Link from "next/link";
import {
  FiCheck,
  FiUser,
  FiHeart,
  FiShield,
  FiMessageSquare,
  FiTrendingUp,
  FiDollarSign,
  FiUsers
} from "react-icons/fi";

const AccountManagerMain = () => {
  const benefits = [
    {
      icon: <FiHeart className="w-6 h-6 text-indigo-600" />,
      title: "Retain More Clients",
      description: "Reduce churn and increase lifetime client value"
    },
    {
      icon: <FiShield className="w-6 h-6 text-indigo-600" />,
      title: "Ensure Service Quality",
      description: "Maintain high standards of service delivery"
    },
    {
      icon: <FiMessageSquare className="w-6 h-6 text-indigo-600" />,
      title: "Seamless Communication",
      description: "Professional client liaison and support"
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 text-indigo-600" />,
      title: "Grow Into Leadership",
      description: "Develop into Lead AMs and Project Managers"
    },
    {
      icon: <FiDollarSign className="w-6 h-6 text-indigo-600" />,
      title: "Upsell Opportunities",
      description: "Identify and capitalize on account growth potential"
    },
    {
      icon: <FiUsers className="w-6 h-6 text-indigo-600" />,
      title: "Team Coordination",
      description: "Bridge between clients and execution teams"
    },
    {
      icon: <FiCheck className="w-6 h-6 text-indigo-600" />,
      title: "Process Optimization",
      description: "Streamline client onboarding and management"
    },
    {
      icon: <FiUser className="w-6 h-6 text-indigo-600" />,
      title: "Client Advocacy",
      description: "Represent client needs within your agency"
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
              <span className="text-indigo-600">Hibsons Account Managers</span> That Retain Clients & Scale Your Agency
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              While closers bring in business, our Account Managers keep clients happy and projects profitable. They act as client advocates, project coordinators, and problem solvers—helping your agency retain more revenue while scaling effortlessly.
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
                src="/images/account-manager.jpg"
                alt="Account manager meeting with clients"
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
              The Retention Advantage
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Hire a <span className="text-indigo-600">Hibsons Account Manager</span>
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
                src="/images/am-skills.jpg"
                alt="Account manager reviewing client reports"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Our <span className="text-indigo-600">Account Managers</span> Deliver
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Client relationship management and retention strategies
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Regular client check-ins and performance reviews
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Project coordination between clients and execution teams
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Upsell and cross-sell opportunity identification
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Client onboarding and expectation management
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Career path to Lead AM and Project Manager roles
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

export default AccountManagerMain;