"use client"

export default function WelcomeSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:px-4 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-lg h-96">
          <img src="/college-provost-professional.jpg" alt="College Provost" className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div>
          <div className="text-[#00a86b] text-sm font-semibold uppercase tracking-widest mb-2">Welcome Address</div>
          <h2 className="text-4xl md:text-3xl font-bold text-[#1e3a5f] mb-4">Message from the Provost</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Welcome to GRACE College of Health, where we are committed to nurturing the next generation of healthcare
            professionals. Our institution stands as a beacon of excellence in medical education, combining rigorous
            academic training with practical clinical experience.
          </p>
          <div className="text-lg italic text-[#1e3a5f] border-l-4 border-[#00a86b] pl-6 my-6">
            "Education is the most powerful tool we can use to change the world. At GRACE, we empower our students to
            make a difference in healthcare and society."
          </div>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Our faculty members are dedicated educators and practitioners who bring real-world experience into the
            classroom. We believe in holistic development, fostering not just medical knowledge but also compassion,
            ethics, and leadership qualities in our students.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            We invite you to join our community and be part of a transformative educational journey.
          </p>
        </div>
      </div>
    </section>
  )
}
