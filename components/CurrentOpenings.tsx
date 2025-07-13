import { FiMapPin, FiBriefcase, FiDollarSign, FiClock } from 'react-icons/fi';

const CurrentOpenings = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Social Media Virtual Assistant",
      type: "Full-time",
      location: "Remote",
      department: "Marketing",
      salary: "$25 - $35/hr",
      experience: "2+ years",
      description: "Manage social media accounts, create content calendars, and engage with audiences for agency clients."
    },
    {
      id: 2,
      title: "PPC Specialist (Google Ads)",
      type: "Contract",
      location: "Remote",
      department: "Advertising",
      salary: "$30 - $45/hr",
      experience: "3+ years",
      description: "Create and optimize paid campaigns across Google, Meta, and LinkedIn for agency partners."
    },
    {
      id: 3,
      title: "SEO Content Writer",
      type: "Part-time",
      location: "Remote",
      department: "Content",
      salary: "$20 - $30/hr",
      experience: "1+ years",
      description: "Research and write SEO-optimized content for agency clients across various industries."
    },
    {
      id: 4,
      title: "Email Marketing Specialist",
      type: "Full-time",
      location: "Remote",
      department: "Marketing",
      salary: "$28 - $40/hr",
      experience: "2+ years",
      description: "Design and execute email campaigns, automations, and list segmentation strategies."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
            Join Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Current Openings
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore remote opportunities to work with top marketing agencies through Hibsons
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {jobOpenings.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FiBriefcase className="mr-2 text-indigo-600" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiMapPin className="mr-2 text-indigo-600" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiDollarSign className="mr-2 text-indigo-600" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiClock className="mr-2 text-indigo-600" />
                      <span>{job.experience} experience</span>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap">
                  Apply Now
                </button>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">{job.department}</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">Remote</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">Flexible Hours</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors">
            View All Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;