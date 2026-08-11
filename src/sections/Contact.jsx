const reasons = [
  {
    title: "Practical and Learner-Centred",
    text: "Our programs are designed around the real needs of learners, educators, families, and communities.",
  },
  {
    title: "Experienced Education Professionals",
    text: "Our team brings experience in teaching, school leadership, teacher development, research, assessment, and program implementation.",
  },
  {
    title: "Innovative Approaches",
    text: "We combine education, technology, creativity, research, and mentorship to develop effective solutions.",
  },
  {
    title: "Inclusive",
    text: "We intentionally consider girls, vulnerable youth, learners facing barriers, and underserved communities.",
  },
  {
    title: "Evidence-Based",
    text: "We use assessment, data, research, and monitoring to inform programs and measure progress.",
  },
  {
    title: "Partnership-Oriented",
    text: "We work with schools, parents, government institutions, organizations, development partners, and communities.",
  },
  {
    title: "Focused on Sustainable Change",
    text: "We build knowledge, skills, systems, and partnerships needed for long-term improvement.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-gray-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-widest text-teal-300">
            Why Choose Us?
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Building meaningful and sustainable change.
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            We combine practical experience, innovation, evidence, inclusion,
            and partnerships to create education solutions that make a real
            difference.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 font-bold">
                ✓
              </div>

              <h3 className="text-lg font-bold">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}