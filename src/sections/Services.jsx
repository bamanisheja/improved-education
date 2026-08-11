const values = [
  {
    title: "Inclusion",
    text: "We promote equal opportunities and seek to reach learners and groups who face barriers to education.",
  },
  {
    title: "Innovation",
    text: "We use creative approaches, technology, research, and new ideas to improve learning.",
  },
  {
    title: "Integrity",
    text: "We work with transparency, professionalism, accountability, and respect.",
  },
  {
    title: "Excellence",
    text: "We are committed to high-quality services and continuous improvement.",
  },
  {
    title: "Empowerment",
    text: "We equip people with knowledge, skills, confidence, and opportunities to take positive action.",
  },
  {
    title: "Collaboration",
    text: "We believe sustainable educational change is achieved through strong partnerships.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-teal-700">
              About Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Education that creates opportunity.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Improve Education is an education-focused organization dedicated
              to strengthening education systems and expanding learning
              opportunities for children, young people, educators, families,
              and communities.
            </p>
           

            <p className="mt-4 leading-8 text-gray-600">
              We believe that education goes beyond academic achievement.
              Quality education should develop knowledge, skills, confidence,
              creativity, character, leadership, and the ability to contribute
              positively to society.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We work through partnerships with schools, educators, parents,
              youth organizations, government institutions, development
              partners, and other stakeholders.
            </p>
          </div>

          <div className="rounded-3xl bg-teal-50 p-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Our Commitment
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Improve Education is committed to creating learning environments
              where children and young people can learn, discover their
              talents, develop their skills, express themselves, and prepare
              for a better future.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <h4 className="font-bold text-teal-700">
                    {value.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission / Vision */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gray-900 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-300">
              Our Vision
            </p>

            <p className="mt-4 text-xl leading-8">
              A society where every learner has access to quality, inclusive,
              innovative, and empowering education that enables them to reach
              their full potential.
            </p>
          </div>

          <div className="rounded-3xl bg-teal-700 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-200">
              Our Mission
            </p>

            <p className="mt-4 text-xl leading-8">
              To empower learners, educators, families, and communities through
              innovative and inclusive education solutions that improve
              learning outcomes, develop talents, strengthen leadership, and
              promote lifelong learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}