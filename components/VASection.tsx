import Image from 'next/image';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

const VAServices = () => {
  const vaRoles = [
    {
      title: "CRM Automation & AI Expert",
      services: [
        "Automate workflows",
        "Implement AI solutions"
      ],
      img : "/images/crm-automation-expert.jpg"
    },
    {
      title: "Media Buyer",
      services: [
        "Maximize ad ROI",
        "Manage ad budgets"
      ],
      img : "/images/media-buyer-img.jpg"
    },
    {
      title: "SEO Specialist",
      services: [
        "Improve rankings & traffic",
        "Optimize website performance"
      ],
      img : "/images/seo-specialist-img.jpg"
    },
    {
      title: "Content & Graphic Associate",
      services: [
        "Create engaging content",
        "Design impactful visuals"
      ],
      img : "/images/content-and-graphic-img.jpg"
    },
    {
      title: "Executive Assistant",
      services: [
        "Manage schedules & priorities",
        "Handle admin & communication tasks"
      ],
      img : "/images/executive-assistant-img.jpg"
    },
    {
      title: "Account Manager",
      services: [
        "Maintain client satisfaction",
        "Oversee project delivery"
      ],
      img : "/images/account-manager-img.jpg"
    },
    {
      title: "Sales Associate",
      services: [
        "Drive sales and close deals",
        "Build client relationship"
      ],
      img : "/images/sales-associate-img.jpg"
    },
    {
      title: "Marketing Associate",
      services: [
        "Run campaigns & track performance",
        "Analyze data for better strategies"
      ],
      img : "/images/marketing-associate-img.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
            Specialized Talent
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Virtual Assistant Roles for Marketing Agencies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals to handle every aspect of your digital marketing operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {vaRoles.map((role, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={role.img}
                  alt={role.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{role.title}</h3>
              <ul className="space-y-3">
                {role.services.map((service, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheck className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/get-started" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl">
            Book A Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VAServices;