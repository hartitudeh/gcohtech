"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0f1f35] text-white py-12 px-8 mt-16 md:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#00a86b] mb-4">About GRACE</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              GRACE College of Health is committed to excellence in health education and training.
            </p>
            <div className="flex gap-4 mt-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00a86b] transition-colors"
              >
                f
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00a86b] transition-colors"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00a86b] transition-colors"
              >
                📷
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00a86b] transition-colors"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#00a86b] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#00a86b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#00a86b] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/admission" className="text-gray-300 hover:text-[#00a86b] transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-[#00a86b] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#00a86b] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#00a86b] mb-4">Contact Info</h3>
            <p className="text-sm text-gray-300 mb-2">📧 info@gracecollege.edu</p>
            <p className="text-sm text-gray-300 mb-2">📞 +1 (555) 123-4567</p>
            <p className="text-sm text-gray-300">📍 123 Health Avenue, Medical City, MC 12345</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 GRACE College of Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
