import React, { useState } from "react";

const QandA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I feel comfortable making a request even if it is my first time?",
      answer: "Yes, of course. We value communication with our customers. Please rest assured that Japanese members will be available to assist you with any inquiries."
    },
    {
      question: "How can I keep track of the project's progress?",
      answer: "We'll keep you updated on the progress of your project on a regular basis, and we'll be flexible where necessary to keep you up to date on any changes or progress."
    },
    {
      question: "How do your rates compare to other companies?",
      answer: "I-Nexus is based in the Philippines, where the cost of living is low, allowing us to develop at reasonable prices compared to production companies."
    },
    {
      question: "What makes you different from other teams?",
      answer: "We assign a dedicated director to each project, regardless of scale, to ensure smooth communication and ensure the project proceeds smoothly."
    },
    {
      question: "Can you accommodate small changes or modifications?",
      answer: "Yes, we can flexibly respond to any request, from small corrections to large-scale production. We can provide support with the speed that comes with having a small but elite team."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50" id="qanda">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Find answers to common questions below
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl font-semibold text-blue-600 mt-1">
                    Q.
                  </span>
                  <span className="text-gray-900 font-medium">
                    {faq.question}
                  </span>
                </div>
                <span className="text-2xl text-gray-400 ml-4 cursor-pointer">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="flex gap-3">
                    <span className="text-xl font-semibold text-green-600 mt-1">
                      A.
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QandA;