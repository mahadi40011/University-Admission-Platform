"use client";
import { X } from "lucide-react";

export default function CompareModal({ selectedUnis, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-red-100 text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            University Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-4 text-gray-500 font-medium">Features</th>
                  {selectedUnis.map((uni) => (
                    <th
                      key={uni._id}
                      className="py-4 text-xl font-bold text-cyan-400"
                    >
                      {uni.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr>
                  <td className="py-6 font-semibold text-gray-600">Country</td>
                  {selectedUnis.map((uni) => (
                    <td className="text-gray-600" key={uni._id}>
                      {uni.country}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-6 font-semibold text-gray-600">
                    Total Tuition Fee
                  </td>
                  {selectedUnis.map((uni) => (
                    <td key={uni._id} className="text-cyan-400 font-bold">
                      ${uni.tuitionFee.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-6 font-semibold text-gray-600">Min GPA</td>
                  {selectedUnis.map((uni) => (
                    <td key={uni._id} className="font-medium text-gray-700">
                      {uni.gpaRequirement}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-6 font-semibold text-gray-600">
                    Min IELTS
                  </td>
                  {selectedUnis.map((uni) => (
                    <td key={uni._id} className="font-medium text-gray-700">
                      {uni.ieltsRequirement}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
