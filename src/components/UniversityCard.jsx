import React from 'react'

export default function UniversityCard({ isNotEligible , uni}) {
  return (
    <div
      className="relative bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      {isNotEligible && (
        <div className="absolute top-4 right-4 bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          Not Eligible
        </div>
      )}

      <h4 className="text-xl font-bold text-gray-800">{uni.name}</h4>
      <p className="text-gray-500 text-sm mb-4">{uni.country}</p>

      <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-xl">
        <div>
          <p className="text-gray-400">Tuition Fee</p>
          <p className="font-bold text-blue-600">
            ${uni.tuitionFee.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-400">Min GPA</p>
          <p className="font-bold text-gray-700">{uni.gpaRequirement}</p>
        </div>
        <div>
          <p className="text-gray-400">Min IELTS</p>
          <p className="font-bold text-gray-700">{uni.ieltsRequirement}</p>
        </div>
      </div>

      <button className="w-full mt-5 bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-blue-600 transition-colors">
        Apply Now
      </button>
    </div>
  );
}
