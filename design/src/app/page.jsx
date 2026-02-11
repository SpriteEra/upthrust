import React from 'react'
import Link from 'next/link'
import { Home, Construction, ArrowRight } from 'lucide-react'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center space-y-6 border border-slate-100">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-full">
                <Construction className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Work in Progress
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-md mx-auto">
              We're building something amazing. This page will be ready soon!
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse" style={{ width: '65%' }}></div>
            </div>
            <p className="text-sm text-slate-500 mt-2">Progress: 65%</p>
          </div>


          {/* Redirect Button */}
          <div className="pt-6">
            <Link
              href="/ui-ux-agency"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <Home className="w-5 h-5" />
              <span>Back to Main Page</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page