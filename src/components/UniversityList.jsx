"use client";
import { useState, useEffect } from "react";
import UniversityCard from "./UniversityCard";

export default function UniversityList() {
  const [universities, setUniversities] = useState([]);
  const [budget, setBudget] = useState(50000);
  const [userGPA, setUserGPA] = useState("");
  const [userIELTS, setUserIELTS] = useState("");

  useEffect(() => {
    const fetchUniversities = async () => {
      const res = await fetch(`/api/universities?budget=${budget}`);
      const data = await res.json();
      setUniversities(data);
    };
    fetchUniversities();
  }, [budget]);

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-fit sticky top-10">
        <h3 className="text-xl font-bold mb-6 text-gray-800">
          Filter & Eligibility
        </h3>

        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Max Tuition Fee:{" "}
            <span className="text-blue-600">${budget.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="5000"
            max="100000"
            step="1000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>$5k</span>
            <span>$100k</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your GPA
            </label>
            <input
              type="number"
              placeholder="e.g. 3.8"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
              value={userGPA}
              onChange={(e) => setUserGPA(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your IELTS
            </label>
            <input
              type="number"
              placeholder="e.g. 7.0"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
              value={userIELTS}
              onChange={(e) => setUserIELTS(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        {universities.map((uni) => {
          const isNotEligible =
            (userGPA && Number(userGPA) < uni.gpaRequirement) ||
            (userIELTS && Number(userIELTS) < uni.ieltsRequirement);

          return (
            <UniversityCard
              key={uni._id}
              isNotEligible={isNotEligible}
              uni={uni}
            />
          );
        })}
      </div>
    </div>
  );
}
