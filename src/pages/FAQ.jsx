import React, { use, useEffect } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Loading from "../components/Loading/Loading";

const faqs = [
  {
    question: "How can I apply for a job?",
    answer:
      "To apply for a job, browse available listings and click the 'Apply Now' button on the job details page.",
  },
  {
    question: "Can I edit my application after submission?",
    answer:
      "No, once submitted, an application cannot be edited. Please review carefully before submitting.",
  },
  {
    question: "How do I receive job alerts?",
    answer:
      "You can set your job preferences in the alerts section to receive tailored job notifications.",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Yes, we use industry-standard security measures to protect your personal data.",
  },
  {
    question: "Do I need to create an account to apply for jobs?",
    answer:
      "Yes, you must create a free account to apply, save jobs, and track your applications.",
  },
  {
    question: "Can I upload my resume?",
    answer:
      "Absolutely! You can upload your resume in your profile section to speed up the application process.",
  },
  {
    question: "How do I know if my application was successful?",
    answer:
      "After applying, you will receive a confirmation email and can track the status in your profile dashboard.",
  },
  {
    question: "What if I forget my password?",
    answer:
      "Click on 'Forgot Password' on the login page and follow the instructions to reset your password via email.",
  },
  {
    question: "Are the job listings verified?",
    answer:
      "Yes, we manually verify all job listings to ensure authenticity and protect users from fraud.",
  },
  {
    question: "Can I filter jobs by category or location?",
    answer:
      "Yes, use the filters on the job listings page to narrow results by category, location, or company.",
  },
];

const FAQ = () => {
  const { loading } = use(AuthContext);
  useEffect(() => {
    document.title = "JobTracker | FAQ";
  }, []);

  if (loading) return <Loading></Loading>;

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen md:pt-20 pt-16 md:pb-15 pb-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-200 shadow-md"
          >
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold text-accent flex items-center justify-between">
              {faq.question}
            </div>
            <div className="collapse-content text-gray-700">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
