"use client"

import Link from "next/link"

export default function AdmissionSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:px-4 md:py-8">
      <h2 className="text-4xl md:text-3xl font-bold text-[#1e3a5f] text-center mb-12">Current Admission in Progress</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Programs Card */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#00a86b] hover:shadow-lg hover:-translate-y-2 transition-all">
          <div className="text-3xl text-[#00a86b] mb-4">🎓</div>
          <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Available Programs</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            We offer comprehensive health education programs designed to meet industry standards and prepare students
            for successful careers.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-[#00a86b]">✓</span>
              Bachelor of Science in Nursing
            </li>
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-[#00a86b]">✓</span>
              Diploma in Medical Laboratory Science
            </li>
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-[#00a86b]">✓</span>
              Certificate in Health Administration
            </li>
          </ul>
          <Link
            href="/admission#courses"
            className="inline-block bg-[#1e3a5f] text-white px-6 py-2 rounded hover:bg-[#2d5a8c] transition-colors font-medium"
          >
            View All Courses
          </Link>
        </div>

        {/* Timeline Card */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#00a86b] hover:shadow-lg hover:-translate-y-2 transition-all">
          <div className="text-3xl text-[#00a86b] mb-4">⏰</div>
          <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Application Timeline</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Our admission process is streamlined to ensure qualified candidates are selected efficiently.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-[#00a86b]">✓</span>
              Application Deadline: December 31, 2025
            </li>
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-[#00a86b]">✓</span>
              Entrance Exam: January 2026
            </li>
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-[#00a86b]">✓</span>
              Results: February 2026
            </li>
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-[#00a86b]">✓</span>
              Enrollment: March 2026
            </li>
          </ul>
          <Link
            href="/admission#registration"
            className="inline-block bg-[#1e3a5f] text-white px-6 py-2 rounded hover:bg-[#2d5a8c] transition-colors font-medium"
          >
            Register Now
          </Link>
        </div>

        {/* Requirements Card */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#00a86b] hover:shadow-lg hover:-translate-y-2 transition-all">
          <div className="text-3xl text-[#00a86b] mb-4">✓</div>
          <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Requirements</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Meet the basic requirements to be eligible for admission to our programs.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-[#00a86b]">✓</span>
              High School Diploma or Equivalent
            </li>
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-[#00a86b]">✓</span>
              Minimum GPA: 2.5
            </li>
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-[#00a86b]">✓</span>
              English Proficiency Test
            </li>
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-[#00a86b]">✓</span>
              Medical Clearance
            </li>
          </ul>
          <Link
            href="/admission#requirements"
            className="inline-block bg-[#1e3a5f] text-white px-6 py-2 rounded hover:bg-[#2d5a8c] transition-colors font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
