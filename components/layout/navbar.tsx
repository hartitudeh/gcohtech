"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [admissionDropdownOpen, setAdmissionDropdownOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-100">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center md:px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#1e3a5f] hover:text-[#2d5a8c] transition-colors flex items-center gap-2"
        >
          <span>🏥</span> GRACE College
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="hidden md:block text-2xl text-[#1e3a5f] cursor-pointer"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } md:hidden absolute md:relative top-full md:top-auto left-0 md:left-auto right-0 md:right-auto bg-white md:bg-transparent flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-0 shadow-md md:shadow-none w-full md:w-auto`}
        >
          <Link href="/" className="text-[#111827] hover:text-[#00a86b] font-medium transition-colors py-3 md:py-0">
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className="text-[#111827] hover:text-[#00a86b] font-medium transition-colors flex items-center gap-2 py-3 md:py-0 w-full md:w-auto justify-between md:justify-start"
            >
              About <span className="text-xs">▼</span>
            </button>
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 bg-white border border-[#e5e7eb] rounded-lg shadow-lg min-w-[200px] mt-2 z-200 md:block">
                <Link
                  href="/about#about-college"
                  className="block px-4 py-3 text-[#111827] hover:bg-[#f9fafb] hover:text-[#00a86b] transition-colors"
                >
                  About the College
                </Link>
                <Link
                  href="/about#vision"
                  className="block px-4 py-3 text-[#111827] hover:bg-[#f9fafb] hover:text-[#00a86b] transition-colors"
                >
                  Vision
                </Link>
                <Link
                  href="/about#mission"
                  className="block px-4 py-3 text-[#111827] hover:bg-[#f9fafb] hover:text-[#00a86b] transition-colors"
                >
                  Mission
                </Link>
                <Link
                  href="/about#officials"
                  className="block px-4 py-3 text-[#111827] hover:bg-[#f9fafb] hover:text-[#00a86b] transition-colors"
                >
                  Principal Officials
                </Link>
              </div>
            )}
          </div>

          {/* Admission Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAdmissionDropdownOpen(!admissionDropdownOpen)}
              className="text-[#111827] hover:text-[#00a86b] font-medium transition-colors flex items-center gap-2 py-3 md:py-0 w-full md:w-auto justify-between md:justify-start"
            >
              Admission <span className="text-xs">▼</span>
            </button>
            {admissionDropdownOpen && (
              <div className="absolute top-full left-0 bg-white border border-[#e5e7eb] rounded-lg shadow-lg min-w-[200px] mt-2 z-200 md:block">
                <Link
                  href="/admission#courses"
                  className="block px-4 py-3 text-[#111827] hover:bg-[#f9fafb] hover:text-[#00a86b] transition-colors"
                >
                  Available Courses
                </Link>
                <Link
                  href="/admission#requirements"
                  className="block px-4 py-3 text-[#111827] hover:bg-[#f9fafb] hover:text-[#00a86b] transition-colors"
                >
                  Requirements
                </Link>
                <Link
                  href="/admission#registration"
                  className="block px-4 py-3 text-[#111827] hover:bg-[#f9fafb] hover:text-[#00a86b] transition-colors"
                >
                  Registration
                </Link>
                <Link
                  href="/admission#login"
                  className="block px-4 py-3 text-[#111827] hover:bg-[#f9fafb] hover:text-[#00a86b] transition-colors"
                >
                  Login
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="text-[#111827] hover:text-[#00a86b] font-medium transition-colors py-3 md:py-0"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-[#111827] hover:text-[#00a86b] font-medium transition-colors py-3 md:py-0"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="bg-[#1e3a5f] text-white px-6 py-2 rounded-lg hover:bg-[#2d5a8c] transition-colors font-medium w-full text-center md:w-auto mt-2 md:mt-0"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
