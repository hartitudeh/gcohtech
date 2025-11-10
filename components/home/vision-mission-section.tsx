"use client"

export default function VisionMissionSection() {
  return (
    <section className="bg-gradient-to-r from-[#0f1f35] to-[#1e3a5f] text-white py-16 px-8 my-8 md:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:transform hover:-translate-y-2 transition-all">
            <div className="text-4xl text-[#00a86b] mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              To be a leading institution in health education, recognized globally for producing compassionate,
              competent, and innovative healthcare professionals who transform lives and advance the healthcare
              industry.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:transform hover:-translate-y-2 transition-all">
            <div className="text-4xl text-[#00a86b] mb-4">🧭</div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/90 leading-relaxed">
              To provide comprehensive, quality health education that combines theoretical knowledge with practical
              skills, fostering ethical practice and lifelong learning in our students.
            </p>
          </div>

          {/* Core Values Card */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:transform hover:-translate-y-2 transition-all">
            <div className="text-4xl text-[#00a86b] mb-4">❤️</div>
            <h3 className="text-2xl font-bold mb-4">Core Values</h3>
            <p className="text-white/90 leading-relaxed">
              Excellence, Integrity, Compassion, Innovation, and Accountability. We believe in creating an inclusive
              environment where every student can thrive and contribute to society.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
