'use client';


import { Card } from '@/components/ui/card';
import { accounts } from '@/data/accountsData';

export default function AccountsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
            My Accounts
          </h1>
          <p className="text-lg text-slate-600">
            Track and manage all your financial accounts
          </p>
        </div>

        {/* Accounts List */}
        <div className="grid gap-3 sm:gap-4 mb-8">
          {accounts.map((account) => (
            <Card
              key={account.number}
              className="p-4 sm:p-6 hover:shadow-md transition-shadow duration-200 border-l-4 border-l-blue-500"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">
                    Account Number
                  </p>
                  <p className="text-lg sm:text-xl font-mono font-semibold text-slate-900">
                    {account.number}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">
                    Purpose
                  </p>
                  <p className="text-base sm:text-lg font-medium text-slate-700">
                    {account.purpose}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">
                    Minimum Amount
                  </p>
                  <p className={`text-base sm:text-lg font-medium ${account.minimumAmount === 'none' ? 'text-slate-500' : 'text-slate-900'}`}>
                    {account.minimumAmount}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Note Section */}
        <Card className="p-6 sm:p-8 bg-blue-50 border-2 border-blue-200">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Daily Expenses
              </h3>
              <p className="text-slate-700">
                Daily expenses will be recorded and tracked on Mobile Money and the wallet.
              </p>
            </div>
          </div>
        </Card>

        {/* Stats Summary */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-center text-slate-600">
            <span className="font-semibold text-slate-900">{accounts.length}</span> accounts configured
          </p>
        </div>
      </div>
    </div>
  );
}
