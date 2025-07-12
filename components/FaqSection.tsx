"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can I get started with a Hibsons virtual assistant?",
      answer: "We can typically match you with a pre-vetted VA within 3 business days after our discovery call. The onboarding process takes 1-2 days depending on your requirements."
    },
    {
      question: "What's the difference between a Hibsons VA and other freelancers?",
      answer: "Our VAs go through a rigorous 5-stage vetting process where only 3% of applicants are accepted. They're trained in agency workflows and come with performance guarantees you won't find with typical freelancers."
    },
    {
      question: "Can I interview the VA before hiring?",
      answer: "Absolutely! We encourage you to interview your matched VA during a no-obligation trial period. Many clients find our matching algorithm so accurate that interviews become more of a formality."
    },
    {
      question: "What if I'm not satisfied with my VA?",
      answer: "We offer a 30-day risk-free trial. If you're not completely satisfied, we'll find a replacement at no additional cost or provide a full refund."
    },
    {
      question: "How do you handle timezone differences?",
      answer: "We match you with VAs in compatible timezones based on your needs. Many of our agency clients actually benefit from having VAs in different timezones for extended coverage."
    },
    {
      question: "What marketing tools do your VAs typically work with?",
      answer: "Our VAs are proficient in all major marketing platforms including Google Ads, Meta Business Suite, HubSpot, Mailchimp, SEMrush, Canva, and more. We ensure they're trained on your specific stack."
    }
  ];

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about working with Hibsons virtual assistants.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden transition-all"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FiChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div 
                className={`px-6 pb-6 pt-0 text-gray-600 transition-all duration-300 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link href="/get-started" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl">
            Book A Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;