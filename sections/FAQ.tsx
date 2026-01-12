"use client";

import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

type FaqType = {
  question: string;
  answer: string;
};

function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRef = React.useRef<HTMLDivElement>(null);
  const itemsPerPage = 5;

  const scrollToFaqTop = () => {
    if (faqRef.current) {
      const offset = 100;
      const elementPosition = faqRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const Faqs: FaqType[] = [
    {
      question: "What is AFREXA?",
      answer: "AFREXA stands for Africa Agribusiness Extension Academy.",
    },
    {
      question: "What is AFREXA designed for?",
      answer:
        "AFREXA is primarily designed for Agribusiness Extension Knowledge.",
    },
    {
      question: "How does AFREXA work?",
      answer:
        "AFREXA works through a blended learning approach, combining online platforms, mobile apps, and physical training.",
    },
    {
      question: "What are the key benefits of AFREXA?",
      answer:
        "One of the key benefits of AFREXA is Access to Continued Successes through Sustainable Opportunities.",
    },
    {
      question: "Who can enroll in AFREXA?",
      answer:
        "Students, graduates, and service providers can enroll in AFREXA and anyone interested in agricultural development in Africa.",
    },
    {
      question:
        "Can AFREXA be used by agricultural extension agents in general?",
      answer:
        "Yes, AFREXA can be used by agricultural extension agents in general.",
    },
    {
      question: "Can AFREXA be customized to meet specific needs?",
      answer: "Yes, AFREXA can be customized to meet specific needs.",
    },
    {
      question: "What is the primary goal of AFREXA?",
      answer:
        "The primary goal of AFREXA is to build the largest network of reliable extension agents across Africa.",
    },
    {
      question: "Is AFREXA limited to African countries?",
      answer:
        "No, AFREXA is not limited to African countries, but it focuses on African Agribusiness Extension.",
    },
    {
      question: "How does AFREXA ensure the quality of its content?",
      answer:
        "AFREXA ensures the quality of its content through partnerships with experts and organizations in the field.",
    },
    {
      question: "Can AFREXA be integrated with existing extension services?",
      answer:
        "Yes, AFREXA can be integrated with existing extension services to enhance their effectiveness.",
    },
    {
      question:
        "How does AFREXA support the professional development of extension agents?",
      answer:
        "AFREXA supports the professional development of extension agents through its training programs and resources.",
    },
    {
      question: "Can AFREXA be accessed offline?",
      answer:
        "Some features of AFREXA can be accessed offline, but full functionality requires internet connectivity.",
    },
    {
      question: "How does AFREXA support rural extension services?",
      answer:
        "AFREXA supports rural extension services by providing access to continuous and quality knowledge and resources through extension agents.",
    },
    {
      question: "How can AFREXA be accessed?",
      answer:
        "AFREXA can be accessed through multiple channels, including its website, mobile app, and physical trainings",
    },
  ];

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return Faqs;

    const query = searchQuery.toLowerCase();
    return Faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFaqs = filteredFaqs.slice(startIndex, endIndex);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
    setOpenIndex(null);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setOpenIndex(null);
      scrollToFaqTop();
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setOpenIndex(null);
      scrollToFaqTop();
    }
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="learnmore" className="w-full" ref={faqRef}>
      <div className="mx-auto max-w-7xl justify-center flex flex-col items-center text-center py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
        <h1
          style={{
            animationDelay: "0.6s",
            animationFillMode: "forwards",
          }}
          className="text-2xl md:text-4xl lg:text-5xl text-primary my-3 sm:my-4 lg:my-5 px-2 animate-fade-in-up">
          Have a question? We&apos;re here to help!
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-light max-w-2xl px-2 text-black">
          Check out our FAQ section for answers to common questions about our
          services, policies, and more. If you can&apos;t find what you&apos;re
          looking for, feel free to reach out to our support team for
          assistance.
        </p>
        <div className="w-full max-w-xl flex items-center relative mt-6 mx-auto justify-center">
          <input
            type="text"
            placeholder="Ask your question..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="mt-6 w-full max-w-md pl-12 pr-4 py-3 lg:py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <Search
            className="text-gray-400 -translate-x-10 transform translate-y-2.5"
            size={20}
          />
        </div>

        {searchQuery && (
          <p className="mt-4 text-sm text-gray-600">
            Found {filteredFaqs.length} result
            {filteredFaqs.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {currentFaqs.length > 0 ? (
          <div className="flex flex-col gap-5 w-full transition-all duration-300">
            {currentFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={startIndex + index}
                  className="border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
                  style={{
                    animation: `fadeIn 0.3s ease-in ${index * 0.05}s both`,
                  }}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-4 lg:p-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-primary text-base lg:text-xl pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`text-primary text-2xl font-light transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-45" : ""
                      }`}>
                      +
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                    <div className="p-4 lg:p-5 pt-0 text-sm lg:text-base text-gray-700 bg-gray-50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No FAQs found matching your search.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-primary hover:underline">
              Clear search
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredFaqs.length > itemsPerPage && (
          <div className="flex items-center justify-center gap-2 md:gap-4 mt-5 md:mt-12">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`flex items-center md:gap-2 py-1 px-2 md:px-6 md:py-3 rounded-full font-semibold transition-all ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary/90 hover:shadow-lg transform hover:scale-105"
              }`}>
              <ChevronLeft size={20} />
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      setOpenIndex(null);
                      scrollToFaqTop();
                    }}
                    className={`md:w-10 md:h-10 w-7 h-7 rounded-full font-semibold transition-all ${
                      currentPage === page
                        ? "bg-primary text-white shadow-lg scale-110"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}>
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center md:gap-2 px-2 md:px-6 py-1 md:py-3 rounded-full font-semibold transition-all ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary/90 hover:shadow-lg transform hover:scale-105"
              }`}>
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default FAQ;
