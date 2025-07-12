import Image from 'next/image';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

const VAServices = () => {
  const vaRoles = [
    {
      title: "Social Media VA",
      services: [
        "Content scheduling",
        "Community management",
        "Platform analytics",
        "Ad campaign setup"
      ]
    },
    {
      title: "Email Marketing VA",
      services: [
        "Newsletter creation",
        "List segmentation",
        "Automation setup",
        "Performance tracking"
      ]
    },
    {
      title: "SEO Specialist VA",
      services: [
        "Keyword research",
        "On-page optimization",
        "Backlink outreach",
        "Ranking reports"
      ]
    },
    {
      title: "Content Creation VA",
      services: [
        "Blog writing",
        "Graphic design",
        "Video editing",
        "Content repurposing"
      ]
    },
    {
      title: "PPC Management VA",
      services: [
        "Ad copy creation",
        "Bid management",
        "A/B testing",
        "ROI analysis"
      ]
    },
    {
      title: "CRM Management VA",
      services: [
        "Data entry",
        "Workflow automation",
        "Lead scoring",
        "Reporting"
      ]
    },
    {
      title: "Influencer Outreach VA",
      services: [
        "Research prospects",
        "Initial contact",
        "Relationship tracking",
        "Campaign coordination"
      ]
    },
    {
      title: "Analytics VA",
      services: [
        "Dashboard setup",
        "Data visualization",
        "Performance reports",
        "Insight generation"
      ]
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
                  src="/images/va-img.jpg"
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