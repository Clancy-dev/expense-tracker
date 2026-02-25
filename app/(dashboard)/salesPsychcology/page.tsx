'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { salesPsychologyData } from '@/data/salesPsychcology';


export default function SalesPsychologyPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Sales Psychology
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 text-balance">
            Master the psychological principles that drive buying decisions and unlock your sales potential
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-4xl mx-auto">
        <div className="space-y-3">
          {salesPsychologyData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-150"
                aria-expanded={expandedIndex === index}
                aria-controls={`panel-${index}`}
              >
                <h2 className="text-lg font-bold text-gray-900 text-left">
                  {item.topic}
                </h2>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-indigo-600 transition-transform duration-300 ${
                    expandedIndex === index ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {expandedIndex === index && (
                <div
                  id={`panel-${index}`}
                  className="px-6 pb-4 pt-0 border-t border-gray-100 animate-in fade-in duration-200"
                >
                  <p className="text-gray-700 leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">
            Ready to Transform Your Sales Strategy?
          </h3>
          <p className="text-indigo-100 text-lg mb-6 text-balance">
            Apply these psychological principles to your sales approach and watch your conversion rates soar.
          </p>
          <button className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
}
