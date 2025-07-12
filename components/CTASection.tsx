import { FiArrowRight } from 'react-icons/fi';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Agency with Top-Tier Virtual Assistants?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ marketing agencies scaling efficiently with Hibsons. Pay $0 until you hire.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/get-started"
              className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Book a Free Strategy Call
              <FiArrowRight className="ml-2" />
            </a>
            
            <a
              href="/careers"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-600 transition-all flex items-center justify-center"
            >
              View Careers
            </a>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-blue-100 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              No upfront costs
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              30-day risk-free trial
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;