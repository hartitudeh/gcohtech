"use client"

export default function MiniNav() {
  return (
    <div className="bg-[#0f1f35] px-8 py-3 flex justify-between items-center text-sm text-white md:px-4 md:py-2 md:text-xs">
      {/* Social Links */}
      <div className="flex gap-4 items-center md:gap-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#00a86b] transition-colors text-lg"
        >
          f
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#00a86b] transition-colors text-lg"
        >
          𝕏
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#00a86b] transition-colors text-lg"
        >
          📷
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#00a86b] transition-colors text-lg"
        >
          in
        </a>
      </div>

      {/* Email Section */}
      <div className="flex items-center gap-2">
        <span>📧</span>
        <a href="mailto:info@gracecollege.edu" className="text-white hover:text-[#00a86b] transition-colors">
          info@gracecollege.edu
        </a>
      </div>
    </div>
  )
}
