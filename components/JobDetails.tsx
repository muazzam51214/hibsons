import { FiCheck, FiMapPin, FiDollarSign, FiClock, FiUser, FiMail, FiShare2 } from "react-icons/fi";

const JobDetails = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Job Description (60%) */}
          <div className="lg:w-3/5">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
                Marketing
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Senior Media Buyer</h1>
              <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <FiMapPin className="mr-2 text-indigo-600" />
                  <span>Remote (US Timezones)</span>
                </div>
                <div className="flex items-center">
                  <FiDollarSign className="mr-2 text-indigo-600" />
                  <span>$65,000 - $85,000/year</span>
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-2 text-indigo-600" />
                  <span>Full-time</span>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Role</h2>
              <p className="text-gray-700 mb-6">
                We're looking for an experienced Media Buyer to manage and optimize digital advertising campaigns across multiple platforms. 
                You'll be responsible for strategizing, executing, and scaling paid media campaigns that deliver exceptional ROI.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex">
                  <FiCheck className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Develop and implement paid media strategies across Facebook, Google, and TikTok</span>
                </li>
                <li className="flex">
                  <FiCheck className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Manage budgets up to $100k/month across multiple client accounts</span>
                </li>
                <li className="flex">
                  <FiCheck className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Conduct A/B testing for ad creatives, copy, and landing pages</span>
                </li>
                <li className="flex">
                  <FiCheck className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Analyze campaign performance and provide data-driven recommendations</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex">
                  <FiCheck className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">3+ years experience in digital media buying</span>
                </li>
                <li className="flex">
                  <FiCheck className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Proven track record of scaling profitable campaigns</span>
                </li>
                <li className="flex">
                  <FiCheck className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Expertise in Facebook Ads Manager and Google Ads</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
              <ul className="space-y-3">
                <li className="flex">
                  <FiCheck className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Competitive salary + performance bonuses</span>
                </li>
                <li className="flex">
                  <FiCheck className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Fully remote work environment</span>
                </li>
                <li className="flex">
                  <FiCheck className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Health, dental, and vision insurance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Apply Card (40%) */}
          <div className="lg:w-2/5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Apply for this position</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <FiUser className="w-5 h-5 text-indigo-600 mr-3" />
                  <span>24 applicants</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FiClock className="w-5 h-5 text-indigo-600 mr-3" />
                  <span>Posted 2 weeks ago</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FiCheck className="w-5 h-5 text-indigo-600 mr-3" />
                  <span>Remote work available</span>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl mb-4">
                Apply Now
              </button>

              <p className="text-sm text-gray-500 text-center mb-6">or</p>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900 flex items-center">
                  <FiShare2 className="mr-2 text-indigo-600" />
                  Share this job
                </h4>
                <div className="flex space-x-4">
                  <button className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                    <FiMail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;